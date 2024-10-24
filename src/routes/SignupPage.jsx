import React, { useEffect, useState } from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import { Input, Button } from '../components'
import imgBackgroung from '../assets/images/buddhist_temple.png'
import { validatePassword, validateUsername } from '../utils/validations'

const SignupPage = () => {
    const navigate = useNavigate();
    const errorsFromPost = useActionData()

    const [formErrors, setFormErrors] = useState({
        username: null,
        password: null,
        confirmPassword: null
    })

    useEffect(() => {
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            ...errorsFromPost
        }))
    }, [errorsFromPost])

    const handleOnChange = (inputId, value) => {
        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [inputId]: null
        }))
    }

    const handleOnBlur = (inputId, value) => {
        let errors;
        switch (inputId) {
            case 'username':
                errors = validateUsername(value)
                break;
            case 'password':
            case 'confirmPassword':
                errors = validatePassword(value)
            default:
                break;
        }

        if (errors) {
            setFormErrors(prevFormErrors => ({
                ...prevFormErrors,
                [inputId]: errors
            }))
        }

    }

    return (
        <div style={{ backgroundImage: `url(${imgBackgroung})` }} className='bg-cover bg-no-repeat bg-left-bottom flex flex-col justify-center align-middle h-full'>
            <div className='bg-[#ffffff] w-2/3 max-w-md m-auto rounded px-14 py-10 shadow-2xl'>
                <h1 className='text-5xl pb-6 drop-shadow-sm'>Sign up</h1>
                <hr className='mb-3' />
                <Form method="post" action="/signup" >
                    <Input label="Username" id="username" name="username"
                        onChange={(e) => handleOnChange('username', e.target.value)} onBlur={(e) => handleOnBlur('username', e.target.value)}
                        errors={formErrors.username} />
                    <Input label="Password" id="password" name="password" type="password"
                        onChange={(e) => handleOnChange('password', e.target.value)} onBlur={(e) => handleOnBlur('password', e.target.value)}
                        errors={formErrors.password} />
                    <Input label="Confirm Password" id="confirmPassword" name="confirmPassword" type="password"
                        onChange={(e) => handleOnChange('confirmPassword', e.target.value)} onBlur={(e) => handleOnBlur('confirmPassword', e.target.value)}
                        errors={formErrors.confirmPassword} />
                    <div className='flex justify-end gap-5'>
                        <Button type='primary' label={'Submit'}
                            disabled={Object.values(formErrors).some(err => err != null)} />
                        <Button type='secondary' label={'Cancel'} onClick={() => navigate('/')} />
                    </div>
                </Form>
            </div>
        </div>
    )
}

export const action = async ({ request }) => {
    const data = await request.formData()

    const username = data.get('username')
    const password = data.get('password')
    const confirmPassword = data.get('confirmPassword')

    let errors = {
        username: null,
        password: null
    }

    if (!username) {
        errors.username = ['Username must be at least 3 characters long.']
    }
    if (!password) {
        errors.password = ['Password must be at least 8 characters long.']
    }
    if (password !== confirmPassword) {
        if (!errors.password) {
            errors.password = ['Passwords do not match.']
        } else {
            errors.password.push('Passwords do not match.')
        }
    }

    // validation
    if (Object.values(errors).some(err => err !== null)) {
        return errors
    }

    // send post to firebase
    return redirect('/')

}

export default SignupPage
