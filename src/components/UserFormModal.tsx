"use client";
import { Button, Label, Modal, Radio } from "flowbite-react";
import Image from "next/image";

interface UserFormModalProps {
  openModal: boolean;
  handleClose: () => void;
}

export const UserFormModal = ({
  openModal,
  handleClose,
}: UserFormModalProps) => {
  return (
    <>
      <Modal size={"5xl"} show={openModal} onClose={handleClose}>
        <Modal.Header className="items-center border-b-0 pb-2 pt-3">
          <div className="flex">
            <Image
              src="/assets/images/clarity_employee-solid.svg"
              width={30}
              height={30}
              alt="icon"
            />
            <strong className="ms-2 font-medium text-xl">
              Agregar Usuario
            </strong>
          </div>
        </Modal.Header>
        <Modal.Body className="py-1">
          <div className="space-y-6">
            <p className="text-xs leading-relaxed text-black dark:text-gray-400">
              Ingresa la información para registrar un nuevo usuario
            </p>
            {/* Otros contenidos del modal */}
          </div>
          <Label className="font-medium text-sm">Tipo de identificación*</Label>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 lg:w-1/3 px-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 b-gray-input p-2">
                  <Radio id="cedula" name="user-data" value="cedula" />
                  <Label htmlFor="cedula">Cédula</Label>
                </div>
                <div className="flex items-center gap-2 b-gray-input p-2">
                  <Radio id="passport" name="user-data" value="Passport" />
                  <Label htmlFor="passport">Pasaporte</Label>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/3 px-2">
              <div className="p-4 bg-gray-200">Column 2</div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 px-2">
              <div className="p-4 bg-gray-300">Column 3</div>
            </div>
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
