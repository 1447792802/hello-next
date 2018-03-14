const next = require("next");
const Koa = require("koa");
const router = require("koa-route");
const port = parseInt(process.env.PORT, 10) || 8878;
const dev = process.env.NODE_ENV !== "production";
const test = process.env.NODE_TEST === "test";
const app = next({ dev });
const handle = app.getRequestHandler();


function renderAndCache(ctx, pagePath, noCache, queryParams = null) {
  return app
    .renderToHTML(ctx.req, ctx.res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.info("no cache");
      ctx.body = html;
    })
    .catch(err => {
      console.info("ERRR", err);
      return app.renderError(err, ctx.req, ctx.res, pagePath, queryParams);
    });
}
app.prepare().then(() => {
  const server = new Koa();

  server.use(router.get("/", ctx => renderAndCache(ctx, "/index")));
  server.use(router.get("/about", ctx => renderAndCache(ctx, "/about")));
  server.use(
    router.get("/p/:id", (ctx, id) =>
      renderAndCache(ctx, "/post", null, { id })
    )
  );

  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.listen(port, err => {
    if (err) throw err;
    console.info(`> Ready on http://localhost:${port}`);
  });
});
