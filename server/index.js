import express            from 'express';
import boom               from 'express-boom';
import { json }           from 'body-parser';
import forceSSL           from 'express-force-ssl';
import settings           from './config/settings';
import * as controllers   from './controllers/';
import routes             from './routes/';
import Logger             from './config/log';

export const app = Express();

app.set('forceSSLOptions', {
    enable301Redirects    : true,
    trustXFPHeader        : true,
    httpsPort             : 443,
    sslRequiredMessage    : 'SSL Required.'
});

if (settings('cookie/secure')) {
    app.use(forceSSL);
}

app.use(boom());
app.use(json());

//Routes
routes(app,controllers);

//Start Server
export function start() {
    const server = app.listen( settings('port'), () => {
        const { port } = server.address();
        Logger.info('API listening at port %s', port);
    });
}
