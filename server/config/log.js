import winston from 'winston';

export default new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: function() {
                  return new Date().toJSON();
            },
            colorize: true
        })
    ]
});
