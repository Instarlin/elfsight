import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react';
import styled from 'styled-components';
import { ClearIcon } from './ClearIcon';

export const Dropdown = forwardRef(({ options = [], placeholder }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const params = new URLSearchParams(window.location.search);
  const [selected, setSelected] = useState(
    params.get(placeholder.toLowerCase()) || ''
  );

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    value: selected
  }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [options, placeholder]);

  return (
    <Wrapper ref={wrapperRef}>
      <SelectBox onClick={toggleDropdown} isOpen={isOpen} isSelected={selected}>
        {selected || placeholder}
        {selected ? (
          <ClearIcon onClick={() => setSelected('')} />
        ) : (
          <ChevronIcon isOpen={isOpen} />
        )}
      </SelectBox>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <Option
              key={option}
              onClick={() => handleSelect(option)}
              isSelected={selected === option}
            >
              {option}
            </Option>
          ))}
        </OptionList>
      )}
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

const SelectBox = styled.div`
  background-color: #263750;
  color: ${({ isSelected }) => (isSelected ? 'white' : '#B3B3B3')};
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #83bf46;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #334466;
  }
`;

const ChevronIcon = styled.span`
  content: '';
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '48%' : '38%')};
  right: 12px;
  height: 0.5em;
  width: 0.5em;
  border-style: solid;
  border-width: 2px 2px 0 0;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(135deg)')};
  transition: 0.2s ease;
`;

const OptionList = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  max-height: 150px;
  background-color: white;
  border-radius: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 2px solid #d9d9d9;
  overflow: auto;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 5px;
    margin: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    padding: 2px;
  }
`;

const Option = styled.li`
  padding: 10px 12px;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};

  &:hover {
    background-color: #e6f2da;
  }
`;
