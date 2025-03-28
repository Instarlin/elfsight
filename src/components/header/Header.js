import styled from 'styled-components';
import { Logo } from './Logo';
import { SearchBlock } from './SearchBlock';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBlock />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
  }
`;
