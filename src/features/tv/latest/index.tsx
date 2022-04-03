import React from 'react'
import styled from '@emotion/styled/macro'
import useLatestTv from './useLatestTv'
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

const LatestTvSection: React.FC = () => {
    const { data, isLoading } = useLatestTv();

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
                            linkUrl={`/tv/${data.data.id}`}
                            title={'Halo'}
                            posterPath={`https://image.tmdb.org/t/p/original//1qpUk27LVI9UoTS7S0EixUBj5aR.jpg`}
                            voteAverage={8.9}
                            year={'2022'
                            }
                        />

                    ))}

        </Base>
    )
}
export default LatestTvSection
