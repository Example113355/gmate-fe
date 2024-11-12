import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import openNotification from '../../../components/notify';

const LogInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [form] = Form.useForm()

    function handleSubmit() {
        form.validateFields().then(() => {
            openNotification('success', 'Success', 'You have successfully logged in!')
        }).catch(() => {
            openNotification('error', 'Error', 'Please fill in all the fields!')
        })
    }

    return (
        <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please input a valid email!' }]}
            >
                <Input value={email} onChange={(text) => setEmail(text.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={password} onChange={(text) => setPassword(text.target.value)} />
            </Form.Item>

            <Form.Item className="submitBtn">
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Log In
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LogInForm