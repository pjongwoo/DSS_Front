import React  from 'react';
import styled , { css }from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'

const Remove = styled.div`
    opacity : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #dee2e6;
    font-size : 24px;
    cursor: pointer;
    &:hover {
        color:#ffb6b;
    }
`;

const TodoItemBlock = styled.div`
    display : flex;
    align-items : center;
    padding-top :12px;
    padding-bottom :12px;
    &:hover {
        ${Remove} {
            opacity :1;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height : 32px;
    border-radius : 16px;
    border : 1px solid #ced4da;
    font-szie :24px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right :20px;
    cursor : pointer;
    ${props => 
        props.done && 
        css` 
        border : 1px solid #20c997;
        color : #20c997;
`}`;

const Text = styled.div `
    flex : 1;
    font-size: 21px;
    color: #495057;
    ${props => 
    props.done &&
    css`
    color:#ced4da;
    `}
`;

//Flag 변경 API 호출
function apisend(val, idx ){
    return fetch(
        "http://localhost:8080/userdrug?flag="+ val + "&no=" + idx    
      )
        .then(Response =>Response.json())
        .then(json => json)
        .catch(err =>console.log(err)); 
}

 //삭제 api 호출
function apidel (idx){
    const url = "http://localhost:8080/userdrug/"+idx
    return fetch(url , {
        method: 'DELETE',
        mode: 'cors',
      })
      .then(response => response.json());
  
}

function TodoItem ({idx ,done ,text ,events ,del}) {
    
    //done 값 치환 
    let val = ""
    if (done ==="false"){
        done = false;       
    }else{
        done=true;
    }
    
    //OnClick 함수 호출
    const UpdateFlag = () =>{
        if (done === false){
            val = true;
            apisend(val,idx);
            alert ("변경 되었습니다. ")
            events();
        
        }else{
            val = false;
            apisend(val,idx);
            alert ("변경 되었습니다. ")
            events();
        
        }
    }

    //OnClick 함수 호출
    const deletesend = () =>{

        apidel(idx)
        alert ("삭제 되었습니다. ")
        del(true);
        
    }
    return (
        <TodoItemBlock>
            <CheckCircle onClick={UpdateFlag}  done={done}> {done && <MdDone/>}</CheckCircle>
            <Text done={done}> {text}</Text>
            <Remove>
                <MdDelete onClick={deletesend}/>
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;