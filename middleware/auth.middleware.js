const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    if(req.method === "OPTIONS") {
        return next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
        if(!token) {
            return res.status(401).json({message: "Unauthorizated..."})
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded;
        next()
    } catch (e) {
        console.log('Errror',e);
        return res.status(500).json({message: "Server Error"});
    }


}
