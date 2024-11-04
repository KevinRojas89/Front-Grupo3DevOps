"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PanelAdmin = () => {
  const [candidatos,setCandidatos] = useState([]);
  const router = useRouter();
  
  async function obtenerCandidatos() {
    try {
      const respuesta = await axios.get('http://localhost:3306/AllCandidates');
      
      // Guarda los datos en el estado
      setCandidatos(respuesta.data);
      
      // Imprime los datos en consola
      console.log("Candidatos:", respuesta.data);
    } catch (error) {
      console.error("Error al obtener los candidatos:", error);
    }
    
  }
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      alert("Debes loguearte para acceder a esta pestaña.");
      router.push("/loginAdmin");
    }
    obtenerCandidatos();
  }, []);


  return (
    
    <>
      <table className="table-fixed ">
        <thead>
          <tr>
            <th className="w-1/6">CC</th>
            <th className="w-1/6">Nombres</th>
            <th className="w-1/6">Correos</th>
            <th className="w-1/6">Tel</th>
            <th className="w-1/6">Profesión</th>
            <th className="w-1/6">Años de Exp</th>
            <th className="w-1/6">Nivel Educ</th>
            <th className="w-1/6">Fecha de Registro</th>
            <th className="w-1/6">Ciudad</th>
            <th className="w-1/6">Habilidades</th>
            <th className="w-1/6">Doct</th>
            <th className="w-1/6">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.length > 0 ? (
            candidatos.map((candidato, index) => (
              <tr key={index}>
                <td>{candidato.cc}</td>
                <td>{candidato.nombres}</td>
                <td>{candidato.correos}</td>
                <td>{candidato.tel}</td>
                <td>{candidato.profesion}</td>
                <td>{candidato.anosExp}</td>
                <td>{candidato.nivelEduc}</td>
                <td>{candidato.fechaRegistro}</td>
                <td>{candidato.ciudad}</td>
                <td>{candidato.habilidades}</td>
                <td>{candidato.doct}</td>
                <td>
                  <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" className="text-center">
                No hay candidatos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </>
  );
};

export default PanelAdmin;
