const router = require('express').Router();
const {Users, validate} = require('../models/User.js');
const Auth = require('../services/auth-service.js')

router.post('/', async (req, res) => {

    const isUsed = await Users.findOne({email: req.body.email});
    const isUsed2 = await Users.findOne({username: req.body.username});
      if (!isUsed && !isUsed2) {
	        const hashedPwd = await Auth.hashPassword(req.body.password);
	        const user  =  new Users({
                name: req.body.name,
                email: req.body.email,
                password: hashedPwd,
                username: req.body.username,
                birth: req.body.birth,
                phone   : req.body.phone,
                lastname: req.body.lastname,    
	        });
	        await user.save();
	        return res.json({status: 'ok'});
        } else {
            return res.json({status: 'error', error: 'Email already in use'});
        }
	    
        
   
});

module.exports = router;