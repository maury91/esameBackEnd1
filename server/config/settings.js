import Confidence    from 'confidence';
import getenv        from 'getenv';

const criteria = {
    env: getenv('NODE_ENV','local')
};

const config = {

    cookies  : {
        secure : {
            $filter     : 'env',
            $default    : true,
            test        : false,
            local       : false
        }
    },

    port : getenv.int('PORT',8010)

};

const store = new Confidence.Store(config);

export default function (key='') {
    return store.get('/'+key, criteria);
}
