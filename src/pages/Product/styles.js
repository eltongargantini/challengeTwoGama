import styled from 'styled-components';

export const ContainerForm=styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;   
    flex-direction: column; 
    font-size: 14px;
`;

export const Title=styled.h1`
    color: #000;
`;

export const FormClient=styled.form`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
`

export const InputForm=styled.input`
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 5px 15px;
    margin-bottom: 5px;
`

export const TextAreaForm=styled.textarea`
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    height: 100px;
    margin-bottom: 5px;
`

export const ButtonForm=styled.button`
    border-radius: 4px;
    background-color: #000; 
    border: #000;
    color: #fff;
    padding: 5px 15px;
    margin: 0;
    
`

