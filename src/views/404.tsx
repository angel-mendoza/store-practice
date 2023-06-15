import { Link } from 'react-router-dom';

// MUI
import { Button } from '@mui/material';

// hooks
import useLanguages from '@/hooks/useLanguages';

const NotMatchPage = () => {
  /*********** hooks **********/
  const {translate} = useLanguages()

  return (
    <div className='not-found-page'>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/404-page.png`}
        alt="404-page"
      />
      <Button
        to={'/'}
        color='primary'
        component={Link}
        variant='contained'
      >
        {translate('button.goHome')}
      </Button>
    </div>
  );
}

export default NotMatchPage;