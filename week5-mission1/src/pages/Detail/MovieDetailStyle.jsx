import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-size: cover; /* 배경 이미지의 크기를 컨테이너에 맞춤 */
  color: white; 
`;
export const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 위쪽 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  width: 100%; /* 전체 너비 */
  height: 60vh; /* 화면의 절반 높이 */
  background-size: cover; /* 배경 이미지의 크기를 컨테이너에 맞춤 */
  background-position: left top; /* 이미지의 시작 위치를 왼쪽 상단으로 */
  color: white; 
`;

export const MovieContent = styled.div`
  background-color: rgba(0, 0, 0, 0.7); /* 배경 색상 */
  padding: 50px;
  max-width: 600px;
  width: 100%;
  height: 60vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* 그라데이션 배경 */
  
  h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
  h3 {
    font-size: 2rem;
    margin: 20px 0;
    font-style: italic;
  }
  p {
    font-size: 1.5rem;
    margin: 1px 0;
    line-height: 20px;
  }
`;
export const CrewContainer = styled.div`
  width: fit-content;
  padding-left: 4rem;
  h2 {
    font-size: 3rem;
    margin: 30px;
    font-weight: bold;
  }
`;

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄바꿈 가능 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  gap: 40px; /* 간격 추가 */
  
`;

export const CastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  text-align: center;
`;

export const CastImage = styled.img`
  width: 100px; /* 동그라미의 크기 */
  height: 100px; /* 동그라미의 크기 */
  border-radius: 50%; /* 동그란 모양 */
  object-fit: cover; /* 이미지가 동그란 모양에 맞게 잘림 */
  border: 2px solid white; /* 흰색 테두리 추가 */
`;

export const CastName = styled.div`
  font-size: 1.5rem; /* 한글 이름 폰트 크기 */
  margin: 5px 0; /* 여백 추가 */
  color: white; /* 텍스트 색상 */
  max-width: 100px; /* 텍스트가 너무 길지 않도록 최대 너비 설정 */
  word-wrap: break-word; /* 긴 텍스트가 단어 중간에 줄바꿈 되도록 설정 */
  text-overflow: ellipsis; /* 너무 길면 생략(...) 처리 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
`;

export const CastRole = styled.div`
  font-size: 1rem; /* 영어 이름 폰트 크기 */
  color: gray; /* 회색 텍스트 */
  max-width: 100px; /* 최대 너비 */
  word-wrap: break-word; /* 단어가 넘치면 줄바꿈 */
  text-overflow: ellipsis; /* 생략(...) 처리 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
`;