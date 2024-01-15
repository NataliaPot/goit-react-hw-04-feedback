import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 16px;
`;

export const Button = styled.button`
  font-size: 12px;
  text-transform: capitalize;
  padding: 8px 16px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid lightgray;
  box-shadow: 0.1px 1.1px 1.5px rgb(150, 150, 150);
  cursor: pointer;

  &:hover {
    border: 1px solid #009eba;
    color: #009eba;
  }

  &:focus {
    color: white;
    background-color: #009eba;
    border: 1px solid #009eba;
    box-shadow: 0.1px 1.1px 1.5px white;
    outline: none;
  }
`;
