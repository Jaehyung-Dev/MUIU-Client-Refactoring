import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ManualOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: ${({ searchOpen }) => (searchOpen ? 'flex-start' : 'space-between')};
    align-items: center;
    padding: 15px 15px;
    background-color: white;
    z-index: 1000;
    position: relative;

    h1 {
        font-family: 'TTLaundryGothicB', sans-serif;
        font-weight: 700;
        color: #fbbf24;
        font-size: 28px;
        transition: opacity 0.5s ease;
    }

    @media (max-width: 393px) {
        padding: 5px 8px;

        h1 {
            opacity: ${({ searchOpen }) => (searchOpen ? 0 : 1)};
            font-size: 20px;
        }
    }
`;

const IconContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    position: absolute;
    right: 15px;
    z-index: 1001;
`;

const SearchIconWrapper = styled.div`
    transition: transform 0.5s ease;
    transform: ${({ searchOpen }) => (searchOpen ? 'translateX(-210px)' : 'translateX(0)')};
    position: relative;
`;

const MenuIconWrapper = styled.div`
`;

const SearchInputWrapper = styled.div`
    position: absolute;
    top: 45%;
    transform: translateY(-50%); 
    left: calc(100% + 10px);
    width: ${({ searchOpen }) => (searchOpen ? '200px' : '0')};
    overflow: hidden;
    transition: width 0.5s ease;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid black; /* 검정색 1px 언더바 */
    outline: none;
    font-size: 16px;
    background-color: transparent;
`;

const DropdownMenu = styled.div`
    position: fixed;
    top: 30px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow-y: auto;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: flex;
            align-items: center;
            margin: 20px 0;

            a {
                text-decoration: none;
                color: ${({ isActive }) => (isActive ? '#fbbf24' : '#333')};
                transition: color 0.3s ease;
                display: flex;
                align-items: center;

                &:hover {
                    color: #fbbf24;
                }

                svg {
                    margin-right: 10px;
                    color: ${({ isActive }) => (isActive ? '#fbbf24' : '#666')};
                }
            }
        }
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false); 
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSearchOpen(false);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        setMenuOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    const handleMenuClick = (menuItem) => {
        setActiveMenuItem(menuItem);
        setMenuOpen(false);
    };

    return (
        <>
            <HeaderContainer searchOpen={searchOpen}>
                <h1>마음이음</h1>
                <IconContainer>
                    <SearchIconWrapper searchOpen={searchOpen}>
                        <SearchIcon className="icon" onClick={toggleSearch} />
                        {searchOpen && (
                            <SearchInputWrapper searchOpen={searchOpen}>
                                <SearchInput
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </SearchInputWrapper>
                        )}
                    </SearchIconWrapper>
                    <MenuIconWrapper>
                        <MenuIcon className="icon" onClick={toggleMenu} />
                    </MenuIconWrapper>
                </IconContainer>
            </HeaderContainer>

            {menuOpen && (
                <DropdownMenu>
                    <ul>
                        <li><Link to="/main" isActive={activeMenuItem === 'main'} onClick={() => handleMenuClick('main')}><HomeOutlinedIcon />홈</Link></li>
                        <li><Link to="/login" isActive={activeMenuItem === 'login'} onClick={() => handleMenuClick('login')}><LoginOutlinedIcon />로그인</Link></li>
                        <li><Link to="/join" isActive={activeMenuItem === 'join'} onClick={() => handleMenuClick('join')}><PersonAddOutlinedIcon />회원가입</Link></li>
                        <li><Link to="/mypage" isActive={activeMenuItem === 'mypage'} onClick={() => handleMenuClick('mypage')}><AccountCircleOutlinedIcon />내 정보</Link></li>
                        <li><Link to="/mind-check" isActive={activeMenuItem === 'mind-check'} onClick={() => handleMenuClick('mind-check')}><CheckCircleOutlinedIcon />내 마음 알아보기</Link></li>
                        <li><Link to="/human-counseling" isActive={activeMenuItem === 'human-counseling'} onClick={() => handleMenuClick('human-counseling')}><PeopleOutlinedIcon />상담하기</Link></li>
                        <li><Link to="/ai-counseling" isActive={activeMenuItem === 'ai-counseling'} onClick={() => handleMenuClick('ai-counseling')}><PsychologyOutlinedIcon />긴급 AI 상담</Link></li>
                        <li><Link to="/my-diary" isActive={activeMenuItem === 'my-diary'} onClick={() => handleMenuClick('my-diary')}><BookOutlinedIcon />나의 일기장</Link></li>
                        <li><Link to="/mind-column" isActive={activeMenuItem === 'mind-column'} onClick={() => handleMenuClick('mind-column')}><ArticleOutlinedIcon />마음칼럼</Link></li>
                        <li><Link to="/disaster-mental-health-manual" isActive={activeMenuItem === 'disaster-mental-health-manual'} onClick={() => handleMenuClick('disaster-mental-health-manual')}><ManualOutlinedIcon />재난 정신건강 매뉴얼</Link></li>
                        <li><Link to="/disaster-guide" isActive={activeMenuItem === 'disaster-guide'} onClick={() => handleMenuClick('disaster-guide')}><ArticleOutlinedIcon />재난 안내</Link></li>
                        <li><Link to="/disaster-safety-store" isActive={activeMenuItem === 'disaster-safety-store'} onClick={() => handleMenuClick('disaster-safety-store')}><StoreOutlinedIcon />마음 나누기</Link></li>
                        <li><Link to="/hospital-shelter-info" isActive={activeMenuItem === 'hospital-shelter-info'} onClick={() => handleMenuClick('hospital-shelter-info')}><LocalHospitalOutlinedIcon />병의원·대피소 정보</Link></li>
                    </ul>
                </DropdownMenu>
            )}
        </>
    );
};

export default Header;
