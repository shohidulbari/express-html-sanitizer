const sanitizeHtml = require('sanitize-html');

//handler function for recursively cleaning up request body
function cleanup(body, config){
    for(let key in body){
        //function goes to recursive state only when it face another inner object or array
        if((typeof body[key] === 'object') || Array.isArray(body[key])){
            body[key] = cleanup(body[key]);
        }else if(typeof body[key] == 'string'){
            //cleaning
            body[key] = sanitizeHtml(body[key], config);
        }
    }
    //return recusive state
    return body;
}

module.exports = function(config = {}){
    //return middleware for use
    return function(req, res, next){
        req.body = cleanup(req.body, config);
        next();
    }
}