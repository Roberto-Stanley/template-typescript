import { Sequelize, Options } from "sequelize";
import database, { ConnectionsName } from "../../config/database";

export default class DB {
  static connection(connection?: ConnectionsName): Sequelize {
    const { connections, established } = database;
    const connectionName = (connection ?? established) as ConnectionsName;

    const config: Options = connections[connectionName];

    return new Sequelize(config);
  }
}
