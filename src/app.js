import Express, { json } from "express";
import { __dirname } from "./helpers/urlhandle.js";
import routerVideo from "./routes/VideoRoutes.js";
import swaggerDocs from "./routes/swagger.js";
const app = Express();
const PORT = 3200 || 3000;
app.use(json())
app.use(routerVideo)
app.listen(PORT, (err) => {
    swaggerDocs(app, PORT);
    console.log("Server runing in port:", PORT || 3000);
});
