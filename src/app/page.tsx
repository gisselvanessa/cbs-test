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
  const items = [
    {
      id: 1,
      src: "assets/icons/home/seguridad.svg",
      text: "Seguridad",
      onClick: () => setOpenModalLogin(true),
    },
    {
      id: 2,
      src: "assets/icons/home/talento-humano.svg",
      text: "Talento humano",
      onClick: () => setOpenModalLogin(true),
    },
    { id: 3, src: "assets/icons/home/personas.svg", text: "Personas",
      onClick: () => setOpenModalLogin(true),
     },
    { id: 4, src: "assets/icons/home/cajas.svg", text: "Cajas",
      onClick: () => setOpenModalLogin(true),
     },
    { id: 5, src: "assets/icons/home/ahorros.svg", text: "Ahorros",
      onClick: () => setOpenModalLogin(true),
     },
    { id: 6, src: "assets/icons/home/plazo-fijo.svg", text: "Plazo fijo",
      onClick: () => setOpenModalLogin(true),
     },
  ];

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
        <div className="flex flex-wrap gap-8 md:gap-16 mt-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer"
              onClick={item.onClick || undefined} // Asegúrate de manejar onClick opcionalmente
            >
              <Image
                width={70}
                height={70}
                alt={`icon-${item.text.toLowerCase()}`}
                className="m-auto"
                src={item.src}
              />
              <p className="text-center text-sm font-medium text-gray-custom mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <UserFormLogin
          openModal={openModalLogin}
          handleClose={handleCloseModalLogin}
        />
        <UserFormModal openModal={openModal} handleClose={handleCloseModal} />
        <Button color="blue" onClick={() => setOpenModal(true)}>
          Registrar usuario
        </Button>
      </div>
    </>
  );
}
