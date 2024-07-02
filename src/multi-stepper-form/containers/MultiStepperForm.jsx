import { Button, Form, Steps, message } from "antd";
import React from "react";
import FirstForm from "../presentations/FirstForm";
import SecondForm from "../presentations/SecondForm";
import ThirdForm from "../presentations/ThirdForm";
import { STEPS } from "../common/utils";
import { useNavigate } from "react-router-dom";

const MultiStepperForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [current, setCurrent] = React.useState(0);

  const GetCurrentForm = (props) => {
    GetCurrentForm.propTypes = {
      currentForm: Number,
      form: Object,
    };
    const { currentForm, form } = props;
    switch (currentForm) {
      case 0:
        return <FirstForm form={form} />;
      case 1:
        return <SecondForm form={form} />;
      case 2:
        return <ThirdForm form={form} />;
    }
  };

  const saveFormData = async (formData) => {
    try {
      const url = "https://codebuddy.review/submit";
      const payload = JSON.stringify(formData);

      message.loading({ content: "Saving form data...", duration: 3, key: "loading" });
      const response = await fetch(url, {
        method: "POST",
        body: payload,
      });

      if (response) {
        message.destroy("loading");
        navigate("/posts");
      }
    } catch (error) {
      message.error("Form submission failed");
      console.log("This error is generaPZted from saveFormData", error);
    }
  };

  const onChange = (value) => {
    if (value < current) {
      setCurrent(value);
    }
  };

  const items = STEPS.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const saveAndNextHandler = () => {
    form
      .validateFields()
      .then(() => {
        next();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinish = () => {
    const data = form.getFieldsValue([
      "emailId",
      "password",
      "firstName",
      "lastName",
      "address",
      "countryCode",
      "phoneNumber",
    ]);
    if (current === STEPS.length - 1) {
      saveFormData(data);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("This error is generated from onFinishFailed", errorInfo);
  };

  return (
    <>
      <Steps current={current} items={items} onChange={onChange} />
      <div className="my-5 flex flex-col justify-items-center">
        <Form
          style={{
            maxWidth: 600,
          }}
          form={form}
          name="basic"
          onFinish={onFinish}
          layout="vertical"
          onFinishFailed={onFinishFailed}
        >
          <GetCurrentForm currentForm={current} form={form} />
          <div className="flex space-x-5">
            <Button htmlType="submit">Save</Button>
            <Button disabled={current < 1} onClick={() => prev()}>
              Back
            </Button>
            <Form.Item>
              <Button disabled={current === STEPS.length - 1} onClick={saveAndNextHandler}>
                Save & Next
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default MultiStepperForm;
