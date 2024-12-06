
import { Request, Response } from 'express';
import cors from 'cors';
import express from 'express';
import { userRoutes } from './app/models/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app = express();

app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/user", userRoutes)
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
