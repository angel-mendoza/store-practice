import { useState, ChangeEvent } from 'react';

// MUI
import {
  Box,
  Tab,
  Tabs,
  Stack,
  Button,
  Collapse,
  TextField,
  Typography,
  InputAdornment,
  CircularProgress,
} from '@mui/material';

// Icons
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

// hooks
import useLanguages from '@/hooks/useLanguages';
import useFetch from '@/hooks/useFetch';

// interface
import {ProductCategory} from '@/interface/Products';

interface ProductFiltersProps {
  disableSearch: boolean;
  onSelectCategory(category: string): void;
  onFind(value: string): void;
}

const ProductFilters = (props: ProductFiltersProps) => {
  /*********** props **********/
  const {disableSearch, onSelectCategory, onFind} = props;

  /*********** State **********/
  const [show, setShow] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<string>('all');
  const [find, setFind] = useState<string>('');

  /*********** hooks **********/
  const {translate} = useLanguages()

  /*********** fetch data **********/
  const {data, isFetching} = useFetch<ProductCategory[]>({
    url: '/products/categories',
    resultsKey: 'categories'
  })

  /*********** functions **********/
  const handleShowCategories = () => {
    setShow(!show)
  };

  const handleSelectCategory = (value: string) => {
    setCategorySelected(value)
    onSelectCategory(value)
  };

  const handlechangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFind(event.target.value)
    onFind(event.target.value)
  };

  return (
    <Stack>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          justifyContent: "center"
        }}
      >
        <TextField
          sx={{ width: '60%'}}
          disabled={disableSearch || isFetching}
          size='small'
          variant="outlined"
          placeholder={translate("input.placeholder.find")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handlechangeInput}
          value={find}
          />
        <Button
          variant={show ? "contained" : "outlined"} size='large'
          onClick={handleShowCategories}
          disabled={disableSearch || isFetching}
        >
          <TuneIcon />
        </Button>
      </Box>
      <Collapse in={show}>
        {isFetching
          ?(
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 2
            }}>
              <CircularProgress />
              <Typography marginLeft={1}>
                {translate("loadings.findCategories")}...
              </Typography>
            </Box>
          )
          : (
          <Box sx={{ bgcolor: 'background.paper' }}>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '.MuiTabs-flexContainer': {
                  justifyContent: 'center',
                }
              }}
            >
              {data.map((category) => (
                <Tab sx={(theme) => ({
                  borderBottom: `2px solid ${category.key === categorySelected ? theme.palette.primary.main : theme.palette.background.paper}`
                })}
                label={translate(category.label)} key={category.key} onClick={() => handleSelectCategory(category.key)} />
              ))}
            </Tabs>
          </Box>
          )}
      </Collapse>
    </Stack>
  );
}

export default ProductFilters;