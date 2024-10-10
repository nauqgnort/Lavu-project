import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  // Xử lý submit form
  const handleSubmit = (values) => {
    console.log(values);
   
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" max-w-lg w-full">
        <div className="flex justify-center items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/duancanhan-47862.appspot.com/o/lavulogo.png?alt=media&token=b67a9f1b-77a2-46fc-af74-530ccc5b6a56"
            }
            className="w-12 h-12"
            alt="Logo"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Create a new account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Start your 30-day free trial.
        </p>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Create your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
            >
              Get started
            </button>

            <div className="mt-4">
              <SocialLogin />
            </div>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-orange-500 hover:underline">
                Log in
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
