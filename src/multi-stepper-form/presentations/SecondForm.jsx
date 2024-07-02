import { Form, Input } from "antd";

const SecondForm = (props) => {
  const { form } = props;
  SecondForm.propTypes = {
    form: Object,
  };
  const personalFormDataHandler = (name, value) => {
    form.setFieldValue({ [name]: value });
  };
  return (
    <>
      <Form.Item
        label="First Name"
        name={"firstName"}
        rules={[
          {
            required: true,
            message: "Please enter your first name",
          },
          {
            pattern: /^[A-Za-z]+$/,
            message: "First name must contain only characters",
          },
          {
            min: 2,
            message: "First name must contains at least 2 characters",
          },
          {
            max: 50,
            message: "First name must contains maximum 50 characters",
          },
        ]}
      >
        <Input
          onChange={(e) => {
            personalFormDataHandler("firstName", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name={"lastName"}
        rules={[
          {
            pattern: /^[A-Za-z]+$/,
            message: "Last name must contain only characters",
          },
        ]}
      >
        <Input
          onChange={(e) => {
            personalFormDataHandler("lastName", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Address"
        name={"address"}
        rules={[
          {
            required: true,
            message: "Please enter your address",
          },
          {
            min: 10,
            message: "Address must contains at least 10 characters",
          },
        ]}
      >
        <Input
          onChange={(e) => {
            personalFormDataHandler("address", e.target.value);
          }}
        />
      </Form.Item>
    </>
  );
};

export default SecondForm;
