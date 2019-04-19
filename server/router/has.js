export function has(router) {
    router.get('/has', (ctx, next) => {
        ctx.body = '~~_0 0 0 0__~~ has';
    })
}