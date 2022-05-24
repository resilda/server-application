import express, { Application, Request, Response, NextFunction } from 'express';
import { Router } from 'express';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT || 4000;
const app: Application = express();
const router = Router();

app.use(express.static(path.resolve(__dirname, './app/src')));
app.use(cors());

//simple message
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'hi' });
});

app.get('/users', function (req: Request, res: Response) {
  res.json();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './app/src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
