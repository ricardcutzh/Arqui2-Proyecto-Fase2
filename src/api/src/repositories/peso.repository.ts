import {DefaultCrudRepository} from '@loopback/repository';
import {Peso, PesoRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PesoRepository extends DefaultCrudRepository<
  Peso,
  typeof Peso.prototype.id,
  PesoRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Peso, dataSource);
  }
}
