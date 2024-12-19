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
import PasswordInput from "./PasswordInput";
import { BiSolidCalendar } from "react-icons/bi";
import { useState } from "react";
import { AlertInfo } from "./AlertInfo";
import { Formik, Field, Form, FieldProps, FieldInputProps } from "formik";
import { ValidationSchema } from "../app/utils/ValidationSchema";
// import { User } from "@/app/models/User";
import { createUser } from "@/app/services/UserService";
import { toast } from "react-toastify";
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
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner:
          "absolute rounded-lg bg-white p-4 z-100 shadow-lg dark:bg-gray-700",
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
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  // const [user, setUser] = useState<User | null>(null);

  const handleDateExpirationChange = (
    date: Date | null,
    field: FieldInputProps<Date | null>
  ) => {
    setSelectedDateExpiration(date);
    field.onChange({ target: { name: field.name, value: date } });
  };
  const handleDateActivationChange = (
    date: Date | null,
    field: FieldInputProps<Date | null>
  ) => {
    setSelectedDateActivation(date);
    field.onChange({ target: { name: field.name, value: date } });
  };
  const handleChangeBranch = (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: FieldInputProps<string>
  ) => {
    setSelectedBranch(event.target.value);
    field.onChange(event);
  };
  const handleChangeDepartment = (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: FieldInputProps<string>
  ) => {
    setSelectedDepartment(event.target.value);
    field.onChange(event);
  };
  const handleChangeRole = (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: FieldInputProps<string>
  ) => {
    setSelectedRole(event.target.value);
    field.onChange(event);
  };
  const handleResetValues = () => {
    setSelectedDateActivation(null);
    setSelectedDateExpiration(null);
    setSelectedBranch("");
    setSelectedDepartment("");
    setSelectedRole("");
  };
  const handleOnSubmit = async (values, { resetForm }) => {
    try {
      const userData = {
        personId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        officeId: Number(selectedBranch),
        roleId: Number(selectedRole),
        ipAddress: values.ipAddress,
        userName: values.username,
      };
      console.log("Datos enviados:", userData);
      const response = await createUser(userData);
      console.log("Usuario creado:", response);
      toast.success("El usuario se ha creado correctamente.");
      resetForm();
      handleClose();
      handleResetValues();
    } catch (error) {
      console.error("Error al crear usuario:", error);
      toast.error("Algo salió mal. Intente nuevamente");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          idType: "",
          idNumber: "",
          firstName: "",
          secondName: "",
          lastNameFather: "",
          lastNameMother: "",
          branch: selectedBranch,
          department: selectedDepartment,
          role: selectedRole,
          corporateEmail: "",
          ipAddress: "",
          username: "",
          activationDate: selectedDateActivation,
          expirationDate: selectedDateExpiration,
          password: "",
          confirmPassword: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ resetForm, isValid, dirty, setTouched, setErrors }) => (
          <Modal
            size={"5xl"}
            show={openModal}
            onClose={() => {
              handleClose();
              resetForm();
              handleResetValues();
              setTouched({});
              setErrors({});
            }}
          >
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
              <Form>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Tipo de identificación */}
                  <Field name="idType">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Tipo de identificación{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 b-gray-input p-2">
                            <Radio
                              {...field} // Para manejar el campo de Formik
                              id="cedula"
                              name="idType"
                              value="cedula" // El valor de este radio button será "cedula"
                              checked={field.value === "cedula"} // Compara el valor actual con el valor del radio
                              theme={customThemeRadioButton}
                            />
                            <Label
                              className="font-13 font-normal"
                              htmlFor="cedula"
                            >
                              Cédula
                            </Label>
                          </div>
                          <div className="flex items-center gap-2 b-gray-input p-2">
                            <Radio
                              {...field}
                              id="passport"
                              name="idType"
                              value="passport"
                              checked={field.value === "passport"} // Compara el valor actual con el valor del radio
                              theme={customThemeRadioButton}
                            />
                            <Label
                              className="font-13 font-normal"
                              htmlFor="passport"
                            >
                              Pasaporte
                            </Label>
                          </div>
                        </div>

                        {/* Mostrar el error si lo hay */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  {/* Identificación */}
                  <Field name="idNumber">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label
                          htmlFor="idNumber"
                          className="font-medium font-13"
                        >
                          Identificación <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md">
                          <TextInput
                            {...field}
                            id="idNumber"
                            color="white"
                            type="text"
                            icon={() => (
                              <FaIdCard className="w-5 h-5 icon-color" />
                            )}
                            placeholder="100000000"
                            className="text-black-custom"
                            onInput={(e) => {
                              const input = e.target as HTMLInputElement;
                              input.value = input.value.replace(/[^0-9]/g, "");
                            }}
                          />
                        </div>
                        {/* Mostrar el error si lo hay */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  {/* Primer nombre */}
                  <Field name="firstName">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="font-medium font-13"
                        >
                          Primer nombre <span className="text-red-600">*</span>
                        </Label>
                        <TextInput
                          {...field}
                          id="firstName"
                          type="text"
                          icon={() => <FaUser className="w-4 h-4 icon-color" />}
                          placeholder="Ingrese primer nombre"
                          className="text-black-custom"
                        />
                        {/* Mostrar el error si lo hay */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  {/* Segundo nombre */}
                  <Field name="secondName">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label
                          htmlFor="secondName"
                          className="font-medium font-13"
                        >
                          Segundo nombre <span className="text-red-600">*</span>
                        </Label>
                        <TextInput
                          {...field}
                          id="secondName"
                          type="text"
                          icon={() => <FaUser className="w-4 h-4 icon-color" />}
                          placeholder="Ingrese segundo nombre"
                          className="text-black-custom"
                        />
                        {/* Mostrar el error si lo hay */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  {/* Apellido paterno */}
                  <Field name="lastNameFather">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label
                          htmlFor="lastNameFather"
                          className="font-medium font-13"
                        >
                          Apellido paterno{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <TextInput
                          {...field}
                          id="lastNameFather"
                          type="text"
                          icon={() => <FaUser className="w-4 h-4 icon-color" />}
                          placeholder="Ingrese apellido paterno"
                          className="text-black-custom"
                        />
                        {/* Mostrar el error si lo hay */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  {/* Apellido materno */}
                  <Field name="lastNameMother">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label
                          htmlFor="lastNameMother"
                          className="font-medium font-13"
                        >
                          Apellido materno{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <TextInput
                          {...field}
                          id="lastNameMother"
                          type="text"
                          icon={() => <FaUser className="w-4 h-4 icon-color" />}
                          placeholder="Ingrese apellido materno"
                          className="text-black-custom"
                        />
                        {/* Mostrar el error si lo hay */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  {/* Sucursal */}
                  <Field name="branch">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label htmlFor="branch" className="font-medium font-13">
                          Sucursal <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md relative">
                          <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                          <Select
                            {...field} // Bind Formik field
                            id="branch"
                            value={field.value} // Set value from Formik's field value
                            onChange={(event) =>
                              handleChangeBranch(event, field)
                            } // Bind Formik's onChange
                            className={`custom-text-gray font-13 ${
                              selectedBranch === ""
                                ? "selected-option"
                                : "default-option"
                            }`}
                            color="white"
                          >
                            <option value="" data-skip disabled>
                              Seleccione
                            </option>
                            <option value="1">Sucursal 1</option>
                            <option value="2">Sucursal 2</option>
                            <option value="3">Sucursal 3</option>
                            <option value="4">Sucursal 4</option>
                          </Select>
                          {/* Error Handling */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* Departamento */}
                  <Field name="department">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label
                          htmlFor="department"
                          className="font-medium font-13"
                        >
                          Departamento <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md relative">
                          <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                          <Select
                            {...field}
                            id="departamentos"
                            color="white"
                            className={`custom-text-gray font-13 ${
                              selectedDepartment === ""
                                ? "selected-option"
                                : "default-option"
                            }`}
                            value={field.value} // Set value from Formik's field value
                            onChange={(event) =>
                              handleChangeDepartment(event, field)
                            } // Bind Formik's onChange
                          >
                            <option data-skip value="" disabled>
                              Seleccione
                            </option>
                            <option value="1">Deaprtamento 1</option>
                            <option value="2">Deaprtamento 2</option>
                            <option value="3">Deaprtamento 3</option>
                            <option value="4">Deaprtamento 4</option>
                          </Select>
                          {/* Error Handling */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* Rol */}
                  <Field name="role">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Rol <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md relative">
                          <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                          <Select
                            {...field}
                            id="role"
                            color="white"
                            className={`custom-text-gray font-13 ${
                              selectedRole === ""
                                ? "selected-option"
                                : "default-option"
                            }`}
                            value={field.value} // Set value from Formik's field value
                            onChange={(event) => handleChangeRole(event, field)} // Bind Formik's onChange
                          >
                            <option data-skip value="" disabled>
                              Seleccione
                            </option>
                            <option value="1">Rol 1</option>
                            <option value="2">Rol 2</option>
                            <option value="3">Rol 3</option>
                            <option value="4">Rol 4</option>
                          </Select>
                          {/* Error Handling */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* Correo Corporativo */}
                  <Field name="corporateEmail">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Correo corporativo{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md">
                          <TextInput
                            {...field}
                            id="corporateEmail"
                            type="text"
                            icon={() => (
                              <IoMdMail className="w-5 h-5 icon-color" />
                            )}
                            placeholder="correo@servicio.com"
                            className="text-black-custom"
                          />
                          {/* Error Handling */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* IP */}
                  <Field name="ipAddress">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Ip <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md">
                          <TextInput
                            {...field}
                            id="ipAddress"
                            type="text"
                            icon={() => (
                              <BsFillLaptopFill className="w-5 h-5 icon-color" />
                            )}
                            placeholder="000.00.0.0"
                            className="text-black-custom"
                          />
                          {/* Error Handling */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* Nombre de usuario */}
                  <Field name="username">
                    {({ field, meta }: FieldProps) => (
                      <div className="row-span-2">
                        <Label className="font-medium font-13">
                          Nombre de usuario{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md">
                          <TextInput
                            {...field}
                            id="username"
                            type="text"
                            icon={() => (
                              <FaUser className="w-4 h-4 icon-color" />
                            )}
                            placeholder="Ingrese un usuario"
                            className="text-black-custom"
                          />
                          {/* Error Handling */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                        <AlertInfo
                          message="Longitud de 5 a 8 caracteres. Incluye solo letras minúsculas. No
                utilice espacios en blanco."
                        />
                      </div>
                    )}
                  </Field>
                  {/* Fecha de activación */}
                  <Field name="activationDate">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Fecha de activación{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md">
                          <div className="w-full relative chevron-input">
                            <Datepicker
                              {...field}
                              className="font-13"
                              language="es-ES"
                              placeholder="Seleccione"
                              value={selectedDateActivation}
                              onChange={(date: Date | null) => {
                                handleDateActivationChange(date, field);
                              }} // Actualiza el estado cuando seleccionas una fecha
                              icon={() => (
                                <BiSolidCalendar className="w-5 h-5 icon-color" />
                              )}
                              theme={customThemeDatepicker}
                              labelTodayButton="Hoy"
                              labelClearButton="Limpiar"
                            />
                            {/* Error Message */}
                            {meta.touched && meta.error && (
                              <div className="text-red-600 text-xs">
                                {meta.error}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* Fecha de vencimiento */}
                  <Field name="expirationDate">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Fecha de vencimiento{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <div className="max-w-md">
                          <div className="w-full relative chevron-input">
                            <Datepicker
                              {...field}
                              className="font-13"
                              language="es-ES"
                              placeholder="Seleccione"
                              value={selectedDateExpiration}
                              onChange={(date: Date | null) => {
                                handleDateExpirationChange(date, field);
                              }}
                              icon={() => (
                                <BiSolidCalendar className="w-5 h-5 icon-color" />
                              )}
                              theme={customThemeDatepicker}
                              labelTodayButton="Hoy"
                              labelClearButton="Limpiar"
                            />
                            {/* Error Message */}
                            {meta.touched && meta.error && (
                              <div className="text-red-600 text-xs">
                                {meta.error}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </Field>
                  {/* Contraseña*/}
                  <Field name="password">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Contraseña <span className="text-red-600">*</span>
                        </Label>
                        <PasswordInput {...field} />

                        {/* Error Message */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                        <AlertInfo message="Longitud de 8 a 16 caracteres. Incluye letras mayúsculas y minúsculas. Contiene 1 número (0-9). Contiene 1 carácter especial -!@#$%^&*. No contiene secuencias de letras o números como abc 1234 7777" />
                      </div>
                    )}
                  </Field>
                  {/* confirmar Contraseña */}
                  <Field name="confirmPassword">
                    {({ field, meta }: FieldProps) => (
                      <div>
                        <Label className="font-medium font-13">
                          Confirmar contraseña{" "}
                          <span className="text-red-600">*</span>
                        </Label>
                        <PasswordInput {...field} />
                        {/* Error Message */}
                        {meta.touched && meta.error && (
                          <div className="text-red-600 text-xs">
                            {meta.error}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="flex justify-end">
                  <Button
                    color="white"
                    className="bg-orange-custom px-11"
                    type="submit"
                    disabled={!dirty || !isValid}
                  >
                    Guardar
                  </Button>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className="border-t-0 flex justify-end items-end pt-0">
              {/* <Button
            color="white"
            className="bg-orange-custom px-11"
            type="submit"
          >
            Guardar
          </Button> */}
            </Modal.Footer>
          </Modal>
        )}
      </Formik>
    </>
  );
};
