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

let tmpId = sessionStorage.getItem("jwt")
let tmpRole = sessionStorage.getItem("role")
if (tmpId) {
    socket.emit("reconnection", [tmpId, tmpRole])
}

let recordAudio;

const ContextProvider = ({ children }) => {
    const [id, setId] = useState();
    const [name, setName] = useState();
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
    const [count, setCount] = useState(0);
    const [commentsLoad, setCommentsLoad] = useState(false);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();




    function loginSessionStore(role, jwt, name) { //stores items in sessionStorage
        window.sessionStorage.setItem('role', JSON.stringify(role));
        window.sessionStorage.setItem('jwt', JSON.stringify(jwt));
        window.sessionStorage.setItem('name', JSON.stringify(name));
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
                        loginSessionStore(true, response.data[0].user_id, response.data[0].nickname);
                        setId(response.data[0].user_id);
                        setName(response.data[0].nickname);
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
                        loginSessionStore(false, response.data[0].doctor_id, response.data[0].nickname)
                        setId(response.data[0].doctor_id);
                        setName(response.data[0].nickname);
                    }
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    function LocalToUTC(date, time) {
        const dateFromUI = date; //"2022-06-12"
        const timeFromUI = time; //"12:30"

        const dateParts = dateFromUI.split("-");
        console.log(dateParts)
        const timeParts = timeFromUI.split(":");
        console.log(timeParts)
        const localDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
        const dtUTC = localDate.toISOString().split('T');
        const [dateUTC, timeUTC] = [dtUTC[0], dtUTC[1].slice(0, 5)];

        return [dateUTC, timeUTC]
    }

    function UTCToLocal(reserved_date, reserved_time) {
        var dateParts = reserved_date.split("-"); //reserved_date "05-13-2022" , time "12:30 PM"
        const [time, modifier] = reserved_time.split(" ");
        let [hours, minutes] = time.split(":");
        if (hours === "12") {
            hours = "00";
        }
        if (modifier === "PM") {
            hours = parseInt(hours, 10) + 12;
        }
        var ISOtime = `${hours}:${minutes}`;
        var timeParts = ISOtime.split(":") //"14:30"

        var date = new Date(dateParts[2], dateParts[0] - 1, dateParts[1], timeParts[0], timeParts[1]);
        var newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
        var LocalDate = newDate.toLocaleDateString()
        var LocalTime = newDate.toLocaleTimeString('it-IT')

        return [LocalDate, LocalTime]
    }

    const changeDoctorAvailableTime = (doctorId, timeA, timeB) => {
        const [tmpDateA, UTCTimeA] = LocalToUTC("2022-06-02", timeA);
        const [tmpDateB, UTCTimeB] = LocalToUTC("2022-06-02", timeB);
        Axios.post(`${API_URL}/dstatustime`, { doctorId: doctorId, timeA: UTCTimeA, timeB: UTCTimeB })
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
        // console.log(title, context, category)
        const mhtData = getMHTData();
        const postData = {
            title: title,
            context: context,
            category: category,
            MHT: mhtData,
        }

        Axios.post(`${API_URL}/write-post`, postData)
            .then((response) => {
                if (response.data.msg) {
                    sessionClose()
                    document.location.href = '/#/Patient/RecentPost';
                }
            })
    }

    const sendComment = (postId, role, userId, comment) => {
        const data = {
            postId: postId,
            role: role,
            userId: userId,
            comment: comment
        }
        Axios.post(`${API_URL}/write-comment`, data)
            .then((response) => {
                if (response.data.msg) {
                    // 여기에 적으시오
                }
            })
    }

    const readComment = (postId, setComment) => {
        Axios.post(`${API_URL}/read-comment`, { postId: postId })
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    date = response.data[i].time.split("T")[0]
                    time = response.data[i].time.split("T")[1].split(".")[0]
                    var [date, time] = UTCToLocal(date, time)
                    response.data[i].time = date + " " + time
                }
                console.log(response.data)
                setComment(response.data)
                setCommentsLoad(true)
            })
    }

    const sendReservation = (departmentId, preferredDoctorId, date, time) => {
        const mhtData = getMHTData();
        const [reserved_date, reserved_time] = LocalToUTC(date, time)
        const reservationData = {
            department: departmentId,
            date: reserved_date,
            time: reserved_time,
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

    const videoCallSend = (m) => {
        if (m !== "") {
            socket.emit("chat", { userToCall: userToCall, name: name, msg: m, time: moment(new Date()).format("h:mm A") });
            setChatArr([...chatArr, { name: name, msg: m, time: moment(new Date()).format("h:mm A") }]);
        }
    }

    const convSend = (c, r, m) => {
        if (m !== "") {
            var currentTime = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
            socket.emit("chat", { userToCall: userToCall, name: name, msg: m, time: currentTime });
            Axios.post(`${API_URL}/post_chat_conv`, {
                conv_id: c,
                name: name,
                receiver: r,
                message: m,
                time: currentTime
            })
        }
    }

    const docConvSend = (m) => {
        if (m !== "") {
            var currentTime = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
            socket.emit("chat", { userToCall: userToCall, name: name, msg: m, time: currentTime });
            Axios.post(`${API_URL}/post_doctor_chat`, {
                name: name,
                message: m,
                time: currentTime
            })
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
        socket.on("new-login-attempt", (socketId) => {
            console.log(socketId);
            // If new login for a same user is detected, current user can choose yes/no.
            // If yes, log out from this browser and login from another device.
            // If no, keep the login status from this browser, and reject login from another device
        })
    })

    return (
        <SocketContext.Provider
            value={{
                userToCall, setUserToCall, role, setRole, postPatientLogin,
                postDoctorLogin, id, startCall, call, callAccepted, myVideo,
                userVideo, stream, someName, setSomeName, callEnded, me,
                callUser, leaveCall, answerCall, isClicked, getAudio,
                stopAudio, sendAudio, text, recordAudio, chatArr, videoCallSend, convSend, docConvSend, sendPost,
                sendReservation, acceptReservation, userJoined, setUserJoined,
                sendComment, UTCToLocal, changeDoctorAvailableTime, readComment
            }}
        >
            {children}
        </SocketContext.Provider>
    );
}

export { ContextProvider, SocketContext }