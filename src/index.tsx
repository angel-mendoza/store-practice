import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import App from './routes/App';
import './i18n'

import './styles/global.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

if (process.env.REACT_APP_MOCK_SERVICE === 'enabled') {
  require('./mocks/browser');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
