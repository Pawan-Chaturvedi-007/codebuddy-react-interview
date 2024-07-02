import { Form, Input } from "antd";
import PropTypes from "prop-types";

const FirstForm = (props) => {
  const { form } = props;
  FirstForm.propTypes = {
    form: PropTypes.object,
  };

  const accountFormDataHandler = (name, value) => {
    form.setFieldValue({ [name]: value });
  };

  return (
    <>
      <Form.Item
        label="Email Id"
        name={"emailId"}
        rules={[
          {
            type: "email",
            message: "Please enter valid email id",
          },
          {
            required: true,
            message: "Please enter your email id",
          },
        ]}
      >
        <Input
          type="email"
          onChange={(e) => {
            accountFormDataHandler("emailId", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name={"password"}
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
          {
            pattern: /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*[^A-Za-z\d]){2}).*$/,
            message:
              "Password must contain at least  2 capital letters, 2 small letter, 2 numbers and 2 special characters",
          },
        ]}
      >
        <Input.Password
          onChange={(e) => {
            accountFormDataHandler("password", e.target.value);
          }}
        />
      </Form.Item>
    </>
  );
};

export default FirstForm;
