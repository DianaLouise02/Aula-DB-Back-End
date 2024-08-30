const jwt = require('jsonwebtoken');

function authenticateToken(req,res,next){
    const token = req.headers['authorization']?.split('')[1];
    /**
     * Bearer token
     * 
     * 
      */
if(!token){
    return res.status(401).json({
        msg:'Acesso negado'
    })
}

// Headers, PayLoad, SECRET
jwt.verify(token, process.env.SECRET, (err, user)=>{
   if(err){

    return res.status(403).json({
        msg: 'Acesso negado'
    })
   }
// Armazenar usuário na requisição
req.user = user;

next();

});



}

module.exports = authenticateToken;