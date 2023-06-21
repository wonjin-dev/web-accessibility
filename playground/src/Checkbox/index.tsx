import styled from '@emotion/styled';
import { FC } from 'react';

interface CheckBoxProps {
  name: string;
  option: string;
  isChecked: boolean;
  onCheckboxClick: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({
  name,
  option,
  isChecked,
  onCheckboxClick,
}) => {
  return (
    <Container>
      <input type="checkbox" id={name} checked={isChecked} onChange={onCheckboxClick} />
      <label htmlFor={name} onClick={onCheckboxClick} />
      <span>{option}</span>
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  position: relative;

  input,
  label {
    cursor: pointer;
  }

  input[type='checkbox'] {
    position: absolute;
    z-index: 20;
  }

  input[type='checkbox']:checked {
    z-index: -1;
  }

  input[type='checkbox'] + label {
    content: '';
    position: absolute;
    top: 3px;
    left: 4px;
  }

  input[type='checkbox'] + label::after {
    position: absolute;
    left: 0;
    content: '✔';
    background-color: red;
    border: none;
    color: white;
    font-size: 10px;
    width: 13px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }

  span {
    padding-left: 25px;
  }
`;
