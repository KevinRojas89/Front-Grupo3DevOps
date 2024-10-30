"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PanelAdmin = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      alert("Debes loguearte para acceder a esta pestaña.");
      router.push("/loginAdmin");
    }
  }, []);
  return (
    <>
      <h1>Aqui llegamos cuando iniciamos sesion con exito mor</h1>
    </>
  );
};

export default PanelAdmin;
