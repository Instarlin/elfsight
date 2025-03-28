import styled from 'styled-components';

export function Button({ placeholder, color, onClick }) {
  return (
    <StyledButton color={color} onClick={onClick}>
      {placeholder}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: #263750;
  color: ${({ color }) => color};
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid ${({ color }) => color};
  width: 85px;
  box-sizing: border-box;
  transition: 0.3s;

  &:hover {
    background-color: ${({ color }) => color};
    color: white;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;
