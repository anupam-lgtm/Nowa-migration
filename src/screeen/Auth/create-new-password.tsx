import * as Yup from "yup";
import StylesInput from "../../components/inputField";
import Button from "../../components/button";
import { useState } from "react";
import { AtSign, LockKeyhole } from "lucide-react";
import { Formik } from "formik";
import Error from "../../components/errorText";
import { Surface } from "../../components/surface";
import ActivateModal from "../../components/modals/activateModal";
import LoginRight from "./component/loginRight";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});
const NewPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="bg-subcard w-full lg:w-auto px-8 sm:px-8 md:px-20 py-8 sm:py-12 md:py-17 space-y-18 sm:space-y-8 md:space-y-30 rounded-2xl sm:rounded-[37px]">
              <div className="space-y-2">
                <p
                  onClick={() => setIsModalOpen(true)}
                  className="text-white font-bold text-2xl sm:text-3xl"
                >
                  Create New Password
                </p>
                <div className="text-text text-sm sm:text-base break-all">
                  <p> Enter and confirm your new</p>
                  <p> password below</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <StylesInput
                    onChange={handleChange("email")}
                    placeholder="Password"
                    leftIcon={<LockKeyhole color="white" size={20} />}
                    isValid={true}
                    value={values?.email}
                  />
                  {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                  )}
                </div>
                <div>
                  <StylesInput
                    onChange={handleChange("email")}
                    placeholder="Confirm Password"
                    leftIcon={<LockKeyhole color="white" size={20} />}
                    isValid={true}
                    value={values?.email}
                  />
                  {touched.email && errors.email && (
                    <Error>{errors.email}</Error>
                  )}
                </div>
              </div>
              <ActivateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Custom Title"
                acceptText="Confirm"
                onAccept={() => alert("Accepted!")}
                declineText="Cancel"
              />

              <Button onClick={handleSubmit}>Continue</Button>
            </div>

            <LoginRight />
          </div>
        </Surface>
      )}
    </Formik>
  );
};
export default NewPassword;
