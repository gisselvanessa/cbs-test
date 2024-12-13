"use client";
import { TextInput } from "flowbite-react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useState } from "react";
import { UserFormModal } from "@/components/userForm/UserFormModal";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-100">
      <Button onClick={() => setOpenModal(true)}>Registrar usuario098</Button>
      <UserFormModal openModal={openModal} handleClose={handleCloseModal} />
        <div  >

        <Image
          width={323}
          height={137}
          alt="icon-nav"
          className="m-auto"
          src="assets/logos/ptio-logo.svg"
        />
        <div className="w-full mt-4">
          <TextInput
            className="search-input text-gray-dark-custom"
            id="email4"
            type="text"
            icon={() => <CiSearch className="w-7 h-7 icon-color" />}
            placeholder="Buscar"
          />
        </div>
        </div>
      </div>
    </>
  );
  
}
