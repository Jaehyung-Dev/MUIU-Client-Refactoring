import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setNaverLogin } from '../slices/memberSlice';

const NaverButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  svg rect {
    filter: brightness(1);
    transition: filter 0.5s ease; 
  }

  &:hover svg rect {
    filter: brightness(0.9);
  }
`;

const NaverLogin = () => {
	const NAVER_AUTH_URL = "http://localhost:9090/oauth2/authorization/naver";
  const dispatch = useDispatch();

	const handleNaverLogin = () => {
		// 네이버 로그인 요청 전에 naverLogin 상태를 true로 변경
		dispatch(setNaverLogin(true));
		// 네이버 로그인 URL로 이동
		window.location.href = NAVER_AUTH_URL;
	};
  return (
    <NaverButton onClick={handleNaverLogin}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill="url(#pattern0_364_497)" />
            <defs>
            <pattern id="pattern0_364_497" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_364_497" transform="scale(0.00333333)" />
            </pattern>
            <image id="image0_364_497" width="300" height="300" href="data:image/png;base64,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"/>
            </defs>
        </svg>
	</NaverButton>
  );
};

export default NaverLogin;