import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Temperatura extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
    generated: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  temp: number;

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


  constructor(data?: Partial<Temperatura>) {
    super(data);
  }
}

export interface TemperaturaRelations {
  // describe navigational properties here
}

export type TemperaturaWithRelations = Temperatura & TemperaturaRelations;
