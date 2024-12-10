"use client";
import { UserFormModal } from "@/components/UserFormModal";
import { Button, Datepicker } from "flowbite-react";
import { useState } from "react";
import { BiSolidCalendar } from "react-icons/bi";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Registrar usuario098</Button>
      <UserFormModal openModal={openModal} handleClose={handleCloseModal} />
      <Datepicker
                    icon={() => (
                      <BiSolidCalendar className="w-5 h-5 icon-color" />
                    )}
                  />
                  <h5 className="text-black">dfksdfkkaslsd sdjfksf  skdfjskdf skdjfsk skdfjkdjkfskdfk  sjdk</h5>
    </>
  );
}
