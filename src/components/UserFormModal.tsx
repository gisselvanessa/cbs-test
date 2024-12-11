"use client";
import {
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
import { FaIdCard, FaUser } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import PasswordInput from "./passwordInput/PasswordInput";
import { BiSolidCalendar } from "react-icons/bi";
import { useState } from "react";
import { AlertInfo } from "./alerts/AlertInfo";

interface UserFormModalProps {
  openModal: boolean;
  handleClose: () => void;
}

export const UserFormModal = ({
  openModal,
  handleClose,
}: UserFormModalProps) => {
  const customThemeDatepicker = {
    popup: {
      root: {
      "base": "absolute top-10 z-50 block pt-2",
      "inline": "relative top-0 z-auto",
      "inner": "absolute rounded-lg bg-white p-4 z-100 shadow-lg dark:bg-gray-700"
    },
      footer: {
        base: "mt-2 flex space-x-2",
        button: {
          base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
          today:
            "bg-orange-custom text-white hover:bg-orange-custom dark:bg-orange-custom dark:hover:bg-orange-custom",
          clear:
            "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        },
      },
    },
    views: {
      days: {
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            selected: "bg-orange-custom text-white hover:bg-orange-custom",
            disabled: "text-gray-500",
          },
        },
      },
    },
  };
  const customThemeRadioButton = {
    root: {
      base: "h-4 w-4 border border-gray-300 text-orange-600 focus:ring-2 focus:ring-orange-400 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-orange-600 dark:focus:ring-orange-600",
    },
  };

  const [selectedDateActivation, setSelectedDateActivation] =
    useState<Date | null>(null);
  const [selectedDateExpiration, setSelectedDateExpiration] =
    useState<Date | null>(null);
  const handleDateExpirationChange = (date: Date | null) => {
    setSelectedDateExpiration(date);
    console.log("Fecha expiracion:", date);
  };
  const handleDateActivationChange = (date: Date | null) => {
    setSelectedDateActivation(date);
    console.log("Fecha activacion:", date);
  };
  const [selectedBranch, setSelectedBranch] = useState("select");
  const [selectedDepartment, setSelectedDepartment] = useState("select");
  const [selectedRole, setSelectedRole] = useState("select");
  const handleChangeBranch = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeDepartment = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartment(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
    console.log(event.target.value);
  };
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
            <p className="text-xs leading-relaxed text-black-custom dark:text-gray-400">
              Ingresa la información para registrar un nuevo usuario
            </p>
            {/* Otros contenidos del modal */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tipo de identificación */}
            <div>
              <Label className="font-medium font-13">
                Tipo de identificación <span className="text-red-600">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 b-gray-input p-2">
                  <Radio
                    theme={customThemeRadioButton}
                    id="cedula"
                    name="user-data"
                    value="cedula"
                    defaultChecked
                  />
                  <Label className="font-13 font-normal" htmlFor="cedula">
                    Cédula
                  </Label>
                </div>
                <div className="flex items-center gap-2 b-gray-input p-2">
                  <Radio
                    theme={customThemeRadioButton}
                    id="passport"
                    name="user-data"
                    value="Passport"
                  />
                  <Label className="font-13 font-normal" htmlFor="passport">
                    Pasaporte
                  </Label>
                </div>
              </div>
            </div>

            {/* Identificación */}
            <div>
              <Label className="font-medium font-13">
                Identificación <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  color="white"
                  type="text"
                  icon={() => <FaIdCard className="w-5 h-5 icon-color" />}
                  placeholder="100000000"
                  required
                  className="text-black-custom"
                />
              </div>
            </div>

            {/* Primer nombre */}
            <div>
              <Label className="font-medium font-13">
                Primer nombre <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese primer nombre"
                  required
                  className="text-black-custom"
                />
              </div>
            </div>

            {/* Segundo nombre */}
            <div>
              <Label className="font-medium font-13">
                Segundo nombre <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese segundo nombre"
                  className="text-xs text-black-custom"
                  required
                />
              </div>
            </div>

            {/* Apellido paterno */}
            <div>
              <Label className="font-medium font-13">
                Apellido paterno <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese apellido paterno"
                  className="text-black-custom"
                  required
                />
              </div>
            </div>

            {/* Apellido materno */}
            <div>
              <Label className="font-medium font-13">
                Apellido materno <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese apellido materno"
                  className="text-black-custom"
                  required
                />
              </div>
            </div>
            {/* Sucursal */}
            <div>
              <Label className="font-medium font-13">
                Sucursal <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md relative">
                <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                <Select
                  id="sucursales"
                  color="white"
                  className={`custom-text-gray font-13 ${
                    selectedBranch === "select"
                      ? "selected-option"
                      : "default-option"
                  }`}
                  value={selectedBranch}
                  onChange={handleChangeBranch}
                  required
                >
                  <option data-skip value="select" disabled>
                    Seleccione
                  </option>
                  <option value="1">Sucursal 1</option>
                  <option value="2">Sucursal 2</option>
                  <option value="3">Sucursal 3</option>
                  <option value="4">Sucursal 4</option>
                </Select>
              </div>
            </div>
            {/* Departamento */}
            <div>
              <Label className="font-medium font-13">
                Departamento <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md relative">
                <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                <Select
                  id="departamentos"
                  color="white"
                  className={`custom-text-gray font-13 ${
                    selectedDepartment === "select"
                      ? "selected-option"
                      : "default-option"
                  }`}
                  value={selectedDepartment}
                  onChange={handleChangeDepartment}
                  required
                >
                  <option data-skip value="select" disabled>
                    Seleccione
                  </option>
                  <option value="1">Deaprtamento 1</option>
                  <option value="2">Deaprtamento 2</option>
                  <option value="3">Deaprtamento 3</option>
                  <option value="4">Deaprtamento 4</option>
                </Select>
              </div>
            </div>
            {/* Rol */}
            <div>
              <Label className="font-medium font-13">
                Rol <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md relative">
                <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                <Select
                  id="roles"
                  color="white"
                  className={`custom-text-gray font-13 ${
                    selectedRole === "select"
                      ? "selected-option"
                      : "default-option"
                  }`}
                  value={selectedRole}
                  onChange={handleChangeRole}
                  required
                >
                  <option data-skip value="select" disabled>
                    Seleccione
                  </option>
                  <option value="1">Rol 1</option>
                  <option value="2">Rol 2</option>
                  <option value="3">Rol 3</option>
                  <option value="4">Rol 4</option>
                </Select>
              </div>
            </div>
            {/* Correo Corporativo */}
            <div>
              <Label className="font-medium font-13">
                Correo corporativo <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <IoMdMail className="w-5 h-5 icon-color" />}
                  placeholder="correo@servicio.com"
                  className="text-black-custom"
                  required
                />
              </div>
            </div>
            {/* IP */}
            <div>
              <Label className="font-medium font-13">
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
                  className="text-black-custom"
                  required
                />
              </div>
            </div>
            {/* Nombre de usuario */}
            <div className="row-span-2">
              <Label className="font-medium font-13">
                Nombre de usuario <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <TextInput
                  id="email4"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese un usuario"
                  className="text-black-custom"
                  required
                />
              </div>

              <AlertInfo
                message="Longitud de 5 a 8 caracteres. Incluye solo letras minúsculas. No
                utilice espacios en blanco."
              />
            </div>
            {/* Fecha de activación */}
            <div>
              <Label className="font-medium font-13">
                Fecha de activación <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <div className="w-full relative chevron-input">
                  <Datepicker
                    className="font-13"
                    theme={customThemeDatepicker}
                    language="es-ES"
                    labelTodayButton="Hoy"
                    labelClearButton="Limpiar"
                    placeholder="Seleccione"
                    value={selectedDateActivation}
                    onChange={handleDateActivationChange} // Actualiza el estado cuando seleccionas una fecha
                    icon={() => (
                      <BiSolidCalendar className="w-5 h-5 icon-color" />
                    )}
                  />
                  {/* <DatePickerModal/> */}
                </div>
              </div>
            </div>
            {/* Fecha de vencimiento */}
            <div>
              <Label className="font-medium font-13">
                Fecha de vencimiento <span className="text-red-600">*</span>
              </Label>
              <div className="max-w-md">
                <div className="w-full relative chevron-input">
                  <Datepicker
                    className="font-13"
                    theme={customThemeDatepicker}
                    language="es-ES"
                    labelTodayButton="Hoy"
                    labelClearButton="Limpiar"
                    placeholder="Seleccione"
                    value={selectedDateExpiration}
                    onChange={handleDateExpirationChange}
                    icon={() => (
                      <BiSolidCalendar className="w-5 h-5 icon-color" />
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Contraseña*/}
            <div>
              <Label className="font-medium font-13">
                Contraseña <span className="text-red-600">*</span>
              </Label>
              <PasswordInput />
              <AlertInfo message="Longitud de 8 a 16 caracteres. Incluye letras mayúsculas y minúsculas. Contiene 1 número (0-9). Contiene 1 carácter especial -!@#$%^&*. No contiene secuencias de letras o números como abc 1234 7777" />
            </div>
            {/* confirmar Contraseña */}
            <div>
              <Label className="font-medium font-13">
                Confirmar contraseña <span className="text-red-600">*</span>
              </Label>
              <PasswordInput />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-t-0 flex justify-end items-end pt-0">
          <Button
            color="white"
            className="bg-orange-custom px-11"
            onClick={handleClose}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
