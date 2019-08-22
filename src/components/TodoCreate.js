import React , {useState} from 'react';
import styled , { css }from 'styled-components';
import { MdAdd } from 'react-icons/md'
import { post } from 'axios';


const CircleButton = styled.button`
    background : #38d9a9;
    &:hover {
        background : #63e6be;
    }
    &:active {
        background : #20c997
    }
    z-index:5;
    cursor:pointer;
    width:80px;
    height:80px;

    display : flex;
    align-items : center;
    justify-content : center;

    position: absolute;
    left:50%;
    bottom:0px;
    transform : translate(-50%,50%);

    font-size:60px;
    color:white;
    border-radius :40px;

    border:none;
    outline:none;
    transition :0,125s all ease-in;
    ${props => props.open && css`
        background : #ff6b6b;
        &:hover{
            background : #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform : translate(-50%,50%) rotate(45deg);

    `}
`;

const InsertFormPositioner = styled.div`
    width:100%;
    bottom:0;
    left:0;
    position: absolute;
`;

const InsrtForm = styled.div`
    background:#f8f9fa;
    padding:32px;
    padding-bottom:72px;
    border-bottom-left-radius:16px;
    border-bottom-right-radius:16px;
    border-top : 1px solid #e9ecef;
`;

const Input = styled.input`
    padding:12px;
    border-radius:4px;
    border : 1px solid #dee2e6;
    width:100%;
    outline: none;
    font-size : 18px;
    box-sizing: border-box;
`;

const AddButton =styled.button`
    padding:12px;
    border-radius:4px;
    border : 1px solid #dee2e6;
    width:100%;
    outline: none;
    font-size : 18px;
    box-sizing: border-box;
    margin-top: 10px;
`;

function TodoCreate({data, events }){
    
    const [open , setOpen] = useState(false);
    const [drug , setDrug] = useState('');
    const onChange = (e) =>{
        setDrug(e.target.value);
    }
    const onToggle = () => {
        setOpen(!open);
        events();
    }
    
    /* 등록 API 호출 */
    const addDrug = (e) => {
        const url = 'http://localhost:8080/userdrug/';
        const formData = new FormData();
        formData.append('drug', drug)
        formData.append('flag', false)
        formData.append('No', data)
        console.log(drug);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        alert("등록 되었습니다."); 
        return post(url, formData, config)
    }
    
    return (
        <>
         {open && (
             <InsertFormPositioner>
                 <InsrtForm>
                    <Input placeholder="등록해주세요" value={drug} onChange={onChange} />
                     값 확인 : {drug}
                    { open && (<AddButton onClick={addDrug}> 등록하기 </AddButton>)}
                 </InsrtForm>
             </InsertFormPositioner>
         )}
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd/>
        </CircleButton>
        </>
    );
}

export default TodoCreate;