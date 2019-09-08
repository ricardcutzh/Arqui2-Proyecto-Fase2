import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Aire} from '../models';
import {AireRepository} from '../repositories';

export class AirController {
  constructor(
    @repository(AireRepository)
    public aireRepository : AireRepository,
  ) {}

  @post('/aires', {
    responses: {
      '200': {
        description: 'Aire model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aire)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aire, {exclude: ['id']}),
        },
      },
    })
    aire: Omit<Aire, 'id'>,
  ): Promise<Aire> {
    return this.aireRepository.create(aire);
  }

  @get('/aires/count', {
    responses: {
      '200': {
        description: 'Aire model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Aire)) where?: Where<Aire>,
  ): Promise<Count> {
    return this.aireRepository.count(where);
  }

  @get('/aires', {
    responses: {
      '200': {
        description: 'Array of Aire model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aire)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Aire)) filter?: Filter<Aire>,
  ): Promise<Aire[]> {
    return this.aireRepository.find(filter);
  }

  @patch('/aires', {
    responses: {
      '200': {
        description: 'Aire PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aire, {partial: true}),
        },
      },
    })
    aire: Aire,
    @param.query.object('where', getWhereSchemaFor(Aire)) where?: Where<Aire>,
  ): Promise<Count> {
    return this.aireRepository.updateAll(aire, where);
  }

  @get('/aires/{id}', {
    responses: {
      '200': {
        description: 'Aire model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aire)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Aire> {
    return this.aireRepository.findById(id);
  }

  @patch('/aires/{id}', {
    responses: {
      '204': {
        description: 'Aire PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aire, {partial: true}),
        },
      },
    })
    aire: Aire,
  ): Promise<void> {
    await this.aireRepository.updateById(id, aire);
  }

  @put('/aires/{id}', {
    responses: {
      '204': {
        description: 'Aire PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() aire: Aire,
  ): Promise<void> {
    await this.aireRepository.replaceById(id, aire);
  }

  @del('/aires/{id}', {
    responses: {
      '204': {
        description: 'Aire DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.aireRepository.deleteById(id);
  }
}
