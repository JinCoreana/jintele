import { useQuery } from 'react-query';
import { topRateApi } from '../../../apis/movieApi';
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, ListResponse } from "../../../types";

const useTopRated = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRated', topRateApi);
}

export default useTopRated;