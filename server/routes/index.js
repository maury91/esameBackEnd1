import login       from './login';
import user        from './user';
import Logger      from './../config/log';

export default ( app, controllers ) => {
    app.use('/Login',login( ));
    app.use('/user',user( controllers ));
    app.get('/',( req, res ) => {
        Logger.info('Homepage!');
        res.send('Hello World!');
    });
};
