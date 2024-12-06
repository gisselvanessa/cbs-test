"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";

interface UserFormModalProps {
  openModal: boolean;
}

export const UserFormModal = ({ openModal }: UserFormModalProps) => {
  const [isOpen, setIsOpen] = useState(openModal);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal size={"5xl"} show={isOpen} onClose={handleClose}>
        <Modal.Header className="items-center border-b-0">
          <div className="flex">
            <Image
              src="/assets/images/clarity_employee-solid.svg"
              width={30}
              height={30}
              alt="icon"
            />
            <strong className="ms-2 font-medium text-xl">Agregar Usuario</strong>
          </div>
        </Modal.Header>
        <Modal.Body className="py-1">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Ingresa la información para registrar un nuevo usuario
            </p>
            {/* Otros contenidos del modal */}
          </div>
        </Modal.Body>
        <Modal.Footer className="border-t-0">
          <Button onClick={handleClose}>I accept</Button>
          <Button color="gray" onClick={handleClose}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
