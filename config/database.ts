import { Options, Dialect } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export type ConnectionsName = "postgres";
interface IConnections {
  postgres: Options;
}
interface IConfig {
  connections: IConnections;
  established: string;
}

export default <IConfig>{
  connections: {
    postgres: {
      dialect: (process.env.DB_DIALECT ?? "postgres") as Dialect,
      host: process.env.DB_HOST ?? "localhost",
      port: parseInt(process.env.DB_PORT ?? "8000"),
      database: process.env.DB_NAME ?? "api",
      username: process.env.DB_USERNAME ?? "admin",
      password: process.env.DB_PASSWORD ?? "admin",
    },
  },
  established: <ConnectionsName>process.env.DB_CONNECTION ?? "postgres",
};
