import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  line-height: 1;
  align-items: baseline;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  transition: background-color 1s;

  :hover {
    background-color: red;
    border-radius: 5px;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 3px lightskyblue;
  }
  :active {
    background-color: #333;
    border-color: #333;
    color: #eee;
  }
`;
