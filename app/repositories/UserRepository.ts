import { User } from "../models";
import Repository from "./Repository";

class UserRepository extends Repository<User> {
  constructor() {
    super(User);
  }
}

export default new UserRepository();
