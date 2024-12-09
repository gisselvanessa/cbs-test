"use client";
import {
  Alert,
  Button,
  Datepicker,
  Label,
  Modal,
  Radio,
  Select,
  TextInput,
} from "flowbite-react";
import Image from "next/image";
import { BsFillLaptopFill } from "react-icons/bs";
import {  FaIdCard, FaUser } from "react-icons/fa";
import { HiBuildingOffice2, HiInformationCircle } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import PasswordInput from "./passwordInput/PasswordInput";
import { BiSolidCalendar } from "react-icons/bi";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tipo de identificación */}
            <div>
              <Label className="font-medium text-sm">
                Tipo de identificación <span className="text-red-600">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 b-gray-input p-2">
                  <Radio id="cedula" name="user-data" value="cedula" />
                  <Label className="text-xs font-normal" htmlFor="cedula">
                    Cédula
                  </Label>
                </div>
                <div className="flex items-center gap-2 b-gray-input p-2">
                  <Radio id="passport" name="user-data" value="Passport" />
                  <Label className="text-xs font-normal" htmlFor="passport">
                    Pasaporte
                  </Label>
                </div>
              </div>
            </div>

            {/* Identificación */}
            <div>
              <Label className="font-medium text-sm">
                Identificación <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaIdCard className="w-5 h-5 icon-color" />}
                  placeholder="100000000"
                  color="white"
                  required
                />
              </div>
            </div>

            {/* Primer nombre */}
            <div>
              <Label className="font-medium text-sm">
                Primer nombre <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-5 h-5 icon-color" />}
                  placeholder="Ingrese primer nombre"
                  color="white"
                  required
                />
              </div>
            </div>

            {/* Segundo nombre */}
            <div>
              <Label className="font-medium text-sm">
                Segundo nombre <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-5 h-5 icon-color" />}
                  placeholder="Ingrese segundo nombre"
                  color="white"
                  className="text-xs"
                  required
                />
              </div>
            </div>

            {/* Apellido paterno */}
            <div>
              <Label className="font-medium text-sm">
                Apellido paterno <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-5 h-5 icon-color" />}
                  placeholder="Ingrese apellido paterno"
                  color="white"
                  required
                />
              </div>
            </div>

            {/* Apellido materno */}
            <div>
              <Label className="font-medium text-sm">
                Apellido materno <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-5 h-5 icon-color" />}
                  placeholder="Ingrese apellido materno"
                  color="white"
                  required
                />
              </div>
            </div>
            {/* Sucursal */}
            <div>
              <Label className="font-medium text-sm">
                Sucursal <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md relative">
                <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                <Select
                  id="sucursales"
                  color="white"
                  className="text-black"
                  required
                >
                  <option disabled selected>
                    Seleccione
                  </option>
                  <option>Sucursal 1</option>
                  <option>Sucursal 2</option>
                  <option>Sucursal 3</option>
                  <option>Sucursal 4</option>
                </Select>
              </div>
            </div>
            {/* Departamento */}
            <div>
              <Label className="font-medium text-sm">
                Departamento <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md relative">
                <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                <Select
                  id="departamentos"
                  color="white"
                  className="text-black"
                  required
                >
                  <option selected disabled>
                    Seleccione
                  </option>
                  <option>Departamento 1</option>
                  <option>Departamento 2</option>
                  <option>Departamento 3</option>
                  <option>Departamento 4</option>
                </Select>
              </div>
            </div>
            {/* Rol */}
            <div>
              <Label className="font-medium text-sm">
                Rol <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md relative">
                <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                <Select
                  id="departamentos"
                  color="white"
                  className="text-black"
                  required
                >
                  <option selected disabled>
                    Seleccione
                  </option>
                  <option>Rol 1</option>
                  <option>Rol 2</option>
                  <option>Rol 3</option>
                  <option>Rol 4</option>
                </Select>
              </div>
            </div>
            {/* Correo Corporativo */}
            <div>
              <Label className="font-medium text-sm">
                Correo corporativo <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <IoMdMail className="w-5 h-5 icon-color" />}
                  placeholder="correo@servicio.com"
                  color="white"
                  required
                />
              </div>
            </div>
            {/* IP */}
            <div>
              <Label className="font-medium text-sm">
                Ip <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => (
                    <BsFillLaptopFill className="w-5 h-5 icon-color" />
                  )}
                  placeholder="000.00.0.0"
                  color="white"
                  required
                />
              </div>
            </div>
            {/* Nombre de usuario */}
            <div className="row-span-2">
              <Label className="font-medium text-sm">
                Nombre de usuario <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-5 h-5 icon-color" />}
                  placeholder="Ingrese un usuario"
                  color="white"
                  required
                />
              </div>
              <Alert
                color="info"
                icon={HiInformationCircle}
                className="flex items-start"
              >
                Longitud de 5 a 8 caracteres. Incluye solo letras minúsculas. No
                utilice espacios en blanco.
              </Alert>
            </div>
            {/* Fecha de activación */}
            <div>
              <Label className="font-medium text-sm">
                Fecha de activación <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <div className="w-full">
                  <Datepicker
                    placeholder="Seleccione"
                    className=""
                    language="es-ES"
                    icon={() => (
                      <BiSolidCalendar className="w-5 h-5 icon-color" />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Fecha de vencimiento */}
            <div>
              <Label className="font-medium text-sm">
                Fecha de vencimiento <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <Datepicker
                  className=""
                  language="es-ES"
                  icon={() => (
                    <BiSolidCalendar className="w-5 h-5 icon-color" />
                  )}
                />
              </div>
            </div>
            {/* Contraseña*/}
            <div>
              <Label className="font-medium text-sm">
                Contraseña <span className="text-red-600">*</span>
              </Label>
              <PasswordInput />
            </div>
            {/* confirmar Contraseña */}
            <div>
              <Label className="font-medium text-sm">
                Confirmar contraseña <span className="text-red-600">*</span>
              </Label>
              <PasswordInput />
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
