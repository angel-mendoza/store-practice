import {
  Card,
  CardContent,
  Skeleton
} from '@mui/material';

const ProductLoading = () => {
  return (
    <Card >
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Skeleton animation="wave" height={45} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={30} width="30%" />
      </CardContent>
    </Card>
  );

};

export default ProductLoading;
