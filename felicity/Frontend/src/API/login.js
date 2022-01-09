import Axios from "axios"

function loginPost (email, password) {
    Axios.post(
        "http://localhost:3001/user",{
            email: email,
            password: password
        }
    ).then((response) => {
        
    })
}

export default loginPost;