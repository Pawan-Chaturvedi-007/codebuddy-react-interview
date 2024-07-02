import { Checkbox, Form, Input, Select } from "antd";
import { COUNTRY_CODE } from "../common/utils";
import PropTypes from "prop-types";

const ThirdForm = (props) => {
  const { form } = props;
  ThirdForm.propTypes = {
    form: PropTypes.object,
  };

  const countryDataHandler = (name, value) => {
    form.setFieldValue({ [name]: value });
  };
  return (
    <>
      <Form.Item
        label="Country code"
        name={"countryCode"}
        rules={[
          {
            required: true,
            message: "Please select country code",
          },
        ]}
      >
        <Select
          options={COUNTRY_CODE}
          onChange={(value) => {
            countryDataHandler("countryCode", value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Phone number"
        name={"phoneNumber"}
        rules={[
          {
            required: true,
            message: "Please enter phone number",
          },
          {
            max: 10,
            message: "Phone number should contains 10 digits",
          },
        ]}
      >
        <Input
          type="number"
          onChange={(e) => {
            countryDataHandler("phoneNumber", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        name={"terms"}
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) => {
              const promise = value
                ? Promise.resolve()
                : Promise.reject(new Error("Please accept terms & conditions"));
              return promise;
            },
          },
        ]}
      >
        <Checkbox
          onChange={(e) => {
            countryDataHandler("terms", e.target.checked);
          }}
        >
          Accept Terms & Conditions<span className="text-red-500">*</span>
        </Checkbox>
      </Form.Item>
    </>
  );
};

export default ThirdForm;
