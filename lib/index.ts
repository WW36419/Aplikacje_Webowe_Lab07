import App from './app';
import IndexController from "./controllers/index.controller";
import PostController from "./controllers/post.controller";

const app: App = new App([
   new PostController()
]);

app.listen();