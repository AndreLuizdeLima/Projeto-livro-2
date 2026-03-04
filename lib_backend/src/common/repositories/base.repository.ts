import { DeepPartial, FindManyOptions, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';

export class BaseRepository<T extends ObjectLiteral> {
  constructor(protected readonly repo: Repository<T>) {}

  create(data: DeepPartial<T>) {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  findAll(options?: FindManyOptions<T>) {
    return this.repo.find(options);
  }

  findOneBy(where: FindOptionsWhere<T>) {
    return this.repo.findOne({ where });
  }

  async update(where: FindOptionsWhere<T>, data: DeepPartial<T>) {
    const entity = await this.findOneBy(where);
    if (!entity) return null;
    this.repo.merge(entity, data);
    return this.repo.save(entity);
  }

  async remove(where: FindOptionsWhere<T>) {
    const entity = await this.findOneBy(where);
    if (!entity) return null;
    await this.repo.remove(entity);
    return entity;
  }
}
