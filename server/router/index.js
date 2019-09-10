import { has } from './has';
import { unknow } from './unknow';
import { upload } from './file';
import _ from 'lodash';
const registerRoute = [
    has,
    unknow,
    upload
]
module.exports = function enrollRoute(router) {
    _.forEach(registerRoute, (func) => {
        func(router);
    })
    return router.routes();
}