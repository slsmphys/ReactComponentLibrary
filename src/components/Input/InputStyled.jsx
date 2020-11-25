import styled, { css } from "styled-components";

import theme from "./theme";

const InputStyled = styled.input`
    /* border: .2rem solid ${(props) => theme.borderColor[props.styledAs]};   */
    border-width: ${theme.borderWidth};
    border-style: solid;
    border-color: ${(props) => theme.borderColor[props.styledAs]};
    color: ${theme.color};
    
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    line-height: 1.467;
    padding: 8px 12px;
    height: 42px;
    border-radius: 8px;
    box-shadow: none;
    width: 100%;

    :disabled {
        background-color: #f4f6f6;
        border-color: #d5dbdb;
        color: #d5dbdb;
        cursor: default;
        opacity: 0.7;
    }
    
    
    
    
    
    
    /* border-radius: 3px;
    border: 1px solid palevioletred;
    display: block;
    margin: 0 0 1em;
    padding: ${props => props.padding};

    ::placeholder {
        color: palevioletred;
    } */




    &:focus {
        outline: none;
        box-shadow: 0 0 0 .4rem rgba(21, 156, 255, 0.5)
    }
`;

export default InputStyled;