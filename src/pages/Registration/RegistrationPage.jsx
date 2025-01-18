import { useFormik } from "formik";
import { Button, Form, InputGroup } from "react-bootstrap";
import { bool, mixed, number, object, ref, string } from "yup";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const { registration } = useAuthContext();
  const countries = ["Eg1", "Eg2"];

  const navigate = useNavigate();

  const cities = [
    {
      name: "Cairo",
      county: "Eg1",
    },
    {
      name: "Giza",
      county: "Eg1",
    },
    {
      name: "Alex",
      county: "Eg2",
    },
    {
      name: "Matroh",
      county: "Eg2",
    },
  ];

  const registrationForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      country: "",
      city: "",
      email: "",
      password: "",
      confirmPassword: "",
      sign: "",
    },
    onSubmit: (values) => {
      console.log(values);
      registration(values, (res) => {
        if (res.status == 201) {
          navigate("/counter");
        } else {
          alert("Not valid");
        }
      });
    },
    validationSchema: object({
      firstName: string().min(3).required(),
      lastName: string().min(3).required(),
      age: number().positive().integer().min(18).max(50).required(),
      gender: mixed().oneOf(["male", "female"]).required(),
      country: mixed().oneOf(countries).required(),
      city: mixed()
        .oneOf(cities.map((city) => city.name))
        .required(),
      email: string().email().required(),
      password: string()
        .required()
        .min(8)
        .max(20)
        .matches(/[A-Z]/, "Capital Char")
        .matches(/[a-z]/)
        .matches(/[0-9]/)
        .matches(/[@$!%*?&]/)
        .matches(/^\S*$/),
      confirmPassword: string()
        .oneOf([ref("password"), null])
        .required(),
      sign: bool().required(),
    }),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Registration Form</h1>
          <Form onSubmit={registrationForm.handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...registrationForm.getFieldProps("firstName")}
                  placeholder="Enter username"
                  isInvalid={
                    registrationForm.errors.firstName &&
                    registrationForm.touched.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.firstName}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...registrationForm.getFieldProps("lastName")}
                  placeholder="Enter username"
                  isInvalid={
                    registrationForm.errors.lastName &&
                    registrationForm.touched.lastName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.lastName}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>User age</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...registrationForm.getFieldProps("age")}
                  type="number"
                  placeholder="Enter username"
                  isInvalid={
                    registrationForm.errors.age && registrationForm.touched.age
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.age}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Gender</Form.Label>
              <InputGroup hasValidation>
                <Form.Check
                  className="me-2"
                  {...registrationForm.getFieldProps("gender")}
                  type="radio"
                  label="Male"
                  value="male"
                  isInvalid={
                    registrationForm.errors.gender &&
                    registrationForm.touched.gender
                  }
                  id="male"
                />
                <Form.Check
                  {...registrationForm.getFieldProps("gender")}
                  type="radio"
                  label="Female"
                  isInvalid={
                    registrationForm.errors.gender &&
                    registrationForm.touched.gender
                  }
                  value="female"
                  id="female"
                />

                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.gender}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  {...registrationForm.getFieldProps("country")}
                  isInvalid={
                    registrationForm.errors.country &&
                    registrationForm.touched.country
                  }
                >
                  <option>Select country</option>
                  {countries &&
                    countries.map((country, i) => (
                      <option key={i} value={country}>
                        {country}
                      </option>
                    ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.country}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  {...registrationForm.getFieldProps("city")}
                  isInvalid={
                    registrationForm.errors.city &&
                    registrationForm.touched.city
                  }
                >
                  <option>Select City</option>
                  {cities &&
                    cities
                      .filter(
                        (city) => city.county == registrationForm.values.country
                      )
                      .map((city, i) => (
                        <option key={i} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.city}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...registrationForm.getFieldProps("email")}
                  placeholder="Email"
                  isInvalid={
                    registrationForm.errors.email &&
                    registrationForm.touched.email
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...registrationForm.getFieldProps("password")}
                  type="password"
                  placeholder="Password"
                  isInvalid={
                    registrationForm.errors.password &&
                    registrationForm.touched.password
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  {...registrationForm.getFieldProps("confirmPassword")}
                  type="password"
                  placeholder="Password"
                  isInvalid={
                    registrationForm.errors.confirmPassword &&
                    registrationForm.touched.confirmPassword
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.confirmPassword}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="sign">
              <InputGroup hasValidation>
                <Form.Check
                  id="sign"
                  className="me-2"
                  {...registrationForm.getFieldProps("sign")}
                  type="checkbox"
                  label="I confirm"
                  isInvalid={
                    registrationForm.errors.sign &&
                    registrationForm.touched.sign
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {registrationForm.errors.sign}
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
