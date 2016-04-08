import User from '../models/user';

export default function register( req , res ) {
    try {
        const { user , password , email , firstname , lastname } = req.body;
        const newUser = new User({
            password,
            email,
            firstname,
            lastname
        });
        newUser.save();
        res.sendStatus(200);
    } catch (err) {
        res.boom.conflict('User already exists');
    }
}
