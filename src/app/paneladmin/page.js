"use client";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getResponse, urlBase } from "../services";

const PanelAdmin = () => {
  const [candidatos, setCandidates] = useState([]);
  const router = useRouter();
  const notify = (mensaje) => toast(mensaje);
  const handleLogoClick = () => {
    router.push("/");
  };

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getCandidates = async () => {
    const respuesta = await getResponse("Candidate/AllCandidates/");
    setCandidates(respuesta.data);
  };

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      alert("Debes loguearte para acceder a esta pestaña.");
      router.push("/loginAdmin");
    }
    getCandidates();
  }, [router]);

  const handleDelete = async (candidato) => {
    const resultado = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Estás a punto de eliminar al candidato ${candidato.Name}. Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "bg-gray-200", // Fondo de la ventana
        confirmButton: "bg-red-600 text-white hover:bg-red-700", // Botón de confirmación
        cancelButton: "bg-blue-300 text-blue-700 hover:bg-blue-400", // Botón de cancelar
      },
    });

    if (resultado.isConfirmed) {
      try {
        const response = await axios.delete(
          urlBase + "Candidate/DeleteCandidates/" + candidato.CandidatesId
        );

        if (response.status === 200) {
          notify("Se ha eliminado el candidato con éxito");
          await esperar(2000);
        } else {
          notify("Ocurrió un error al eliminar el candidato");
        }

        await getCandidates();
      } catch (error) {
        notify("Ocurrió un error al eliminar el candidato");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <ToastContainer></ToastContainer>
      <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={handleLogoClick}
          className="absolute top-4 left-4 inline-flex flex-col items-center justify-center px-4 py-6 rounded-full hover:bg-gray-200 transition"
        >
          <svg
            className="w-8 h-8 text-gray-500 hover:text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
        </button>

        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Panel de Administración de Candidatos
        </h1>

        {/* Contenedor con desplazamiento horizontal */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-indigo-400 text-gray-800">
              <tr>
                <th className="px-4 py-3 text-left">Cédula</th>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-left">Correo</th>
                <th className="px-4 py-3 text-left">Celular</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">
                  Profesión
                </th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">
                  Años de Experiencia
                </th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">
                  Nivel Educación
                </th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">
                  Fecha de Postulación
                </th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">
                  Ciudad
                </th>
                <th className="px-4 py-3 text-left">Habilidades</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">
                  Hoja de vida
                </th>
                <th className="px-4 py-3 text-left"></th>
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
                      {candidato.profession}
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
                          {skill.name.name}
                        </p>
                      ))}
                    </td>

                    <td className="px-4 py-3 hidden md:table-cell">
                      {candidato.Resume ? (
                        <a
                          href={candidato.Resume}
                          target="_blank"
                          className="text-blue-500 hover:underline"
                          rel="noopener noreferrer"
                        >
                          Ver Documento
                        </a>
                      ) : (
                        <span className="text-gray-500">
                          No se cargó un archivo
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5"
                        onClick={() => handleDelete(candidato)}
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
