import * as React from 'react';
import { useForm, reset } from "react-hook-form";
import { ContainerForm, Title, FormClient, InputForm, TextAreaForm, ButtonForm } from './styles';

export default function Product(){
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem('product: ' + data.product, JSON.stringify(data));
        reset();
        alert('Salvo');
    }
    
    return(
        <ContainerForm>
            <div><Title>Cadastro de Produto</Title></div>
            <div>
                <FormClient onSubmit={handleSubmit(onSubmit)}>
                    <label for="product">Produto:</label>
                    <InputForm {...register("product")} id="product" autocomplete="product"/>

                    <label for="brand">Marca:</label>
                    <InputForm {...register("brand")} id="brand" autocomplete="brand"/>
                    
                    <label for="model">Modelo:</label>
                    <InputForm {...register("model")} id="model" autocomplete="model"/>

                    <label for="description">Descrição:</label>
                    <TextAreaForm {...register("description")} id="description"></TextAreaForm>

                    <label for="value">Valor:</label>
                    <InputForm {...register("value")} id="value" />
                
                    <ButtonForm type="submit" >Salvar</ButtonForm>
                </FormClient>
            </div>
        </ContainerForm>
     );
};