import { Router }    from 'express';

export default ( controllers ) => {
    const router = Router();

    //Enable cors for this route
    router.use(controllers.cors);

    router.post('/' , controllers.login);

    return router;
};
