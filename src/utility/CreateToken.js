const jwt = require("jsonwebtoken");
const CreateToken = async (data) => {
    let playload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data }
    return await jwt.sign(playload, 'SecurityKey123456789');
}

module.exports = CreateToken;