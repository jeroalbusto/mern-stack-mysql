import Express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = Express();
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(Express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(Express.static(join(_dirname, "../client/dist")));

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
