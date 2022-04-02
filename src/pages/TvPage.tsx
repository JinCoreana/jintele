import React from 'react'
import PopularSection from '../features/movie/popular';
import TopRateSection from '../features/movie/toprate';
import AiringTodayTvSection from '../features/tv/airingToday';
import LatestTvSection from '../features/tv/latest';
import OnTheAirTvSection from '../features/tv/onTheAir';
import styled from '@emotion/styled'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;`;

const TvPage: React.FC = () => {

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <LatestTvSection />
                    <AiringTodayTvSection />
                    <OnTheAirTvSection />
                    <PopularSection />
                    <TopRateSection />
                </Container>
            </Main>
            <Footer />
        </>
    );
}

export default TvPage;