import { handlersProduct } from './handlersProduct';
import { handlersProfile } from './handlersProfile';

const baseHandlersApi = [
  ...handlersProduct,
  ...handlersProfile
];

export default baseHandlersApi