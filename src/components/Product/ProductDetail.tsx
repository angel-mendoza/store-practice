import { Link } from 'react-router-dom';

// MUI
import {
  Box,
  Grid,
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Skeleton
} from '@mui/material';

// icons
import UndoIcon from '@mui/icons-material/Undo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// interface
import useLanguages from '@/hooks/useLanguages';

// interface
import { Product } from '@/interface/Products';

interface ProductDetailProps {
  product: Product;
  loading: boolean;
}

const ProductDetail = (props: ProductDetailProps) => {
  /*********** props **********/
  const {loading, product} = props;

    /*********** hooks **********/
    const {translate} = useLanguages()

  return (
    <Grid container marginTop={1} spacing={2}>
      <Grid item xs={12}>
        { loading ? (
          <Card
          sx={(theme) => ({
            display: 'flex',
            [theme.breakpoints.down("sm")]: {
              flexDirection: 'column',
            },
          })}
          >
            <Skeleton
              variant="rectangular"
              height={200}
              sx={(theme) => ({
                width: 210,
                [theme.breakpoints.down("sm")]: {
                  width: '100%',
                },
              })}
            />
            <CardContent
              sx={(theme) => ({
                width: 'calc(100% - 210px)',
              [theme.breakpoints.down("sm")]: {
                width: '100%',
              },
            })}
            >
              <Skeleton animation="wave" height={45} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={20} />
              <Skeleton animation="wave" height={20} />
              <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={40} width="30%" />
            </CardContent>
          </Card>
        ) : (
          <Card sx={(theme) => ({
            display: 'flex',
            [theme.breakpoints.down("sm")]: {
              flexDirection: 'column',
              '.box-img': {
                width: '100%'
              },
              'img': {
                margin: '0 auto',
                width: '100px'
              },
              ".box-body": {
                width: '100%'
              }
            },
          })}>
            <Box
              className="box-img"
              sx={{
                backgroundColor: 'white',
                padding: 2,
                width: 150,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.description}
              />
            </Box>
            <Box className="box-body" sx={{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 150px)' }}>
              <CardContent>
                <Typography variant="h5" color="primary" className='font-title' marginBottom={1}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" marginBottom={1} >
                  {product.description}
                </Typography>
                <Typography variant="h5" color="secondary" fontWeight="600">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: 1}}>
                <Button
                  to={'/'}
                  component={Link}
                  color='inherit'
                  variant='outlined'
                  startIcon={<UndoIcon />}
                  sx={{ marginRight: 1}}
                >
                  {translate('button.goBack')}
                </Button>
                <Button
                  variant='contained'
                  startIcon={<ShoppingCartIcon />}
                >
                  {translate('button.addCart')}
                </Button>
              </CardActions>
            </Box>
          </Card>
        )}
      </Grid>
    </Grid>
  )
};

export default ProductDetail;
