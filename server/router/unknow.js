export function unknow(router) {
    router.get('/unknow', (ctx, next) => {
        ctx.body = 'o_o_O_O_O_O_o_o unknow';
    })
}