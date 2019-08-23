import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Input = styled.input`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

const InputWithLabel = () => {
    return (
        <Input>
            
        </Input>
    );
};

export default InputWithLabel;