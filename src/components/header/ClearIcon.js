import styled from 'styled-components';

export function ClearIcon({ onClick }) {
  return (
    <Icon onClick={onClick}>
      <span></span>
      <span></span>
    </Icon>
  );
}

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 0.8em;
  cursor: pointer;
  color: #b3b3b3;

  &:hover {
    color: #83bf46;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  span:first-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  span:last-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
