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
import {Lluvia} from '../models';
import {LluviaRepository} from '../repositories';

export class LluviaController {
  constructor(
    @repository(LluviaRepository)
    public lluviaRepository : LluviaRepository,
  ) {}

  @post('/lluvias', {
    responses: {
      '200': {
        description: 'Lluvia model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lluvia)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lluvia, {exclude: ['id']}),
        },
      },
    })
    lluvia: Omit<Lluvia, 'id'>,
  ): Promise<Lluvia> {
    return this.lluviaRepository.create(lluvia);
  }

  @get('/lluvias/count', {
    responses: {
      '200': {
        description: 'Lluvia model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Lluvia)) where?: Where<Lluvia>,
  ): Promise<Count> {
    return this.lluviaRepository.count(where);
  }

  @get('/lluvias', {
    responses: {
      '200': {
        description: 'Array of Lluvia model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Lluvia)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Lluvia)) filter?: Filter<Lluvia>,
  ): Promise<Lluvia[]> {
    return this.lluviaRepository.find(filter);
  }

  @patch('/lluvias', {
    responses: {
      '200': {
        description: 'Lluvia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lluvia, {partial: true}),
        },
      },
    })
    lluvia: Lluvia,
    @param.query.object('where', getWhereSchemaFor(Lluvia)) where?: Where<Lluvia>,
  ): Promise<Count> {
    return this.lluviaRepository.updateAll(lluvia, where);
  }

  @get('/lluvias/{id}', {
    responses: {
      '200': {
        description: 'Lluvia model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lluvia)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Lluvia> {
    return this.lluviaRepository.findById(id);
  }

  @patch('/lluvias/{id}', {
    responses: {
      '204': {
        description: 'Lluvia PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lluvia, {partial: true}),
        },
      },
    })
    lluvia: Lluvia,
  ): Promise<void> {
    await this.lluviaRepository.updateById(id, lluvia);
  }

  @put('/lluvias/{id}', {
    responses: {
      '204': {
        description: 'Lluvia PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lluvia: Lluvia,
  ): Promise<void> {
    await this.lluviaRepository.replaceById(id, lluvia);
  }

  @del('/lluvias/{id}', {
    responses: {
      '204': {
        description: 'Lluvia DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lluviaRepository.deleteById(id);
  }
}
