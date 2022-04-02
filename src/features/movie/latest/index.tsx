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
    const { data, isLoading } = useLatestMovie();

    const getYear = (date: string) => date.split('-')[0]
    return (
        <Base>
            <Title>What's New</Title>

            {

                isLoading ? (
                    <div>Loading...</div>
                ) : (
                    data?.data && (
                        <Card
                            key={data.data.id}
                            linkUrl={`/movie/${data.data.id}`}
                            title={data.data.title}
                            posterPath={`https://image.tmdb.org/t/p/w300/${data.data.poster_path}`}
                            voteAverage={data.data.vote_average}
                            year={getYear(data.data.release_date)}
                        />

                    ))}

        </Base>
    )
}
export default LatestMovieSection