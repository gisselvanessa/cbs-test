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
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import { ValidationSchema } from "../app/utils/ValidationSchema";

interface UserFormModalProps {
  openModal: boolean;
  handleClose: () => void;
}

export const UserFormModal = ({
  openModal,
  handleClose,
}: UserFormModalProps) => {
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
  const handleChangeDepartment = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <Formik
      initialValues={{
        idType: '',
        idNumber: '',
        firstName: '',
        secondName: '',
        lastNameFather: '',
        lastNameMother: '',
        branch: '',
        department: '',
        role: '',
        corporateEmail: '',
        ipAddress: '',
        username: '',
        activationDate: selectedDateActivation,
        expirationDate: selectedDateExpiration,
        password: '',
        confirmPassword: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        console.log('Formulario enviado', values);
        // Aquí puedes manejar el envío del formulario
      }}
    >{() => (
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
          <Form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tipo de identificación */}
            <Field name="identificationType">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Label className="font-medium font-13">
                    Tipo de identificación <span className="text-red-600">*</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 b-gray-input p-2">
                      <Radio
                        {...field} // Para manejar el campo de Formik
                        id="cedula"
                        name="identificationType"
                        value="cedula" // El valor de este radio button será "cedula"
                        checked={field.value === "cedula"} // Compara el valor actual con el valor del radio
                        className="focus:ring-blue-500"
                      />
                      <Label className="font-13 font-normal" htmlFor="cedula">
                        Cédula
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 b-gray-input p-2">
                      <Radio
                        {...field}
                        id="passport"
                        name="identificationType"
                        value="passport"
                        checked={field.value === "passport"} // Compara el valor actual con el valor del radio
                        className="focus:ring-blue-500"
                      />
                      <Label className="font-13 font-normal" htmlFor="passport">
                        Pasaporte
                      </Label>
                    </div>
                  </div>

                  {/* Mostrar el error si lo hay */}
                  {meta.touched && meta.error && (
                    <div className="text-red-600 text-sm">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            {/* Identificación */}
            <Field name="identification">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Label htmlFor="identification" className="font-medium font-13">
                    Identificación <span className="text-red-600">*</span>
                  </Label>
                  <div className="max-w-md">
                    <TextInput
                      {...field}
                      id="identification"
                      color="white"
                      type="text"
                      icon={() => <FaIdCard className="w-5 h-5 icon-color" />}
                      placeholder="100000000"
                      required
                      className="text-black-custom"
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/[^0-9]/g, '');
                      }}
                    />
                  </div>
                  {/* Mostrar el error si lo hay */}
                  {meta.touched && meta.error && (
                    <div className="text-red-600 text-sm">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            {/* Primer nombre */}
            <Field name="firstName">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Label htmlFor="firstName" className="font-medium font-13">
                    Primer nombre <span className="text-red-600">*</span>
                  </Label>
                  <TextInput
                  {...field}
                  id="firstName"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese primer nombre"
                  required
                  className="text-black-custom"
                  />
                  {/* Mostrar el error si lo hay */}
                  {meta.touched && meta.error && (
                    <div className="text-red-600 text-sm">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            {/* Segundo nombre */}
            <Field name="secondName">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Label htmlFor="secondName" className="font-medium font-13">
                    Segundo nombre <span className="text-red-600">*</span>
                  </Label>
                  <TextInput
                  {...field}
                  id="secondName"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese segundo nombre"
                  required
                  className="text-black-custom"
                  />
                  {/* Mostrar el error si lo hay */}
                  {meta.touched && meta.error && (
                    <div className="text-red-600 text-sm">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            {/* Apellido paterno */}
            <Field name="lastName">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Label htmlFor="lastName" className="font-medium font-13">
                    Apellido paterno <span className="text-red-600">*</span>
                  </Label>
                  <TextInput
                  {...field}
                  id="lastName"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese apellido paterno"
                  required
                  className="text-black-custom"
                  />
                  {/* Mostrar el error si lo hay */}
                  {meta.touched && meta.error && (
                    <div className="text-red-600 text-sm">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            {/* Apellido materno */}
            <Field name="motherLastName">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Label htmlFor="motherLastName" className="font-medium font-13">
                    Apellido materno <span className="text-red-600">*</span>
                  </Label>
                  <TextInput
                  {...field}
                  id="motherLastName"
                  type="text"
                  icon={() => <FaUser className="w-4 h-4 icon-color" />}
                  placeholder="Ingrese apellido materno"
                  required
                  className="text-black-custom"
                  />
                  {/* Mostrar el error si lo hay */}
                  {meta.touched && meta.error && (
                    <div className="text-red-600 text-sm">{meta.error}</div>
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
                      onChange={field.onChange} // Bind Formik's onChange
                      className={`custom-text-gray font-13 ${selectedBranch === 'select' ? 'selected-option' : 'default-option'}`}
                      required
                    >
                      <option value="select" disabled>
                        Seleccione
                      </option>
                      <option value="1">Sucursal 1</option>
                      <option value="2">Sucursal 2</option>
                      <option value="3">Sucursal 3</option>
                      <option value="4">Sucursal 4</option>
                    </Select>
                    {/* Error Handling */}
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm">{meta.error}</div>
                    )}
                  </div>
                </div>
              )}
            </Field>
            {/* Departamento */}
            <Field name="department">
              {({field,meta}: FieldProps)=>(
                <div>  
                  <Label htmlFor="branch" className="font-medium font-13">
                      Departamento <span className="text-red-600">*</span>
                  </Label>
                  <div className="max-w-md relative">
                    <HiBuildingOffice2 className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                      <Select
                        {...field}
                        id="departamentos"
                        color="white"
                        className={`custom-text-gray font-13 ${selectedDepartment === 'select' ? 'selected-option' : 'default-option'}`}
                        value={field.value} // Set value from Formik's field value
                        onChange={field.onChange} // Bind Formik's onChange
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
                      {/* Error Handling */}
                      {meta.touched && meta.error && (
                        <div className="text-red-600 text-sm">{meta.error}</div>
                      )}
                  </div>
                </div>
              )}
            </Field>
            {/* Rol */}
            <Field name="role">
              {({field,meta}: FieldProps) =>(
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
                      className={`custom-text-gray font-13 ${selectedRole === 'select' ? 'selected-option' : 'default-option'}`}
                      value={field.value} // Set value from Formik's field value
                      onChange={field.onChange} // Bind Formik's onChange
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
                    {/* Error Handling */}
                      {meta.touched && meta.error && (
                        <div className="text-red-600 text-sm">{meta.error}</div>
                      )}
                  </div>
                </div>

              )}
            </Field>
            {/* Correo Corporativo */}
            <Field name="corporateEmail">
              {({field,meta}:FieldProps)=>(
                <div>
                  <Label className="font-medium font-13">
                    Correo corporativo <span className="text-red-600">*</span>
                  </Label>
                  <div className="max-w-md">
                    <TextInput
                      {...field}
                      id="corporateEmail"
                      type="text"
                      icon={() => <IoMdMail className="w-5 h-5 icon-color" />}
                      placeholder="correo@servicio.com"
                      className="text-black-custom"
                      required
                    />
                    {/* Error Handling */}
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm">{meta.error}</div>
                    )}
                  </div>
                </div>
              )}
            </Field>
            {/* IP */}
            <Field name="ip">
              {({field,meta}:FieldProps)=>(
              <div>
                <Label className="font-medium font-13">
                  Ip <span className="text-red-600">*</span>
                </Label>
                <div className="max-w-md">
                  <TextInput
                    {...field}
                    id="ip"
                    type="text"
                    icon={() => (
                      <BsFillLaptopFill className="w-5 h-5 icon-color" />
                    )}
                    placeholder="000.00.0.0"
                    className="text-black-custom"
                    required
                  />
                  {/* Error Handling */}
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm">{meta.error}</div>
                    )}
                </div>
              </div>
              )}
            </Field>
            {/* Nombre de usuario */}
            <Field name="username">
              {({field,meta}:FieldProps)=>(
                <div className="row-span-2">
                  <Label className="font-medium font-13">
                    Nombre de usuario <span className="text-red-600">*</span>
                  </Label>
                  <div className="max-w-md">
                    <TextInput
                      {...field}
                      id="username"
                      type="text"
                      icon={() => <FaUser className="w-4 h-4 icon-color" />}
                      placeholder="Ingrese un usuario"
                      className="text-black-custom"
                      required
                    />
                    {/* Error Handling */}
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm">{meta.error}</div>
                    )}
                  </div>
                </div>
              )}
            </Field>
            {/* Fecha de activación */}
            <Field name="activationDate">
              {({field,meta}:FieldProps)=>(
                <div>
                  <Label className="font-medium font-13">
                    Fecha de activación <span className="text-red-600">*</span>
                  </Label>
                  <div className="max-w-md">
                    <div className="w-full relative chevron-input">
                      <Datepicker
                        {...field}
                        className="font-13"
                        language="es-ES"
                        placeholder="Seleccione"
                        value={selectedDateActivation}
                        onChange={handleDateActivationChange} // Actualiza el estado cuando seleccionas una fecha
                        icon={() => (
                          <BiSolidCalendar className="w-5 h-5 icon-color" />
                        )}
                      />
                      {/* Error Message */}
                      {meta.touched && meta.error && (
                        <div className="text-red-600 text-sm">{meta.error}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Field>
            {/* Fecha de vencimiento */}
            <Field name="expirationDate">
              {({field,meta}:FieldProps)=>(
                <div>
                  <Label className="font-medium font-13">
                    Fecha de vencimiento <span className="text-red-600">*</span>
                  </Label>
                  <div className="max-w-md">
                    <div className="w-full relative chevron-input">
                      <Datepicker
                        {...field}
                        className="font-13"
                        language="es-ES"
                        placeholder="Seleccione"
                        value={selectedDateExpiration}
                        onChange={handleDateExpirationChange}
                        icon={() => (
                          <BiSolidCalendar className="w-5 h-5 icon-color" />
                        )}
                      />
                      {/* Error Message */}
                      {meta.touched && meta.error && (
                        <div className="text-red-600 text-sm">{meta.error}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Field>
            {/* Contraseña*/}
            <Field name="password">
              {({field,meta}:FieldProps)=>(
                <div>
                  <Label className="font-medium font-13">
                    Contraseña <span className="text-red-600">*</span>
                  </Label>
                  <PasswordInput {...field}/>
                    {/* Error Message */}
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm">{meta.error}</div>
                    )}
                </div>
              )}
            </Field>
            {/* confirmar Contraseña */}
            <Field name="confirmPassword">
              {({field,meta}:FieldProps)=>(
                <div>
                  <Label className="font-medium font-13">
                    Confirmar contraseña <span className="text-red-600">*</span>
                  </Label>
                  <PasswordInput {...field} />
                    {/* Error Message */}
                    {meta.touched && meta.error && (
                      <div className="text-red-600 text-sm">{meta.error}</div>
                    )}
                </div>
              )}
            </Field>
          </div>
          </Form>
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
    )}
      </Formik>
    </>
  );
};
