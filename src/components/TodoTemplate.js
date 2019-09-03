import React from 'react';
import styled from 'styled-components';
import "../css/TodoTemplate.css";

const TodoTemplateBlock = styled.div`
   

    position : relative;
    background: white;
    border-radius : 16px;
    box-shadow :0 0 8px rgba(0,0,0,0.04);

    margin : 0 auto;
    margin-top : 96px;
    margin-bottom: 32px;

    display: flex;
    flex-direction : column;
    
`;
function TodoTemplate({ children }){
    return <TodoTemplateBlock className="MypageMain"> {children}</TodoTemplateBlock>
}


    
export default TodoTemplate;
    