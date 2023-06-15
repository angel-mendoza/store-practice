import HomePage from '@/views/home';
import PageNotFount from '@/views/404';

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
    path: '*',
    component: PageNotFount
  },
];

export {
  routes
};