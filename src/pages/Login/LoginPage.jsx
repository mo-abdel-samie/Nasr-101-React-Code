import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useAuthContext } from "../../contexts/AuthContext";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, isAuth } = useAuthContext();

  if (isAuth) {
    return <Navigate to="/counter" />;
  }

  const loginForm = useFormik({
    initialValues: {
      //   email: "",
      username: "emilys",
      password: "emilyspass",
    },
    validationSchema: object({
      //   email: string().email().required(),
      username: string().required(),
      password: string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      login(values);
    },
    validateOnMount: true,
    // validate: (values) => {
    //   let error = {};

    //   console.log(values);
    //   if (!values.email.includes("@")) {
    //     error.email = "Invalid email";
    //   }

    //   return error;
    // },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);

    login(loginForm.values);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Login Form</h1>
          <Form onSubmit={loginForm.handleSubmit}>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...loginForm.getFieldProps("email")}
                  placeholder="Enter email"
                  isInvalid={loginForm.errors.email && loginForm.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {loginForm.errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...loginForm.getFieldProps("username")}
                  placeholder="Enter username"
                  isInvalid={
                    loginForm.errors.username && loginForm.touched.username
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {loginForm.errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...loginForm.getFieldProps("password")}
                  type="password"
                  placeholder="Password"
                  isInvalid={
                    loginForm.errors.password && loginForm.touched.password
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {loginForm.errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
