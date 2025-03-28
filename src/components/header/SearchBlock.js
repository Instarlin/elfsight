import { useRef } from 'react';
import styled from 'styled-components';
import { Dropdown } from './Dropdown';
import { TextInput } from './TextInput';
import { Button } from './Button';

export function SearchBlock() {
  const statusDropdownRef = useRef();
  const genderDropdownRef = useRef();
  const speciesDropdownRef = useRef();
  const nameInputRef = useRef();
  const typeInputRef = useRef();

  const applyFilters = () => {
    const newURL = new URL(window.location.href);
    newURL.searchParams.set('status', statusDropdownRef.current?.value);
    newURL.searchParams.set('gender', genderDropdownRef.current?.value);
    newURL.searchParams.set('species', speciesDropdownRef.current?.value);
    newURL.searchParams.set('name', nameInputRef.current?.value);
    newURL.searchParams.set('type', typeInputRef.current?.value);
    window.location.href = newURL.href;
  };

  const clearInputs = () => {
    const newURL = new URL(window.location.href);
    newURL.searchParams.delete('status');
    newURL.searchParams.delete('gender');
    newURL.searchParams.delete('species');
    newURL.searchParams.delete('name');
    newURL.searchParams.delete('type');
    window.location.href = newURL.href;
  };

  return (
    <SearchContainer>
      <InnerContainer>
        <Dropdown
          ref={statusDropdownRef}
          placeholder="Status"
          options={['Alive', 'Dead', 'Unknown']}
        />
        <Dropdown
          ref={genderDropdownRef}
          placeholder="Gender"
          options={['Male', 'Female', 'Genderless']}
        />
        <Dropdown
          ref={speciesDropdownRef}
          placeholder="Species"
          options={['Human', 'Alien']}
        />
      </InnerContainer>
      <InnerContainer>
        <TextInput ref={nameInputRef} placeholder="Name" />
        <TextInput ref={typeInputRef} placeholder="Type" />
        <Button
          placeholder="Apply"
          color="rgb(131, 191, 70)"
          onClick={applyFilters}
        />
        <Button
          placeholder="Reset"
          color="rgb(255, 81, 82)"
          onClick={clearInputs}
        />
      </InnerContainer>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 100%;

  @media (max-width: 530px) {
    width: 250px;
    flex-direction: column;
  }
`;
