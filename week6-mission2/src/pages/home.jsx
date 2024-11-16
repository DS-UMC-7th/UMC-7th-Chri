// 실습에 사용
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: white;
  font-size: 3rem;
  padding: 20px;
  font-weight: bold;
`;

const HomePage = () => {
  return <StyledHeading>로그인 페이지</StyledHeading>;
};

export default HomePage;
