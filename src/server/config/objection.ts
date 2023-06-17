import { Model } from 'objection';
import knex from './knex';

Model.knex(knex) as any;

export default Model;