"use client";
import { UserFormModal } from "@/components/UserFormModal";
import { Button } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Registrar usuario098</Button>
      <UserFormModal openModal={openModal} handleClose={handleCloseModal} />
    </>
  );
}
