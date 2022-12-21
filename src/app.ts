import cors from 'cors';
import express from 'express';

export class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.initConfig();
    this.initServer();
  }

  private initConfig(): void {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors({ origin: '*' }));
  }

  private initServer(): void {
    this.app.listen(3000, 'localhost', () => {
      console.log('Server running on port: http://localhost:3000/');
    });
  }
}
