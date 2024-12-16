"use client";
import { TextInput } from "flowbite-react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useState } from "react";
import { UserFormModal } from "@/components/userForm/UserFormModal";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import UserFormLogin from "@/components/userFormLogin/UserFormLogin";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseModalLogin = () => {
    setOpenModalLogin(false);
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-screen-custom w-full">
        <div className="absolute top-3 right-3">
          <Button
            className=" top-3 right-4 border-none text-base font-normal text-gray-custom"
            color="gray"
            onClick={() => setOpenModalLogin(true)}
          >
            <FaUser className="mr-3 h-4 w-4 items-center" />
            Iniciar sesión
          </Button>
        </div>
        <div>
          <Image
            width={323}
            height={137}
            alt="icon-nav"
            className="m-auto"
            src="assets/logos/ptio-logo.svg"
          />
          <div className="w-full my-6">
            <TextInput
              className="search-input text-gray-dark-custom"
              id="email4"
              type="text"
              icon={() => <CiSearch className="w-7 h-7 icon-color" />}
              placeholder="Buscar"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-16 mt-5">
          <div className="">
            <Image
              width={70}
              height={70}
              alt="icon-nav"
              className="m-auto"
              src="assets/icons/home/seguridad.svg"
            />
            <p className="text-center text-sm font-medium text-gray-custom mt-1">
              Seguridad
            </p>
          </div>
          <div className="">
            <Image
              width={70}
              height={70}
              alt="icon-nav"
              className="m-auto"
              src="assets/icons/home/talento-humano.svg"
            />
            <p className="text-center text-sm font-medium text-gray-custom mt-1">
              Talento humano
            </p>
          </div>
          <div className="">
            <Image
              width={70}
              height={70}
              alt="icon-nav"
              className="m-auto"
              src="assets/icons/home/personas.svg"
            />
            <p className="text-center text-sm font-medium text-gray-custom mt-1">
              Personas
            </p>
          </div>
          <div className="">
            <Image
              width={70}
              height={70}
              alt="icon-nav"
              className="m-auto"
              src="assets/icons/home/cajas.svg"
            />
            <p className="text-center text-sm font-medium text-gray-custom mt-1">
              Cajas
            </p>
          </div>
          <div className="">
            <Image
              width={70}
              height={70}
              alt="icon-nav"
              className="m-auto"
              src="assets/icons/home/ahorros.svg"
            />
            <p className="text-center text-sm font-medium text-gray-custom mt-1">
              Ahorros
            </p>
          </div>
          <div className="">
            <Image
              width={70}
              height={70}
              alt="icon-nav"
              className="m-auto"
              src="assets/icons/home/plazo-fijo.svg"
            />
            <p className="text-center text-sm font-medium text-gray-custom mt-1">
              Plazo fijo
            </p>
          </div>
        </div>
        <UserFormLogin openModal={openModalLogin} handleClose={handleCloseModalLogin} />
        <UserFormModal openModal={openModal} handleClose={handleCloseModal} />
        <Button className="hidden" onClick={() => setOpenModal(true)}>Registrar usuario098</Button>
      </div>
    </>
  );
}
