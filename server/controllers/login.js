import User from '../models/user';

export default function login( req , res ) {
    try {
        const { user } = req.body;
        const foundUser = User.findByUsername( user );
        foundUser.checkPassword( password );
        res.sendStatus(200);
    	} catch (err) {
        res.boom.unauthorized('Wrong username/password');
    }
}
