import {
  FindAndCountOptions,
  FindOptions,
  FindOrCreateOptions,
  Identifier,
  NonNullFindOptions,
} from "sequelize";

export default interface IRepository<M> {
  findAll(options: FindOptions): Promise<M[]>;
  findByPk(identifier: Identifier): Promise<M | null>;
  findOne(options: NonNullFindOptions): Promise<M>;
  findOrCreate(options: FindOrCreateOptions): Promise<[M, boolean]>;
  findAndCountAll(
    options: FindAndCountOptions
  ): Promise<{ count: number; rows: M[] }>;
}
