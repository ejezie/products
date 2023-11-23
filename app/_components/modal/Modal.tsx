"use client";
import React from "react";
import "./Modal.scss";
import { Button } from "@/_components";
import { AnimatePresence, motion } from "framer-motion";
import { closeModal } from "@/_redux/slices/modal.slice";
import { useRouter } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { useAppSelector, useAppDispatch } from "@/hooks";

interface ModalTYpe {
  title?: string | undefined;
  message?: string | undefined;
  isOpen?: boolean | undefined;
  isOpenComponent?: boolean | undefined;
  promptMessage?: string | undefined;
  promptLink?: string | undefined;
  component?: string | undefined;
  success?: boolean | undefined;
  data?: any;
}

const Modal = () => {
  const {
    title,
    message,
    isOpen,
    isOpenComponent,
    promptMessage,
    promptLink,
    component,
    success: succeeded,
    data,
  }: any = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  // console.log(isOpen, "open", isOpenComponent, "comp-", component, "title-", amount, "transId", transaction_id);

  const navigate = useRouter();

  const handleNavigate = () => {
    navigate.push(promptLink ? promptLink : "None");
    dispatch(closeModal());
  };
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className={"modal center col"}>
            <motion.div
              key={isOpen ? "open" : "close"}
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0,
                // ease: "easeInOut",
              }}
              className="center"
              style={{ width: "100%" }}
            >
              <div className="modal_content_wrap center col">
                {succeeded ? (
                  <div className="success">
                    <GiCheckMark />
                  </div>
                ) : (
                  <div className="failed">
                    <MdOutlineCancel />
                  </div>
                )}
                <div className="modal_content_title">{title}</div>
                <div className="modal_message_text">{message}</div>

                {
                  <Button
                    text={promptMessage ? promptMessage : "Close"}
                    onClick={() => {
                      promptLink ? handleNavigate() : handleClose();
                    }}
                    className="modal_btn"
                  />
                }
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
