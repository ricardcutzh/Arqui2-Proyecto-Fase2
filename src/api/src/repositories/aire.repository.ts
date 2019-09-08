import {DefaultCrudRepository} from '@loopback/repository';
import {Aire, AireRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AireRepository extends DefaultCrudRepository<
  Aire,
  typeof Aire.prototype.id,
  AireRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Aire, dataSource);
  }
}
