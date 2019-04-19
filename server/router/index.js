import { has } from './has';
import { unknow } from './unknow';
import _ from 'lodash';
const registerRoute = [
    has,
    unknow
]
module.exports = function enrollRoute(router) {
    _.forEach(registerRoute, (func) => {
        func(router);
    })
    return router.routes();
}