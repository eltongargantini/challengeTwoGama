import * as React from 'react';
import { useForm, reset } from "react-hook-form";
import { ContainerForm, Title, FormClient, InputForm, ButtonForm } from './styles';

export default function Client(){
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem('client: ' + data.name, JSON.stringify(data));
        reset();
        alert('Salvo');
    }
    
    return(
        <ContainerForm>
            <div><Title>Cadastro de Cliente</Title></div>
            <div>
                <FormClient onSubmit={handleSubmit(onSubmit)}>
                    <label for="name">Nome:</label>
                    <InputForm {...register("name")} id="name" type="name" autocomplete="name"/>

                    <label for="email">Email:</label>
                    <InputForm {...register("email")} id="email" type="email" inputmode="email" autocomplete="email"/>
                    
                    <label for="address">Endereço:</label>
                    <InputForm {...register("address")} id="address" autocomplete="address"/>

                    <label for="numberAddress">Número:</label>
                    <InputForm {...register("numberAddress")} id="numberAddress" />

                    <label for="complementAddress">Complemento:</label>
                    <InputForm {...register("complementAddress")} id="complementAddress" />

                    <label for="districtAddress">Bairro:</label>
                    <InputForm {...register("districtAddress")} id="districtAddress" />

                    <label for="cepAddress">Cep:</label>
                    <InputForm {...register("cepAddress")} id="cepAddress" />
                    
                    <label for="city">Cidade:</label>
                    <InputForm {...register("city")} id="city" />

                    <label for="state">Estado:</label>
                    <InputForm {...register("state")} id="state" />
                
                    <ButtonForm type="submit" >Salvar</ButtonForm>
                </FormClient>
            </div>
        </ContainerForm>
     );
};