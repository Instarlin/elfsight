import { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { ClearIcon } from './ClearIcon';

export const TextInput = forwardRef(({ placeholder }, ref) => {
  const params = new URLSearchParams(window.location.search);

  const [value, setValue] = useState(
    params.get(placeholder.toLowerCase()) || ''
  );

  useImperativeHandle(ref, () => ({
    clear: () => setValue(''),
    value: value
  }));

  return (
    <Wrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && <ClearIcon onClick={() => setValue('')} />}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  width: 180px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  background-color: #263750;
  color: white;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #83bf46;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #334466;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b3b3b3;
  }
`;
