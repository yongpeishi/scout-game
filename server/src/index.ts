import express, { Request, Response } from 'express';
import { newGame } from './game';

const app = express();
const port = process.env.PORT || 8080;

app.get('/game', (req: Request, res: Response) => {
  res.json(
    newGame()
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});