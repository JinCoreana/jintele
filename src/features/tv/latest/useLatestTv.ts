import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query'
import { latestApi } from '../../../apis/tvApi'
import { TVDetail } from '../../../types';

const useLatestMovie = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTV', latestApi)
}

export default useLatestMovie;