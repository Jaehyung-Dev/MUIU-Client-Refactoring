import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin-top: 50px;
    position: relative;
`;

const Tab = styled.div`
    flex: 1;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
    position: relative;
    z-index: 1;
`;

const Underline = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #fbbf24;
    width: 33.33%; /* 각 탭의 너비 */
    transform: translateX(${({ activeTab }) => (activeTab === 'video' ? '0%' : activeTab === 'call' ? '100%' : '200%')});
    transition: transform 0.3s ease;
`;

const ConsultationListWrapper = styled.div`
    background-color: #EBEBEB;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: 15px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ConsultationList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;
    width: 90%;
`;

const ConsultationCard = styled.div`
    background-color: #fff;
    padding: 15px 0px 0px 15px;
    border-radius: 10px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    line-height: 0.5;
`;

const ExistingConsultation = () => {
    const [activeTab, setActiveTab] = useState('video');

    return (
        <Container>
            <Tabs>
                <Tab active={activeTab === 'video'} onClick={() => setActiveTab('video')}>
                    화상 상담
                </Tab>
                <Tab active={activeTab === 'call'} onClick={() => setActiveTab('call')}>
                    전화 상담
                </Tab>
                <Tab active={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>
                    채팅 상담
                </Tab>
                <Underline activeTab={activeTab} />
            </Tabs>

            <ConsultationListWrapper>
                <ConsultationList>
                    {activeTab === 'video' && (
                        <>
                            <ConsultationCard>
                                <strong>차수: 2회기</strong>
                                <p>일시: 2024년 8월 13일 일요일</p>
                                <p>시간: 21:32 ~ 22:02</p>
                                <p>상담사: 김대휘</p>
                            </ConsultationCard>

                            <ConsultationCard>
                                <strong>차수: 1회기</strong>
                                <p>일시: 2024년 8월 12일 일요일</p>
                                <p>시간: 13:44 ~ 13:59</p>
                                <p>내담자: 민수정</p>
                            </ConsultationCard>
                        </>
                    )}
                    {activeTab === 'call' && (
                        <p>전화 상담 내역이 없습니다.</p>
                    )}
                    {activeTab === 'chat' && (
                        <p>채팅 상담 내역이 없습니다.</p>
                    )}
                </ConsultationList>
            </ConsultationListWrapper>
        </Container>
    );
};

export default ExistingConsultation;
