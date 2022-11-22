import {
  Model,
  ModelStatic,
  FindOptions,
  Identifier,
  CreationAttributes,
  NonNullFindOptions,
  Attributes,
  FindOrCreateOptions,
  FindAndCountOptions,
} from "sequelize";
import IRepository from "../interfaces/IRepository";

export default abstract class Repository<M extends Model>
  implements IRepository<M>
{
  protected model: ModelStatic<M>;
  constructor(model: ModelStatic<M>) {
    this.model = model;
  }

  public async findAll(options: FindOptions): Promise<M[]> {
    return this.model.findAll(options);
  }
  public async findByPk(identifier: Identifier): Promise<M | null> {
    return this.model.findByPk(identifier);
  }

  public async findOne(options: NonNullFindOptions<Attributes<M>>): Promise<M> {
    return this.model.findOne(options);
  }

  public async findOrCreate(
    options: FindOrCreateOptions<Attributes<M>>
  ): Promise<[M, boolean]> {
    return this.model.findOrCreate(options);
  }

  public findAndCountAll(
    options: Omit<FindAndCountOptions<Attributes<M>>, "group">
  ): Promise<{ count: number; rows: M[] }> {
    return this.model.findAndCountAll(options);
  }

  public async create(values: CreationAttributes<M>) {
    return this.model.create(values);
  }
}
