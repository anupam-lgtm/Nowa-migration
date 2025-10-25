import LoginRightImg from "../../../assets/greenRightLogin.png";

const LoginRight = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col justify-center items-center gap-20">
        <img src={LoginRightImg} className="w-125 h-105" />
        <div className="text-center">
          <p className="text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-upopacity">
            Predict
          </p>
          <p className="text-white text-[18px] font-semibold ">
            crypto trends and earn<br></br> rewards with NOWA
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRight;
