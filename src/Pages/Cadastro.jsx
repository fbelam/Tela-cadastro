import React from 'react';
import styled from "styled-components";

const FormsContainer = styled.form`
    display: flex;
    align-items: flex-end;
    background-color: black;
    gap: 10px;
    flex-wrap:  wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    `;

const input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

const Label = styled.label``;

const formulario = () => {

    return (

        <FormsContainer>
            <h2>Cadastro</h2>

            <InputArea>
            <Label>Nome</Label>
            <input name="nome" />
            </InputArea>
        </FormsContainer>
    );
};

export default formulario;