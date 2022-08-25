import * as data from './data';
import * as _ from 'lodash';
import * as main from './main';
import  * as validation from './validation';

export default (ctx: any, inject: any) => {
  inject('functions', {
    ...data,
    ...main,
    ...validation,
  });
  inject('_', {
    ..._,
  });
};
