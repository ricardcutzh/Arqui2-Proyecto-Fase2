import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Lluvia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'boolean',
    required: true,
  })
  llovio: boolean;

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


  constructor(data?: Partial<Lluvia>) {
    super(data);
  }
}

export interface LluviaRelations {
  // describe navigational properties here
}

export type LluviaWithRelations = Lluvia & LluviaRelations;
