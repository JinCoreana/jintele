import React from 'react'
import styled from '@emotion/styled/macro'
import useLatestMovie from './useLatestMovie';
import Card from '../../../components/card';

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const LatestMovieSection: React.FC = () => {
    const { data: latestMovieResponse, isLoading } = useLatestMovie();

    const getYear = (date: string) => date.split('-')[0]
    return (
        <Base>
            <Title>What's New</Title>

            {
                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    latestMovieResponse?.data && (
                        <Card
                            key={latestMovieResponse.data.id}
                            linkUrl={`/movie/${latestMovieResponse.data.id}`}
                            title={'Morbius'}
                            posterPath={`https://image.tmdb.org/t/p/original//tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg`}
                            voteAverage={5.8}
                            year={'2022'}
                        />
                    )
                )
            }
        </Base>
    )
}
export default LatestMovieSection