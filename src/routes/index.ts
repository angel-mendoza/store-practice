import HomePage from '@/views/home';
import PageNotFount from '@/views/404';
import DetailProduct from '@/views/product/DetailProduct';

export interface RoutesParam {
  path: string,
  component: () => JSX.Element
}

const routes: RoutesParam[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/product/:id',
    component: DetailProduct
  },
  {
    path: '*',
    component: PageNotFount
  },
];

export {
  routes
};