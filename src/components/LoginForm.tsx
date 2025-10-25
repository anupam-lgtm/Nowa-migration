"use client";

import type React from "react";

import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validatePassword";
import { PasswordValidation } from "./PasswordValidation";
import { SuccessMessage } from "./SuccessMessage";
import * as Yup from "yup";
import { Formik } from "formik";
import Error from "./errorText";

// Ethereum address validation function
const validateEthereumAddress = (address: string): boolean => {
  // Check if address starts with 0x and is 42 characters long (0x + 40 hex characters)
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  return ethAddressRegex.test(address);
};

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {}}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <div className="w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
          <div className="w-full space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Enter email"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm sm:text-base"
              />
              {touched.email && errors.email && (
                <Error className="text-red-500">{errors.email}</Error>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                onChange={handleChange("password")}
                type="password"
                id="password"
                placeholder="••••••••••••"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm sm:text-base"
              />
              {touched.password && errors.password && (
                <Error className="text-red-500">{errors.password}</Error>
              )}
            </div>

            <button
              onClick={() => handleSubmit()}
              // type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Sign Up
            </button>

            <div className="text-center space-y-2">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors block"
              >
                Forgot Password
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors block"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
