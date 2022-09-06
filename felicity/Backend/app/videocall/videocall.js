const video = require("./videocall_model");
var videocall = module.exports;

// Update DB when doctor or patient enter the room
videocall.doctorEnterRoom = function doctorEnterRoom(rid, callback) {
    video.updateDoctorInRoom(1, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, { msg: "Successfully entered the reservation room" });
    })
}
videocall.patientEnterRoom = function patientEnterRoom(rid, callback) {
    video.updatePatientInRoom(1, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, { msg: "Successfully entered the reservation room" });
    })
}

// Update DB when doctor or patient leave the room
videocall.doctorLeaveRoom = function doctorLeaveRoom(rid, callback) {
    video.updateDoctorInRoom(0, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, { msg: "Successfully left the reservation room" });
    })
}
videocall.patientLeaveRoom = function patientLeaveRoom(rid, callback) {
    video.updatePatientInRoom(0, rid, (err, result) => {
        if (err) callback(err, null);

        callback(null, { msg: "Successfully left the reservation room" });
    })
}

// Check if doctor or patient are in the room.
videocall.checkDoctorInRoom = function checkDoctorInRoom(rid, io, socket, callback) {
    video.getDoctorInRoom(rid, (err, result) => {
        if (err) callback(err, result);

        // When doctor is in the room
        if (result[0]["d_in_room"]) {
            // Send the doctor's socket id to patient
            video.getDoctorSocket(rid, (error, res) => {
                if (error) callback(error, null);
                socket.emit("me", ({ socketid: socket.id, otherSocketId: res }));

                // Inform the doctor that patient is entering the room
                io.to(res).emit("room-entered", ({ socketid: socket.id }));
            })
        }
        // When doctor is not in the room
        else {
            // Inform patient to wait until doctor enters the room
            socket.emit("me", ({ socketid: socket.id, otherSocketId: null }));
        }
        callback(null, result);
    })
}
videocall.checkPatientInRoom = function checkPatientInRoom(rid, io, socket, callback) {
    video.getPatientInRoom(rid, (err, result) => {
        if (err) callback(err, result);

        // When patient is in the room
        if (result[0]["p_in_room"]) {
            // Send the patient's socket id to doctor
            video.getPatientSocket(rid, (error, res) => {
                if (error) callback(error, null);
                socket.emit("me", ({ socketid: socket.id, otherSocketId: res }));

                // Inform the patient that doctor is entering the room
                io.to(res).emit("room-entered", ({ socketid: socket.id }));
            })
        }
        // When patient is not in the room
        else {
            // Inform doctor to wait until patient enters the room
            socket.emit("me", ({ socketid: socket.id, otherSocketId: null }));
        }
        callback(null, result);
    })
}