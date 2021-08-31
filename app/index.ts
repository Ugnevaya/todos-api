import Koa from "koa";
import { todosRouter } from './router/todos';

const app = new Koa();

todosRouter.route({
  method: "get",
  path: "/",
  handler: () => { }
})

app.use(ctx => {
  ctx.body = 'Hello Koa';
  console.log(ctx.body);
});

app.listen(3000);
