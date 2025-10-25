import * as Yup from "yup";
import StylesInput from "../../components/inputField";
import Button from "../../components/button";
import { AtSign } from "lucide-react";
import { Formik } from "formik";
import Error from "../../components/errorText";
import ForgetImg from "../../assets/forget.svg";
import { Surface } from "../../components/surface";
import LoginRight from "./component/loginRight";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});
const Forget = () => {
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
        <Surface>
          <div className="flex justify-evenly w-full h-full items-center px-4 md:px-25  lg:px-0">
            <div className="bg-[#12181f] w-full lg:w-auto px-8 sm:px-8 md:px-18  py-8 sm:py-12 md:py-17 space-y-10 sm:space-y-8 md:space-y-8 rounded-2xl sm:rounded-[37px]">
              <div className="space-y-2">
                <p className="text-white font-bold text-2xl sm:text-3xl">
                  Forgot password?
                </p>
                <div className="text-[#C3CDDB] text-sm sm:text-base break-all">
                  <p> Enter your email below, you will</p>
                  <p> receive an email with password</p>
                  <p>reset link.</p>
                </div>
              </div>

              <div className="flex justify-center items-center w-full">
                <img
                  src={ForgetImg}
                  className="w-[70%] lg:w-[90%] bg-transparent"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <StylesInput
                    onChange={handleChange("email")}
                    placeholder="Email Address"
                    leftIcon={<AtSign color="white" size={20} />}
                    isValid={true}
                    value={values?.email}
                  />
                  {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                  )}
                </div>
              </div>

              <Button onClick={handleSubmit}>Continue</Button>
            </div>

            <LoginRight />
          </div>
        </Surface>
      )}
    </Formik>
  );
};
export default Forget;
