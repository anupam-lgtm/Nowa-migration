import api from "../services/api";

export const login = async ({
  mobileNumber,
  parent_ref_code,
}: {
  mobileNumber: string;
  parent_ref_code: string;
}) => {
  try {
    const response = await api({
      url: "/user/signUpLogin",
      method: "POST",
      data: {
        mobileNumber,
        parent_ref_code,
      },
    });
    return response;
  } catch (error: any) {
    console.log(error, "error ");
    return error?.response;
  }
};

export const verifyOtp = async (
  mobileOTP: string | undefined,
  mobileNumber: string | undefined
) => {
  try {
    const response = await api({
      url: "/user/VerifyOtp",
      method: "POST",
      data: {
        mobileOTP,
        mobileNumber,
      },
    });
    return response;
  } catch (error: any) {
    console.log(error, "error in account creation");
    return error?.response;
  }
};
