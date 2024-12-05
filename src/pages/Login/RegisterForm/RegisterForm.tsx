import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import openNotification from '../../../components/notify';
import { post } from '../../../utils/http_2';

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [form] = Form.useForm()

    function handleSubmit() {
        form.validateFields().then(() => {
            post('/public/auth/register', {
                email,
                password,
                name
            }).then((response: any) => {
                if (response.status === 200) {
                    form.resetFields()
                    openNotification('success', 'Success', 'Account created successfully!')
                }
                else {
                    openNotification('error', 'Error', response.response.data.errors[0].title)
                }
            })
        }
        ).catch(() => {
            openNotification('error', 'Error', 'Please fill in all the fields!')
        })
    }

    return (
        <Form
            form={form}
            name="basic"
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
            layout="vertical"
        >
            <Form.Item
                label="Full Name: "
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your full name!',
                    },
                ]}
            >
                <Input value={name} onChange={(text) => setName(text.target.value)} />
            </Form.Item>

            <Form.Item
                label="Email:"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                    {
                        type: 'email',
                        message: 'Please input a valid email!'
                    }
                ]}
            >
                <Input value={email} onChange={(text) => setEmail(text.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password:"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        min: 8,
                        message: 'Password must be at least 8 characters long!'
                    }
                ]}
            >
                <Input.Password value={password} onChange={(text) => setPassword(text.target.value)} />
            </Form.Item>

            <Form.Item
                label="Confirm Password:"
                name="confirmPassword"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    {
                        validator: () => {
                            if (confirmPassword != password) {
                                return Promise.reject('The two passwords that you entered do not match!')
                            }
                            return Promise.resolve()
                        }
                    }
                ]}
            >
                <Input.Password value={confirmPassword} onChange={(text) => setConfirmPassword(text.target.value)} />
            </Form.Item>

            <Form.Item
                name="policy"
                valuePropName="checked"
                rules={[
                    {
                        required: true,
                        message: 'Please agree to the terms and conditions!',
                    }
                ]}
            >
                <Checkbox>I agree to the <a href="/">terms and conditions</a></Checkbox>
            </Form.Item>

            <Form.Item
                className="submitBtn"
            >
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterForm
