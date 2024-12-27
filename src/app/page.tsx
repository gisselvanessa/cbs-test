"use client";
import { TextInput } from "flowbite-react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { UserFormModal } from "@/components";
import UserFormLogin from "@/components/UserFormLogin";
import Cookies from "js-cookie";
import { useSession } from "./context/SessionContext";
import SessionExpire from "@/components/SessionExpire";
import useInactivity from "./hooks/useInactivity";
import { useRouter } from "next/navigation";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalExpireSession, setOpenModalExpireSession] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenAuth, setTokenAuth] = useState<string | undefined>(undefined);
  const { session, logout } = useSession();
  const router = useRouter();
  const { isInactive } = useInactivity({
    timeout: 30000,
    onInactive: () => {
      if (isLoggedIn) {
      setOpenModalExpireSession(true); // Abrir el modal directamente
      }
    },
  });

  useEffect(() => {
    const token = Cookies.get('AuthToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Cookies.remove("AuthToken");
    logout();
    setIsLoggedIn(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseModalLogin = () => {
    setOpenModalLogin(false);
  };

  const handleCloseModalExpireSession = () => {
    setOpenModalExpireSession(false);
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
    {
      id: 3,
      src: "assets/icons/home/personas.svg",
      text: "Personas",
      onClick: () => setOpenModal(true),
    },
    {
      id: 4,
      src: "assets/icons/home/cajas.svg",
      text: "Cajas",
      onClick: () => router.push('hola')
    },
    {
      id: 5,
      src: "assets/icons/home/ahorros.svg",
      text: "Ahorros",
      onClick: () => setOpenModalLogin(true),
    },
    {
      id: 6,
      src: "assets/icons/home/plazo-fijo.svg",
      text: "Plazo fijo",
      onClick: () => setOpenModalLogin(true),
    },
  ];

  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-screen-custom w-full">
        <div className="absolute top-3 right-3">
          {session ? (
            <div>
              <Button
                color="gray"
                className=" top-3 right-4 border-none text-base font-normal text-gray-custom"
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <Button
              className=" top-3 right-4 border-none text-base font-normal text-gray-custom"
              color="gray"
              onClick={() => setOpenModalLogin(true)}
            >
              <FaUser className="mr-3 h-4 w-4 items-center" />
              Iniciar sesión
            </Button>
          )}
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
              onClick={item.onClick || undefined}
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
        
        <UserFormModal openModal={openModal} handleClose={handleCloseModal} />
        {isLoggedIn && (
        <SessionExpire
          openModal={openModalExpireSession}
          handleClose={handleCloseModalExpireSession}
        />
        )}
      </div>
    </>
  );
}
