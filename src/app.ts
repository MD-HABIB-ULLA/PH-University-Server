
import { Application, Request, Response } from 'express';
import cors from 'cors';
import express from 'express';
import { userRoutes } from './app/models/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/user", userRoutes)

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});



app.use(globalErrorHandler);
export default app;
