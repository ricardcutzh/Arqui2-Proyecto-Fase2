import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Peso extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  peso: number;

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


  constructor(data?: Partial<Peso>) {
    super(data);
  }
}

export interface PesoRelations {
  // describe navigational properties here
}

export type PesoWithRelations = Peso & PesoRelations;
