const jwt = require("jsonwebtoken");
require('dotenv').config({ path: './app/.env' })
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

// 난수생성
// require('crypto').randomBytes(64).toString('hex')

// Athenticating using cookie
// function authenticateTokenCookie(req, res, next){
//     const accessToken = req.cookies.jwt
//     if(!accessToken){
//         return res.response(403)
//     }
//     try{
//         const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
//         next()
//     }
//     catch(e){
//         return res.response(403)
//     }
// }

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return console.log(err) //res.response(403)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) return console.log(err) //res.response(403)
        req.payload = payload
        next()
    })
}

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { algorithm: "HS256", expiresIn: '10m' })
}

exports.generateAccessToken = generateAccessToken;
exports.authenticateToken = authenticateToken;