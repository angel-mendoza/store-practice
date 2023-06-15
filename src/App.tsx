//components
import AppContainer from '@/layout/AppContainer';
// hooks
import useLanguages from '@/hooks/useLanguages';
import useFetch from '@/hooks/useFetch';

function App() {
  const {translate} = useLanguages()

  const {data} = useFetch({
    url: '/products'
  })

  console.log('data :>> ', data);


  return (
    <AppContainer>
      <h1>{translate('home.title')}</h1>
    </AppContainer>
  );
}

export default App;
