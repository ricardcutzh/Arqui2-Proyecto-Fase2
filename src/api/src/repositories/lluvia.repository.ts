import {DefaultCrudRepository} from '@loopback/repository';
import {Lluvia, LluviaRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LluviaRepository extends DefaultCrudRepository<
  Lluvia,
  typeof Lluvia.prototype.id,
  LluviaRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Lluvia, dataSource);
  }
}
