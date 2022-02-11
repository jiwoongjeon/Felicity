import React, { createContext, useState, useRef, useEffect } from "react";
import { connect, io } from "socket.io-client";
import Peer from "simple-peer";
import Axios from "axios";
import RecordRTC, { StereoAudioRecorder } from "recordrtc";

const SocketContext = createContext();

const socket = io("http://localhost:3001");

let recordAudio;

const ContextProvider = ({ children }) => {
    const [id, setId] = useState(0);
    const [role, setRole] = useState(true); // true: p, false: d
    const [userToCall, setUserToCall] = useState("");

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

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    const postPatientLogin = ({ email, password }) => async () => {
        try {
            console.log(email, password);
            await Axios.post(`http://localhost:3001/plogin`, {
                email: email,
                password: password
            }).then((response) => {
                console.log(response.data[0].user_id);
                setId(response.data[0].user_id);
                setRole(true);
                socket.emit("login", [response.data[0].user_id, true]);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const postDoctorLogin = ({ email, password }) => async () => {
        try {
            console.log(email, password);
            await Axios.post(`http://localhost:3001/dlogin`, {
                email: email,
                password: password
            }).then((response) => {
                console.log(response.data[0].doctor_id);
                setId(response.data[0].doctor_id);
                setRole(false);
                socket.emit("login", [response.data[0].doctor_id, false]);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const startCall = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);

                myVideo.current.srcObject = currentStream;
            });

        socket.emit("start", { id, role });

        socket.on("me", ({ socketid, otherUserId, otherSocketId }) => {
            console.log("other socket id: %s", otherSocketId);
            console.log("other user id: %d", otherUserId);
            console.log("my socket id: %s", socketid);
            setMe(socketid);
            setUserToCall(otherSocketId);
        });


        socket.on("calluser", ({ from, someName: callerName, signal }) => {
            console.log("calling")
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
                stopAudio, text, recordAudio
            }}
        >
            {children}
        </SocketContext.Provider>
    );
}

export { ContextProvider, SocketContext }