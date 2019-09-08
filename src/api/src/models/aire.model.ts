import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Aire extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Grado: number;

  @property({
    type: 'date',
    required: true,
  })
  time: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;


  constructor(data?: Partial<Aire>) {
    super(data);
  }
}

export interface AireRelations {
  // describe navigational properties here
}

export type AireWithRelations = Aire & AireRelations;
