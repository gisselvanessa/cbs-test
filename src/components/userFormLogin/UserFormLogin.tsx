import { Button, Modal, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import "../../app/styles/userFormLogin.css";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { Field, FieldInputProps, FieldProps, Form, Formik } from "formik";
import { ValidationSchemaLogin } from "../../app/utils/ValidationSchemaLogin";
import PasswordInput from "../passwordInput/PasswordInput";
import { FaBuildingUser } from "react-icons/fa6";
import { User } from "@/app/models/User";
import { isUsername } from "@/app/services/authService";
import { toast } from "react-toastify";

interface LoginModalProps {
  openModal: boolean;
  handleClose: () => void;
}

const UserFormLogin = ({ openModal, handleClose }: LoginModalProps) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [userData, setUserData] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (values: any, { setErrors }: any) => {
    try {
      console.log("hi");
      console.log(values);
      setErrors({ username: "La username es incorrecta" });
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };
  const handleChangeRole = (
    event: React.ChangeEvent<HTMLSelectElement>,
    field: FieldInputProps<string>
  ) => {
    setSelectedRole(event.target.value);
    field.onChange(event);
  };
  const handleResetValues = () => {
    setSelectedRole("");
  };

  const verifyUser = async (username: string) => {
    if (!username.trim()) {
      return;
    }
    setLoading(true);
    try {
      const response = await isUsername(username);
      if (response) {
        setUserData(response);
        setError("");
      } else {
        handleUserNotFound();
      }
    } catch (err) {
      console.error("Error verificando usuario:", err);
      handleUserNotFound();
    } finally {
      setLoading(false);
    }
  };
  const handleUserNotFound = () => {
    const errorMessage = "Usuario no encontrado";
    setError(errorMessage);
    toast.error(errorMessage);
    setUserData(null);
  };
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          role: "",
          password: "",
        }}
        validationSchema={ValidationSchemaLogin}
        onSubmit={handleOnSubmit}
      >
        {({ resetForm, isValid, dirty, setTouched, setErrors }) => (
          <Modal
            show={openModal}
            onClose={() => {
              resetForm();
              handleResetValues();
              setTouched({});
              setErrors({});
              setError("");
              handleClose();
            }}
            size={"5xl"}
            theme={{
              content: {
                base: "relative h-full w-full p-4 md:h-auto",
                inner:
                  "relative flex max-h-[90dvh] flex-col rounded-[20px] bg-white shadow dark:bg-gray-700",
              },
            }}
          >
            <Modal.Header className="border-b-0 pb-2 pt-3"></Modal.Header>
            <Modal.Body className="pt-0">
              <Form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="logo-container text-black">
                    <Image
                      width={323}
                      height={137}
                      alt="icon-nav"
                      className=""
                      src="assets/logos/ptio-logo.svg"
                    />
                  </div>
                  <div className="form-container px-10 pb-12 pt-2 text-black">
                    <h2 className="text-xl font-semibold">Iniciar sesión</h2>
                    {/* Username */}
                    <Field name="username">
                      {({ field, meta, form }: FieldProps) => (
                        <div className="py-3 relative">
                          <TextInput
                            {...field}
                            id="username"
                            type="text"
                            icon={() => (
                              <FaUser className="w-4 h-4 icon-color" />
                            )}
                            placeholder="Usuario"
                            className="login-input text-black-custom"
                            onBlur={() => {
                              verifyUser(field.value);
                              form.setFieldTouched("username", true);
                            }}
                          />
                          <div className={` ${loading ? 'loader':''} absolute top-[35px] right-3 transform -translate-y-1/2`}></div>
                          {/* Mostrar el error si lo hay */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                          {/* Mostrar el error de la API si el usuario no existe */}
                          {error && !meta.error && (
                            <div className="text-red-600 text-xs">{error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                    {/* Rol */}
                    <Field name="role">
                      {({ field, meta }: FieldProps) => (
                        <div>
                          <div className="relative">
                            <FaBuildingUser className="w-5 h-5 icon-color absolute z-10 select-icon-position" />
                            <Select
                              {...field}
                              id="role"
                              color="white"
                              className={` py-3custom-text-gray login-input font-13 ${
                                selectedRole === ""
                                  ? "selected-option"
                                  : "default-option"
                              }`}
                              value={field.value} // Set value from Formik's field value
                              onChange={(event) =>
                                handleChangeRole(event, field)
                              } // Bind Formik's onChange
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
                    {/* Contraseña*/}
                    <Field name="password">
                      {({ field, meta }: FieldProps) => (
                        <div className="pt-3 pb-2">
                          <PasswordInput {...field} type={"login"} />

                          {/* Error Message */}
                          {meta.touched && meta.error && (
                            <div className="text-red-600 text-xs">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                    <div className="flex justify-end pb-3">
                      <span className="font-13 cursor-pointer">
                        ¿Olvidé mi contraseña?
                      </span>
                    </div>
                    <Button
                      color="white"
                      type="submit"
                      disabled={!dirty || !isValid}
                      className="bg-orange-custom w-full text-sm text-white font-normal"
                    >
                      Iniciar Sesión
                    </Button>
                  </div>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </Formik>
    </>
  );
};

export default UserFormLogin;
