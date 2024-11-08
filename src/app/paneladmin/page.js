"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getResponse } from "../services";

const PanelAdmin = () => {
  const [candidatos, setCandidates] = useState([]);
  const router = useRouter();

  
      const getCandidates = async () => {
        const respuesta = await getResponse(
          "Candidate/AllCandidates/"
        );
        setCandidates(respuesta.data);
      };
      

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      alert("Debes loguearte para acceder a esta pestaña.");
      router.push("/loginAdmin");
    }
    getCandidates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Panel de Administración de Candidatos
        </h1>

        {/* Contenedor con desplazamiento horizontal */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-indigo-400 text-gray-800">
              <tr>
                <th className="px-4 py-3 text-left">CC</th>
                <th className="px-4 py-3 text-left">Nombres</th>
                <th className="px-4 py-3 text-left">Correos</th>
                <th className="px-4 py-3 text-left">Tel</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">
                  Profesión
                </th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">
                  Años de Exp
                </th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">
                  Nivel Educ
                </th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">
                  Fecha de Registro
                </th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">
                  Ciudad
                </th>
                <th className="px-4 py-3 text-left">Habilidades</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">
                  Doct
                </th>
                <th className="px-4 py-3 text-left">Eliminar</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {candidatos.length > 0 ? (
                candidatos.map((candidato, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3">{candidato.CandidatesId}</td>
                    <td className="px-4 py-3">{candidato.Name}</td>
                    <td className="px-4 py-3">{candidato.Email}</td>
                    <td className="px-4 py-3">{candidato.Phone}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      {candidato.ProfessionId}
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {candidato.ExperienceYears}
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {candidato.EducationLevel}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {candidato.ApplicationDate}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {candidato.City}
                    </td>

                    <td className="px-4 py-3">
                      {candidato.Skill.map((skill, index) => (
                        <p key={index} className="text-gray-600">
                          {skill.name}
                        </p>
                      ))}
                    </td>

                    <td className="px-4 py-3 hidden md:table-cell">
                      <a
                        href={candidato.Resume}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Ver Documento
                      </a>
                    </td>

                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center py-4 text-gray-500">
                    No hay candidatos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PanelAdmin;
