import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import DB from "../cors/DB";

dotenv.config();

export default class Server {
  private app: Express;
  private port: number;
  private host: string;

  constructor() {
    const PORT = process.env.PORT || "8000";
    const HOST = process.env.HOST || "0.0.0.0";
    this.port = parseInt(PORT);
    this.host = HOST;
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.get("/", async (req: Request, res: Response) => {
      try {
        const db = DB.connection();
        await db.authenticate();
        return res.send("change value");
      } catch (error) {
        return res.send(error);
      }
    });
  }

  public start(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`http://${this.host}:${this.port}`);
    });
  }
}
