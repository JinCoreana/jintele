import { useQuery } from 'react-query';
import { popularApi } from '../../../apis/movieApi';
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, ListResponse } from "../../../types";

const usePopular = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPopular', popularApi);
}

export default usePopular;