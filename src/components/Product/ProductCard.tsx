import { Link } from 'react-router-dom';
// MUI
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Stack,
  Tooltip
} from '@mui/material';

// hooks
import useRedux from '@/hooks/useRedux';
import useLanguages from '@/hooks/useLanguages';

//icons
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// interface
import { Product } from '@/interface/Products';

interface ProductCardProp {
  product: Product
}

export default function ProductCard(props: ProductCardProp) {
  /*********** Props **********/
  const { product } = props;

  /*********** hooks **********/
  const {translate} = useLanguages()
  const {handleAddProductToCart} = useRedux()
  return (
    <Card sx={{
      marginBottom: 2
    }} >
      <CardMedia
        component="div"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Stack
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            height: '200px',
            margin: '0 auto',
            padding: 1,
          }}
        />
      </CardMedia>
      <CardContent>
      <Tooltip title={product.title} placement="top-start">
        <Typography variant="h5" color="primary" className='font-title' marginBottom={1} noWrap>
          {product.title}
        </Typography>
      </Tooltip>
      <Tooltip title={product.description} placement="top-start">
        <Typography variant="body2" color="text.secondary" marginBottom={1} noWrap>
          {product.description}
        </Typography>
      </Tooltip>
        <Typography variant="h5" color="secondary" fontWeight="600">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          paddingBottom: 3
        }}
      >
        <Tooltip title={translate('button.showDetail')} placement="bottom-start">
          <IconButton component={Link} aria-label={translate('button.showDetail')} to={`/product/${product.id}`}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={translate('button.addCart')} placement="bottom-start">
          <IconButton aria-label={translate('button.addCart')} onClick={() => handleAddProductToCart(product)}>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}