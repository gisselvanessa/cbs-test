import { Button, Modal } from "flowbite-react";
import React, { useEffect } from "react";
import Cookies from "js-cookie"; // Importamos js-cookie
import { useSession } from "@/app/context/SessionContext";
import useCountdown from "@/app/hooks/useCountdown";

interface SessionExpireModalProps {
  openModal: boolean;
  handleClose: () => void;
}

const SessionExpire = ({ openModal, handleClose }: SessionExpireModalProps) => {
  const { logout } = useSession();

  const { countdown, start, reset } = useCountdown(20, () => {
    handleLogout(); // logout cuando el tiempo llega a 0
  });
  const handleLogout = () => {
    Cookies.remove("token"); // Eliminar la cookie al cerrar sesión
    logout();
    handleClose();
  };
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  // Inicia el temporizador cuando el modal se abre
  useEffect(() => {
    if (openModal) {
      start();
    } else {
      reset(); // Reinicia el counterdown
    }
  }, [openModal, start, reset]);

  return (
    <Modal
      size={"xl"}
      show={openModal}
      onClose={() => {
        handleClose();
      }}
    >
      <Modal.Header className="items-center border-b-0 pb-2">
        <strong className="font-medium text-xl">¿Estas ahí todavía?</strong>
      </Modal.Header>
      <Modal.Body className="">
        <div className="flex items-center h-full">
          <p className="text-black text-center">
            Si no es así, su sesión se cerrará en:
            <span className="text-black text-xl font-semibold ms-2">
              {formatTime(countdown)}
            </span>
          </p>
        </div>

        <div className="flex justify-end pt-12">
          <Button
            color="white"
            className="bg-orange-custom me-2"
            type="submit"
            onClick={() => {
              handleClose();
              reset();
            }}
          >
            Seguir aquí
          </Button>
          <Button
            color="white"
            className="bg-orange-custom-outline"
            type="submit"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SessionExpire;
