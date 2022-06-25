import React, { createContext, useState, useRef, useEffect } from "react";
import { connect, io } from "socket.io-client";
import { BrowserRouter, Redirect } from "react-router-dom";
import Peer from "simple-peer";
import Axios from "axios";
import RecordRTC, { StereoAudioRecorder } from "recordrtc";

import API_URI from "./server-ip";
import { render } from "react-dom";
import LoginRedirect from "../views/UserRedirect/login";
import API_URL from "./server-ip";

const moment = require("moment");
const SocketContext = createContext();

const socket = io(`${API_URL}`);

let recordAudio;

const ContextProvider = ({ children }) => {
    const [id, setId] = useState();
    const [role, setRole] = useState(true); // true: p, false: d
    const [userToCall, setUserToCall] = useState("");

    const [chatArr, setChatArr] = useState([]); // chatArr: 채팅 리스트

    const [stream, setStream] = useState(null);
    const [me, setMe] = useState("");
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [someName, setSomeName] = useState("");

    const [isClicked, setIsClicked] = useState(false);
    const [text, setText] = useState([
        {
            transcription: "",
            translation: ""
        }
    ])

    const [userJoined, setUserJoined] = useState(false);
    const [reserved, setReserved] = useState(false);
    const [posted, setPosted] = useState(false);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    function loginSessionStore(role, jwt) { //stores items in sessionStorage
        window.sessionStorage.setItem('role', JSON.stringify(role));
        window.sessionStorage.setItem('jwt', JSON.stringify(jwt));
    }

    function sessionClose() { //stores items in sessionStorage
        window.sessionStorage.removeItem('hurt');
        window.sessionStorage.removeItem('depart');
        window.sessionStorage.removeItem('time');
        window.sessionStorage.removeItem('where');
        window.sessionStorage.removeItem('level');
        window.sessionStorage.removeItem('why');
        window.sessionStorage.removeItem('checklist');
    }

    const postPatientLogin = ({ email, password }) => async () => {

        try {
            setRole(true);
            console.log(email, password);
            await Axios.post(`${API_URL}/plogin`, {
                email: email,
                password: password
            }).then((response) => {
                if (response.data.errMsg) {
                    console.log("Incorrect email or password")
                    setId(0);
                }
                else {
                    socket.emit("login", [response.data[0].user_id, true]);
                    if (response.data[0].user_id) {
                        loginSessionStore(true, response.data[0].user_id)
                        setId(response.data[0].user_id);
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    const postDoctorLogin = ({ email, password }) => async () => {
        try {
            setRole(false);
            console.log(email, password);
            await Axios.post(`${API_URL}/dlogin`, {
                email: email,
                password: password
            }).then((response) => {
                if (response.data.errMsg) {
                    console.log("Incorrect email or password")
                    setId(0);
                }
                else {
                    socket.emit("login", [response.data[0].doctor_id, false]);
                    if (response.data[0].doctor_id) {
                        loginSessionStore(false, response.data[0].doctor_id)
                        setId(response.data[0].doctor_id);
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    const getMHTData = () => {

        const MHTdata = {
            patientId: sessionStorage.getItem("jwt"),
            hurt: sessionStorage.getItem("hurt"),
            department: sessionStorage.getItem("depart"),
            time: sessionStorage.getItem("time"),
            where: sessionStorage.getItem("where"),
            level: sessionStorage.getItem("level"),
            why: sessionStorage.getItem("why"),
            checklist: JSON.parse(sessionStorage.getItem("checklist")),
        }
        return MHTdata;
    }

    const sendPost = (title, context, category) => {
        console.log(title, context, category)
        const mhtData = getMHTData();
        const postData = {
            title: title,
            context: context,
            category: category,
            MHT: mhtData,
        }
        Axios.post(`${API_URL}/write-post`, postData)
        sessionClose()
    }

    const sendReservation = (departmentId, preferredDoctorId, date, time) => {
        const mhtData = getMHTData();
        const reservationData = {
            department: departmentId,
            date: date,
            time: time,
            pDoc: preferredDoctorId,
            MHT: mhtData,
        }
        Axios.post(`${API_URL}/create_schedule`, reservationData)
        sessionClose();
    }

    const acceptReservation = (doctorId, reservationId) => {
        Axios.post(`${API_URL}/accept_request`, {
            doctor_id: doctorId,
            reservation_id: reservationId
        }).then((response) => {
            setReserved(true);
            setReserved(false);
        });
    }

    const send = (n, m) => {
        if (m !== "") {
            socket.emit("chat", { userToCall: userToCall, name: n, msg: m, time: moment(new Date()).format("h:mm A") });
            setChatArr([...chatArr, { name: n, msg: m, time: moment(new Date()).format("h:mm A") }]);
        }
    }

    useEffect(() => {
        socket.once("chatting", (data) => {
            const { name, msg, time } = data;
            setChatArr([...chatArr, { name: name, msg: msg, time: time }]);
            console.log(data);
        });
        return (() => {
            socket.off("chatting");
        })
    })

    const startCall = (reservation_id) => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);

                myVideo.current.srcObject = currentStream;
            });

        socket.emit("start", { reservation_id });

        socket.on("me", ({ socketid, otherSocketId }) => {
            setMe(socketid);
            if (otherSocketId == null) {
                console.log("Waiting for other user to join the room")
                socket.on("room-entered", ({ socketid }) => {
                    setUserToCall(socketid);
                    setUserJoined(true);
                    console.log("User joined the room")
                })
            }
            else {
                setUserToCall(otherSocketId);
                setUserJoined(true);
                console.log("Joining the room");
                console.log(userToCall);
            }
        });


        socket.on("calluser", ({ from, someName: callerName, signal }) => {
            console.log("calling");
            setCall({ isReceivedCall: true, from, someName: callerName, signal });
        });
    }

    const answerCall = () => {

        console.log("answer call");

        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: call.from })
        });

        peer.on('stream', (currentStream) => {
            console.log("set userVideo")
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    }

    const callUser = () => {

        console.log("call user");
        console.log("user to call : %s", userToCall);
        console.log("my socket id: %s", me);

        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: userToCall, signalData: data, from: me, someName });
        });

        peer.on('stream', (currentStream) => {
            console.log("set userVideo")
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            console.log("call accepted");
            setCallAccepted(true);

            peer.signal(signal);

            connectionRef.current = peer;
        })
    }

    const getAudio = () => {
        setIsClicked(true);
        recordAudio = RecordRTC(stream, {
            type: "audio",
            mimeType: "audio/webm", //필요한가?
            // sampleRate: "16000",
            sampleRate: "44100",

            recorderType: StereoAudioRecorder, //필요한가?

            numberOfAudioChannels: 1,

            timeSlice: 4000,
            // desiredSampRate: 16000
            desiredSampRate: 44100
        });

        recordAudio.startRecording();

        // navigator.getUserMedia({
        //     audio: true
        // }, (stream) => {
        //     console.log("succeed getting stream")
        //     recordAudio = RecordRTC(stream, {
        //         type: "audio",
        //         mimeType: "audio/webm", //필요한가?
        //         // sampleRate: "16000",
        //         sampleRate: "44100",

        //         recorderType: StereoAudioRecorder, //필요한가?

        //         numberOfAudioChannels: 1,

        //         timeSlice: 4000,
        //         // desiredSampRate: 16000
        //         desiredSampRate: 44100
        //     });

        //     recordAudio.startRecording();
        //     console.log(isClicked)
        // }, (err) => console.log(err))
    }
    const stopAudio = () => {
        setIsClicked(false)
        console.log(recordAudio);
        recordAudio.stopRecording(() => {
            recordAudio.getDataURL((audioDataURL) => {
                var files = {
                    audio: {
                        type: recordAudio.getBlob().type || "audio/wav",
                        dataURL: audioDataURL
                    }
                };
                socket.emit("message-transcribe", files)
                console.log(isClicked)
            })
        })
    }

    const sendAudio = () => {
        socket.emit("send-transcription", { userToCall, text })
        text.transcription = ""
        text.translation = ""
    }


    const leaveCall = () => {
        setCallEnded(true);

        connectionRef.current.destroy();

        window.location.reload();
    }

    useEffect(() => {
        socket.on("result", (result) => {
            setText(result)
            console.log(result)
        })
    })

    return (
        <SocketContext.Provider
            value={{
                userToCall, setUserToCall, role, setRole, postPatientLogin,
                postDoctorLogin, id, startCall, call, callAccepted, myVideo,
                userVideo, stream, someName, setSomeName, callEnded, me,
                callUser, leaveCall, answerCall, isClicked, getAudio,
                stopAudio, sendAudio, text, recordAudio, chatArr, send, sendPost,
                sendReservation, acceptReservation, userJoined, setUserJoined
            }}
        >
            {children}
        </SocketContext.Provider>
    );
}

export { ContextProvider, SocketContext }