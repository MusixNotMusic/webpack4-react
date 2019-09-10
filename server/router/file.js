import fs from 'fs';
import qs from 'qs';
export function upload(router) {
    router.post('/file/code/upload', (ctx, next) => {
        let data = ctx.request.body;
        console.log('data ==>', data);
        fs.writeFile('./upload/123.txt', data.codeString, function(err) {
            if (err) throw err;
        })
        ctx.body = 'ok';
    })
}