const jwt = require('jsonwebtoken');

const logged = function(req, res, next){
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: 'error', data: 'Token não fornecido.' });
  }
  
  jwt.verify(token, process.env.SECRET, function(err, result) {
    if (err) {      
      return res.status(500).json({ status: 'error', data: 'Token não é válido.' });
    } else {
      req.userId = result.id;
      next();
    }
  });
}

module.exports = logged;