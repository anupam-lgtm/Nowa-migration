import { Header } from "../../components/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../../components/errorText";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});
const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-400 via-violet-500 to-transparent blur-[170px]"></div>
      </div>

      <div className="fixed top-0 right-0 w-[500px] h-[500px] pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-cyan-500 via-cyan-500 to-transparent blur-[170px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <Header text={"Sign Up"} />

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values, "values.>>>>>>");
          }}
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

                <Button onClick={() => handleSubmit()}>Sign Up</Button>

                <div className="text-center space-y-2">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors block"
                  >
                    Forgot Password
                  </a>
                  <a
                    onClick={() => navigate("/login")}
                    href="#"
                    className="cursor-pointer text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors block"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default SignUp;
