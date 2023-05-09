import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Form, Input, Button, Alert } from "antd";
import Auth from "../utils/auth";

const Login = (props) => {
  const [form] = Form.useForm();
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  // submit form
  const handleFormSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await login({
        variables: { ...values },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (data && data.login) {
      navigate("/");
    }
  }, []);

  return (
    <main className="flex-row justify-center mb-4">
      <div className="row justify-content-center align-items-center w-60 h-80">
        
          <h4 className="header  text-white p-3 row justify-content-center align-items-center">Login Up</h4>
          
          <div className="body text-white p-3 row justify-content-center">
            {data ? (
              <Alert
                message="Success! You may now head back to the homepage."
                type="success"
              />
            ) : (
              <Form form={form} onFinish={handleFormSubmit}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Your email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="******" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            <div className="mt-2">
              Don't have an account? <Link to="/Register">Register Here</Link>
            </div>
          </div>
        </div>
      
    </main>
  );
};

export default Login;
