// hooks
import useLanguages from '@/hooks/useLanguages';
import useFetch from '@/hooks/useFetch';

const HomePage = () => {
  const {translate} = useLanguages()

  const {data} = useFetch({
    url: '/products'
  })

  console.log('data :>> ', data);

  return (
    <div>
      <h1>{translate('home.title')}</h1>
    </div>
  );
}

export default HomePage;