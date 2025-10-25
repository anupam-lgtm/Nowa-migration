import { useEffect } from "react";

import { Send, Wallet2Icon } from "lucide-react";
import ModalButton from "../modalButtons";

const ActivateModal = ({ isOpen = false, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="static-modal"
      tabIndex="-1"
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 flex items-center justify-center  bg-transparent bg-opacity-30 backdrop-blur-[2px] bg-opacity-50   overflow-y-auto overflow-x-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div className="relative p-4 w-full max-w-2xl mx-auto  pt-30">
        <div className="relative bg-background py-6 md:py-10 shadow text-white rounded-3xl md:rounded-[38px]">
          <div className="space-y-6 md:space-y-10 px-4 md:px-10">
            <div className="flex justify-center items-center">
              <p className="text-white font-semibold text-2xl md:text-[28px]">
                Activate
              </p>
            </div>

            <div className="font-normal text-left text-sm md:text-base ">
              {/* <p className="mb-2">
                To activate your NOWA account, simply follow us on X (Twitter),
                join
              </p>
              <p className="mb-2">
                our Telegram community, and connect your wallet using MetaMask.
              </p>
              <p className="mb-2">
                Completing these steps will ensure your account is verified and
              </p>
              <p className="mb-2">
                ready to access all features on the NOWA platform, including
                price
              </p>
              <p>predictions, staking, and rewards.</p> */}
              <p className="leading-7">
                {" "}
                To activate your NOWA account, simply follow us on X (Twitter),
                join our Telegram community, and connect your wallet using
                MetaMask. Completing these steps will ensure your account is
                verified and ready to access all features on the NOWA platform,
                including price predictions, staking, and rewards.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-evenly gap-2.5 w-full">
              <ModalButton icon={<Send size={15} />} bgColor="bg-up">
                FOLLOW ON
              </ModalButton>
              <ModalButton icon={<Send size={15} />} bgColor="bg-up">
                JOIN TELEGRAM
              </ModalButton>
              <ModalButton icon={<Wallet2Icon size={15} />} bgColor="bg-main">
                CONNECT WALLET
              </ModalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateModal;
