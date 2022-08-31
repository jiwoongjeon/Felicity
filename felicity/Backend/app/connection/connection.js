const conn = require("./connection_model");
var connection = module.exports;

// If a socket id for a user is in DB, the user is online.
// If not, the user is offline

// When user logs in or reconnects to the server
connection.socketDoctorLogin = function socketDoctorLogin(doctorId, socket, io, callback) {
    // Check if a user is already online
    conn.checkDoctorSocket(doctorId, (error, result) => {
        if (error) callback(error, null);

        // If not online, update socket id
        if (result[0].socket == null) {
            conn.updateDoctorSocket(socket.id, doctorId, (err, res) => {
                if (err) callback(err, null);

                callback(null, res);
            });
        }

        // When socket id exist
        else {
            // Check if the user is connected in socket pool
            const a = io.allSockets();
            a.then((socketSet) => {
                // If user is not in the pool, update socket id
                if (!socketSet.has(result[0].socket)) {
                    console.log(result[0].socket, " not in ", socketSet);
                    conn.updateDoctorSocket(socket.id, doctorId, (err, res) => {
                        if (err) callback(err, null);

                        callback(null, res);
                    });
                }
                // If user is in the pool, ask to a previous logged in node.
                else {
                    console.log(result[0].socket, " in ", socketSet)
                    console.log("to: ", result[0].socket, " from: ", socket.id)
                    // Ask currently logged in browser, and wait for the answer
                    io.to(result[0].socket).emit("new-login-attempt", socket.id)

                    // If no response for 1 minute, ???
                    socket.on("new-login-answer", (response) => {
                        console.log(response);
                        // OK: logout
                        // NO: keep login status
                    });
                }
            });
        }
    });
}

connection.socketPatientLogin = function socketPatientLogin(patientId, socket, io, callback) {
    // Check if a user is already online
    conn.checkPatientSocket(patientId, (error, result) => {
        if (error) callback(error, null);

        // If not online, update socket id
        if (result[0].socket == null) {
            conn.updatePatientSocket(socket.id, patientId, (err, res) => {
                if (err) callback(err, null);

                callback(null, res);
            });
        }

        // When socket id exist
        else {
            // Check if the user is connected in socket pool
            const a = io.allSockets();
            a.then((socketSet) => {
                // If user is not in the pool, update socket id
                if (!socketSet.has(result[0].socket)) {
                    console.log(result[0].socket, " not in ", socketSet);
                    conn.updatePatientSocket(socket.id, patientId, (err, res) => {
                        if (err) callback(err, null);

                        callback(null, res);
                    });
                }
                // If user is in the pool, ask to a previous logged in node.
                else {
                    console.log(result[0].socket, " in ", socketSet)
                    console.log("to: ", result[0].socket, " from: ", socket.id)
                    // Ask currently logged in browser, and wait for the answer
                    io.to(result[0].socket).emit("new-login-attempt", socket.id)

                    // If no response for 1 minute, ???
                    socket.on("new-login-answer", (response) => {
                        console.log(response);
                        // OK: logout
                        // NO: keep login status
                    });
                }
            });
        }
    });
}

// When user is disconnected
connection.doctorDisconnection = function doctorDisconnection(socket, callback) {
    // Make sure the disconnected user is same with a user tracking from DB
    conn.deleteDoctorSocket(socket.id, (error, result) => {
        if (error) callback(error, null);

        if (!result.changedRows) {
            callback({ errMsg: "Nothing changed in doctor status" }, null);
        }
        else {
            callback(null, { msg: "Doctor disconnected succesfully." });
        }
    });
}

connection.patientDisconnection = function patientDisconnection(socket, callback) {
    // Make sure the disconnected user is same with a user tracking from DB
    conn.deletePatientSocket(socket.id, (error, result) => {
        if (error) callback(error, null);

        if (!result.changedRows) {
            callback({ errMsg: "Nothing changed in patient status" }, null);
        }
        else {
            callback(null, { msg: "Patient disconnected succesfully." });
        }
    });
}