import * as Yup from "yup";
import StylesInput from "../../components/inputField";
import { useRef, useState } from "react";
import {
  ArrowRight,
  AtSign,
  IndianRupee,
  LockKeyhole,
  TrendingUp,
} from "lucide-react";
import { Formik } from "formik";
import Error from "../../components/errorText";
import ReCAPTCHA from "react-google-recaptcha";
import { Surface } from "../../components/surface";
import LoginRight from "./component/loginRight";
import { login } from "../../queries/auth";
import { useMutation } from "@tanstack/react-query";
import logo from "../../assets/today-win.svg";
import nowa from "../../assets/nowa-coin.png";

import Button from "../../components/button";
import TabsSection from "../../components/TabsBar";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [selected, setSelected] = useState("Login");
  const recaptcha = useRef(null);

  const {
    mutateAsync: mutateLoginAccount,
    isPending: mutateLoginAccountPending,
  } = useMutation({
    mutationFn: ({
      mobileNumber,
      parent_ref_code,
    }: {
      mobileNumber: string;
      parent_ref_code: string | undefined;
    }) => {
      return login({
        mobileNumber,
        parent_ref_code: parent_ref_code || undefined,
      });
    },
    onSuccess: (data) => {
      if (data?.data?.responseCode == 200) {
        // Toast.show({
        //   text1: data?.data?.responseMessage,
        //   type: "success",
        // });
        // router.push({
        //   pathname: "/auth/phone-otp",
        //   params: {
        //     mobileNumber: formik?.values?.number,
        //   },
        // });
      } else {
        // Toast.show({
        //   text1: data?.data?.responseMessage,
        //   type: "error",
        // });
      }
    },
  });

  const data = [
    {
      name: "Your Total Staked",
      amount: "2,500",
      icon: logo,
    },
    {
      name: "Total Earning",
      amount: "1,500",
      icon: logo,
    },
  ];

  const tabs = ["TARAL", "RVLNG", "BIGBAIT"];

  const [activeTab, setActiveTab] = useState("TARAL");

  return (
    <Surface className="text-white">
      <div className="space-y-5">
        <div className=" flex flex-col justify-center items-center gap-5 w-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Token Migration</h1>
            <h5 className="text-lg text-[#9CA3AF]">
              Stake your tokens and migrate easily
            </h5>
          </div>

          <div className="bg-[#0F100F]  flex flex-col md:flex-row justify-between items-center w-[90%] 2xl:w-[50%]  px-8 py-8  rounded-3xl md:gap-0 gap-8">
            <div className="bg-[#4AFFB11A] py-3 px-4 rounded-3xl flex justify-center items-center flex-col gap-2">
              <div className="flex gap-2">
                <TrendingUp color="#00FFA9" />
                <p className="text-[#9CA3AF]">APY</p>
              </div>
              <p className="text-[#00FFA9] text-3xl font-bold">12%</p>
            </div>
            {data?.map((item) => {
              return (
                <div className=" flex w-full items-center justify-between md:flex-col md:justify-center md:gap-7">
                  <p className="text-[#9CA3AF] text-sm font-semibold  md:text-left">
                    {item?.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-bold text-4xl">
                      {item?.amount}
                    </p>
                    <img
                      src={item?.icon}
                      width={40}
                      alt={item?.name || "icon"}
                    />
                  </div>
                </div>
              );
            })}

            <button
              type="button"
              className="lg:ml-30 text-white bg-[#00FFA980] font-medium rounded-[16px] text-lg px-15 py-1.5 me-2 mb-2 "
            >
              Claim
            </button>
          </div>
        </div>
        <TabsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={tabs}
        />
        <div className="flex justify-center">
          <div className="bg-[#0F100F] w-[90%] 2xl:w-[50%] p-4 rounded-3xl space-y-5">
            <div className="flex justify-start gap-4 items-center">
              <div className="bg-[#4AFFB11A] rounded-2xl w-[60px] h-[60px] flex justify-center items-center">
                <img src={nowa} width={30} height={30} />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-2xl">RVLNG</p>
                <div className="bg-[#4AFFB11A] rounded-full p-1 gap-1 w-[60px] flex justify-center items-center">
                  <div className="bg-emerald-400 w-1 h-1 rounded-full"></div>
                  <p className="font-bold text-[12px] text-emerald-400">
                    Active
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#030705] p-4 rounded-2xl">
              <div className="flex flex-col justify-start gap-3">
                <p className="text-[#9CA3AF] text-sm">Your Balance</p>
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-3xl">500</p>
                  <p className="text-[#9CA3AF] text-lg">RVLNG</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="bg-[#030705] p-4 rounded-2xl w-full md:w-[48%]">
                <div className="flex flex-col justify-start gap-4">
                  <p className="text-[#9CA3AF] text-sm">Conversion</p>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-lg">1 : 1.8</p>
                    {/* <p className="text-[#9CA3AF] text-lg">RVLNG</p> */}
                  </div>
                </div>
              </div>
              <ArrowRight color="#6B7280" />
              <div className="bg-[#00FFA91A] p-4 rounded-2xl w-full md:w-[48%]">
                <div className="flex flex-col justify-start gap-2">
                  <p className="text-[#9CA3AF] text-sm">You Get</p>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-3xl text-[#00FFA9] ">900</p>
                    <img src={logo} width={30} alt={"icon"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[90%] 2xl:w-[50%]">
            <Button>STAKE</Button>
          </div>
        </div>
      </div>
    </Surface>
  );
};
export default Login;
