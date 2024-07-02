import { Icon } from "@iconify/react/dist/iconify.js";
import MultiStepperForm from "../multi-stepper-form/containers/MultiStepperForm";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-4 flex items-center text-4xl font-bold">
        <Icon icon="mdi:home" className="mr-2" />
        Home
      </h1>
      <MultiStepperForm />
      <Link to="/posts" className="flex items-center text-blue-600 hover:underline">
        Posts
        <Icon icon="mdi:arrow-right" className="ml-2" />
      </Link>
    </div>
  );
};

export default Home;
