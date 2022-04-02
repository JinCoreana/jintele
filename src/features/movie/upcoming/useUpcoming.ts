import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, ListResponse } from "../../../types";

const useUpcoming = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcoming', upcomingApi);
}

export default useUpcoming;