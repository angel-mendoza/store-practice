//components
import AppContainer from './layout/AppContainer';

// hooks
import useLanguages from './hooks/useLanguages';

function App() {
  const {translate} = useLanguages()

  return (
    <AppContainer>
      <h1>{translate('home.title')}</h1>
    </AppContainer>
  );
}

export default App;
