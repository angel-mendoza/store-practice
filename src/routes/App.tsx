import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import AppContainer from '@/layout/AppContainer';

// routes
import {routes, RoutesParam} from '@/routes';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          { routes.map((value: RoutesParam) => (
            <Route
              key={window.crypto.randomUUID()}
              path={value.path}
              element={<value.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
