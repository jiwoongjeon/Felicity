import React from "react";
import Axios from "axios";

export const postPatientLogin = ({ email, password }) => async () => {
    try {
        console.log(email, password);
        await Axios.post(`http://localhost:3001/plogin`, {
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data[0].doctor_id);
        });
    } catch (e) {
        console.log(e);
    }
}

export const postDoctorLogin = ({ email, password }) => async () => {
    try {
        console.log(email, password);
        await Axios.post(`http://localhost:3001/dlogin`, {
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data);
        });
    } catch (e) {
        console.log(e);
    }
}