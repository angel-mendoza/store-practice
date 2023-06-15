// import { useRouter } from 'next/router'; esto es para hacer push a la ruta 404
import { useEffect, useState } from 'react';
import axios, { CancelToken } from 'axios';
// Custom Hooks
import useIsMounted from './useIsMounted';
import useUpdateEffect from './useUpdateEffect';
// Helpers
// import { api } from '../config/axios';
import { isEmpty } from 'lodash';
// Interfaces
// import {
//   FieldSchema as TableFieldSchema,
//   Layout,
// } from '../components/SmartTable/v2/interfaces';

export interface QueryString {
  [key: string]: string;
}

export interface UseFetchParams {
  url: string;
  skip?: boolean;
}

interface Pagination {
  totalItems: number;
  perPage: number;
  currentPage: number;
}

export interface UseFetch {
  fetchData(): void;
  data: any;
  hasData: boolean;
  isFetching: boolean;
  hasError: boolean;
  errorMessage: string;
  updateQueryString(newParams: QueryString[]): void;
  pagination: Pagination;
  changeCurrentPage(page: number): void;
  changePageSize(size: number): void;
  resetPagination(): void;
}

const useFetch = <DataT = any>({
  url: defaultUrl,
  skip = false,
}: UseFetchParams) => {
  const { url } = getDefaultParamsFromUrl(defaultUrl);
  // Custom hooks
  const isMounted = useIsMounted();
  // const router = useRouter(); esto es para hacer push a la 404

  /*************** States ***************/
  // Response
  const [data, setData] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(true);
  // Errors
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  /*************** Functions ***************/
  const fetchData = async (cancelToken?: CancelToken) => {

    try {
      setIsFetching(true);
      const { data } = await axios.get(
        `/api${url}`,
        // `${process.env.REACT_APP_API_BASE_URL}${url}`,
        { cancelToken }
      );
      setData(data);
      setHasError(false);
    } catch (error: any) {
      if (error?.response?.status === 404) {
        // router.push('/404', undefined, { shallow: true }); esto es para hacer push 404
      }
      if (isMounted()) {
        setHasError(true);
        setErrorMessage('Ocurrió un error durante la solicitud');
      }
    } finally {
      if (isMounted()) {
        setIsFetching(false);
      }
    }
  };


  /*************** Lifecycle ***************/
  useEffect(() => {
    const source = axios.CancelToken.source();
    let isCancelled = false;
    if (!skip && isMounted() && !isCancelled) {
      fetchData(source.token);
    }

    return () => {
      source.cancel();
      isCancelled = true;
    };
    // eslint-disable-next-line
  }, [isMounted]);

  useUpdateEffect(() => {
    const source = axios.CancelToken.source();
    if (skip && isMounted()) {
      fetchData(source.token);
    }

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line
  }, [isMounted]);

  return {
    fetchData,
    data: data as DataT,
    hasData: !isEmpty(data),
    isFetching,
    hasError,
    errorMessage,
  };
};

export default useFetch;

const getDefaultParamsFromUrl = (url: string) => {
  if (!!url?.includes('?')) {
    const params = url.substring(url.indexOf('?') + 1);
    const urlWithoutParams = url.split('?')[0];
    return { url: urlWithoutParams, params: `&${params}` };
  }
  return { url, params: '' };
};
