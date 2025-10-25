import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useRecaptcha from "../../hooks/captcha";
import StylesInput from "../../components/inputField";
import Button from "../../components/button";
import { useRef, useState } from "react";
import { AtSign, BadgeCheck, Edit2Icon, LockKeyhole } from "lucide-react";
import { Formik } from "formik";
import OtpInput from "react-otp-input";
import { Surface } from "../../components/surface";
import LoginRight from "./component/loginRight";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});
const OtpScreen = () => {
  const [otp, setOtp] = useState();
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
            <div className="bg-[#12181f] w-full lg:w-auto px-8 sm:px-8 md:px-18  py-8 sm:py-12 md:py-17 space-y-15 sm:space-y-8 md:space-y-18 rounded-2xl sm:rounded-[37px]">
              <div className="space-y-2">
                <p className="text-white font-bold text-2xl sm:text-3xl">
                  Email Verification
                </p>
                <div className="text-[#C3CDDB] text-sm sm:text-base break-all">
                  <p> Please enter the 4-digit</p>
                  <p> verification code that was sent to </p>
                  <p>your email</p>
                </div>
              </div>

              <div className="flex text-white flex-col">
                <p className="font-bold text-lg">Send Verification Code to :</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#A4A8AB]">example@mail.com</p>
                  <Edit2Icon color="white" size={15} />
                </div>
              </div>

              <div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    color: "white",
                    border: "1px solid #161d26",
                    height: "clamp(40px, 8vw, 50px)",
                    width: "clamp(40px, 8vw, 50px)",
                    borderRadius: "17px",
                    backgroundColor: "#161d26",
                    fontWeight: "bold",
                    fontSize: "clamp(16px, 4vw, 20px)",
                  }}
                  containerStyle={{
                    justifyContent: "flex-start",
                    gap: "0.5%",
                  }}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
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
export default OtpScreen;
