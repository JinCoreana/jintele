import React, { useState } from 'react'
import styled from '@emotion/styled/macro';
import { AiOutlineSearch } from 'react-icons/ai'
import useMovieSearch from '../features/movie/useMovieSearch';
import { isTemplateExpression } from 'typescript';

const Base = styled.header`
position: fixed;
top:0;
left:0;
background: rgb(255,255,255);
text-align: center;
box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px 0px;
width: 100%;
height: 62px;
z-index: 10;` ;
const Navigation = styled.nav`
margin: 0 auto;
max-width: 1200px;`;
const MenuListWrapper = styled.div``;
const MenuList = styled.ul`
list-style:none;
padding: 0;
margin: 0;
display:flex;
overflow:hidden;
`;
const Menu = styled.li`
display:flex;
align-items:center;
height:62px;
flex-shrink:0;
&::not(:first-child) {
    margin-left:24px;
}`;
const MenuButton = styled.button < { active?: boolean }> `
font-size:15px;

color: ${({ active }) => active ? `rgb(53,53,53)` : `rgb(126,126,126)`};
cursor: pointer;
border: none;
background: none;
min-width: 72px;`;

const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  transition: all 0.5s ease 0s;
  position: relative;
`;

const Link = styled.a`
text-decoration: none;`;

const TextLogo = styled.h1`
font-size: 32px;
align-items: center;
font-weight: 700;
padding: 30px;
>span[class="primary"] {
 font-family: "Metal Lord";
  color: rgb( 162, 8, 8 );
}
>span:not(.primary){
    font-family: "Metal Lord";
  color:rgb( 72,72,72 );

}`;
const SearchContainer = styled.div`
position:relative;
width: 100%;`;


const SearchFormWrapper = styled.div``;
const SearchForm = styled.form``;
const SearchLabel = styled.label`
background: rgb(245,245,247);
display:flex;
align-items:center;
box-sizing: border-box;
width: 100%;
height: 38px;
border-radius: 2px;
padding: 7px 8px;`;
const SearchInput = styled.input`
font-size: 14px;
font-weight: 400;
background: transparent;
width: 100%;
padding: 0 0 0 8px;
border: 0;
overflow: hidden;
text-overflow:ellipsis;
caret-color: rgb(53,53,53);
line-height: 23px;`;
const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  min-width: 72px;
  cursor: pointer;
  margin: 15px 0;`;
const SignUp = styled.button`
border-radius: 6px;
font-weight: 500;
box-sizing: border-box;
min-width: 72px;
height: 32px;
background: transparent;
color: rgb(53,53,53);
font-size: 14px;
border: 1px solid rgba(116,116,123,0.5);
cursor: pointer;
margin: 15px 0;
`;

const SearchResultWrapper = styled.div`
  position: fixed;
  top: 60px;
  z-index: 9999999;
  background-color: #fff;
  width: inherit;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  max-height: 480px;
  
  overflow-y: visible;
  
`;
const SearchResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SearchResultListItem = styled.li`
  padding: 4px 6px;
  box-sizing: border-box;
  color: #222;
  font-size: 16px;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    background-color: #eee;
  }
`;




const Header: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('')
    const pathname = window.location.pathname;
    const isTv = pathname.indexOf('tv') > -1;

    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setKeyword(e.target.value);
    }

    const { data: searchResult } = useMovieSearch(keyword);

    return (


        <Base>
            <Navigation>
                <MenuListWrapper>
                    <MenuList>
                        <Menu>
                            <Link href="/" >
                                <TextLogo>
                                    <span className="primary">JIN</span>
                                    <span>TELE</span>
                                </TextLogo>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href='/' >
                                <MenuButton active={pathname === '/'}>Movies</MenuButton>
                            </Link>
                        </Menu>

                        <Menu>
                            <Link href='/tv' >
                                <MenuButton active={pathname === '/tv'}>TV Shows</MenuButton>
                            </Link>
                        </Menu>
                        <SearchMenu>
                            <SearchContainer>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel>
                                            <AiOutlineSearch />
                                            <SearchInput placeholder='Search' onChange={handleKeyword} />
                                        </SearchLabel>
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContainer>
                            <SearchResultWrapper>
                                <SearchResultList>

                                    {searchResult?.data.results.map(item => (
                                        <Link key={item.id} href={`/movie/${item.id}`}>
                                            <SearchResultListItem>{item.title}</SearchResultListItem>
                                        </Link>

                                    )
                                    )}


                                </SearchResultList>
                            </SearchResultWrapper>
                        </SearchMenu>
                        <Menu>
                            <SignIn>Log In</SignIn>
                        </Menu>
                        <Menu>
                            <SignUp>Sign In</SignUp>
                        </Menu>
                    </MenuList>
                </MenuListWrapper>
            </Navigation>
        </Base >
    );
}

export default Header;