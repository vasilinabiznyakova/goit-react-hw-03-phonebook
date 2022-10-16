import styled from 'styled-components';

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  margin: 10px;
`;

export const ContactForm = styled.form`
  padding: 30px;
  border: 1px solid black;
  width: 30%;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: background-color 1s;

  :hover {
    background-color: green;
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
