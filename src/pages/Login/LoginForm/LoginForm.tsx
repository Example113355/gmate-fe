import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import openNotification from '../../../components/notify';
import { post } from '../../../utils/http_2';
import { useUser } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
    status: number;
    data: ResponseData;
}

interface ResponseData {
    data: LoginData;
}

interface LoginData {
    accessToken: string;
    user: User;
}

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    isGmater: boolean;
    avatar: string;
    email: string;
    password: string;
    isProfileCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}


const LogInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.email!=='') {
            navigate('/');
        }
    }, [user]);


    function handleSubmit() {
        form.validateFields().then(() => {
            post('api/v1/public/auth/login', {
                email: email,
                password: password
            }).then((response) => {
                const loginResponse = response as LoginResponse;
                if (loginResponse.status === 200) {
                    localStorage.setItem('accessToken', loginResponse.data.data.accessToken)
                    console.log(user)
                    console.log(loginResponse.data.data.user)
                    const newUser = loginResponse.data.data.user as User
                    setUser(newUser)
                    localStorage.setItem('user', JSON.stringify(newUser))
                    console.log(user)
                    openNotification('success', 'Success', 'Logged in successfully!') 
                }
            }).catch(() => {
                setLoading(false)
                openNotification('error', 'Error', 'Invalid credentials!')
            })
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
                    {loading ? 'Loading...' : 'Log in'}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LogInForm
