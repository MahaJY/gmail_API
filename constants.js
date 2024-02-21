require('dotenv');
const auth={
    type:'OAuth2',
    user:'mahalakshmijaisankar@gmail.com',
    clientid:process.env.CLIENT_ID,
    clientsecret:process.env.CLIENT_SECRET,
    refreshtoken:process.env.REFRESH_TOKEN,
}
module.exports = {
    auth
}