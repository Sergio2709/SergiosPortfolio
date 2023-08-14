import React from "react";
import { styled } from "styled-components";
import { Button, TextField } from "@mui/material"
import { useForm } from "./useForm";
import "./contact.css"
import Message from "../../resourses/message"
import phone from '../../img/phone.jpg'


const MainTittle = styled.h3`
    width: 100%;
    color: white;
    font-size: 4vw;
    text-align: center;
    justify-content: space-around;
`

const StyleDiv = styled.div`
    background:linear-gradient(#a91998,#1a779f,#a91998);
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    padding:.7rem 4%;

`

const TextContact = styled.p`
    color: #1a779f;
    width: 80%;
    font-weight: Bold;
`

const Image = styled.img`
    width: 38%;
    height: 50vw;
    border-radius: 1vw;

    @media screen and (max-width:1024px){
        display: none;
    }
`

const initialForm = {
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
};

const validateForm = (form) => {
    let errors={}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let regexMessage = /^.{1,255}$/;

    if (!form.name.trim()){
        errors.name="The name's field is Required"
    } else if (!regexName.test(form.name.trim())){
        errors.name="Invalid Name Format"
    }

    if (!form.email.trim()){
        errors.email="The email's field is Required"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email="Invalid email format"
    }
    
    if (!form.phone.trim()){
        errors.phone="The phone's field is Required"
    } else if (!regexPhone.test(form.phone.trim())){
        errors.phone="Invalid Phone Number Format"
    }

    if (!form.subject.trim()){
        errors.subject="The subject's field is Required"
    }
    
    if (!form.message.trim()){
        errors.message="The message's field is Required"
    } else if (!regexMessage.test(form.phone.trim())){
        errors.message="The message's field can be maximum 255 characters"
    }

    return errors
}

function Contact(props){
    const {form, errors, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm)
    return <StyleDiv>
        <MainTittle>CONTACT</MainTittle>
        <Image src={phone}/>
        <form className="Form" onSubmit={handleSubmit}>
            <TextContact>Hi, If you want to contact me, you can fill the form and I will comunicate with you, Thanks for your interest</TextContact>
            <TextField 
                className="field"
                name="name"
                label= "name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.name}
                error={errors.name && true}
                required
            />
            {errors.name && <p className="alert">{errors.name}</p>}
            <TextField 
                className="field"
                name="email"
                label= "email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.email}
                error={errors.email && true}
                required
            />
            {errors.email && <p className="alert">{errors.email}</p>}
            <TextField 
                className="field"
                name="phone"
                label= "phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.phone}
                error={errors.phone && true}
                required
            />
            {errors.phone && <p className="alert">{errors.phone}</p>}
            <TextField 
                className="field"
                name="subject"
                label= "subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.subject}
                error={errors.subject && true}
                required
            />
            {errors.subject && <p className="alert">{errors.subject}</p>}
            <TextField
                className="field"
                name="message"
                label= "message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.message}
                error={errors.message && true}
                required
            />
            {errors.message && <p className="alert">{errors.message}</p>}
            <Button className="button" variant= "contained" type="submit">Send</Button>
            {response && <Message msg="los datos han sido enviados" />}
        </form>
    </StyleDiv>
}
export default Contact
