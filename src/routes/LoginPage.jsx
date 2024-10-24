import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import Input from '../components/Input'

// TODO how to make this component reusable to also use it for Sign up
// se me ocurre pasar como props la estructura del form a crear { fields: 
// [ {label: username, type: text } ] }

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [formErrors, setFormErrors] = useState({
        username: null,
        password: null
    })

    const handleOnChange = (inputId, value) => {
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [inputId]: null
        }))
        setFormData(prevFormData => ({
            ...prevFormData,
            [inputId]: value
        }))
    }

    const handleOnBlur = (inputId, value) => {
        // TODO handle validations
    }

    return (
        <div className='w-full flex flex-col justify-center bg-gray-400'>
            {/* TODO Definir un max width para que se expanda pero hasta cierto punto. q despues se quede centrado nomas*/}
            <div className='w-2/3 max-w-3xl m-auto bg-slate-500'>
                <h1>Login</h1>
                <p>A wise man inspired by God once said:
                    "The hapinness in your life, depends uppon the quality of your toughts"
                    Start now
                </p>
                <Form method='post' action="/login">
                    <Input label={"Username"} id="username" name="username" />
                    <Input label={"Password"} id="password" name="password" />
                    <button type='submit'>Submit</button>
                </Form>
            </div>

        </div>
    )
}

export const loginAction = async ({ request, params }) => {
    console.log('action executed');
}

export default LoginPage
