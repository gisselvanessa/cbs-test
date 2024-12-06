"use client";
import { Button } from "flowbite-react";
import { useState } from "react";
import { UserFormModal } from "@/components/UserFormModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Registrar usuario</Button>
      <UserFormModal openModal={openModal} />
    </>
  );
}
