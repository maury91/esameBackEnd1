export default (req, res, next) => {

    const origin = ( req.headers.origin || '*' );

    if ( req.method.toUpperCase() === 'OPTIONS' ) {

        res.writeHead(
            '204',
            'No Content',
            {
                'Access-Control-Allow-Origin': origin,
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Max-Age': 10,
                'Content-Length': 0
            }
        );

        // End the response - we're not sending back any content.
        return (res.end());


    } else {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Auth-Token');
        res.header('Access-Control-Allow-Credentials', true);
        next();
    }

};
