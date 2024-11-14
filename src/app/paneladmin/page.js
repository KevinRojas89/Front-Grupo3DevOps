  "use client";

  import { useEffect, useState } from "react";
  import { useRouter } from "next/navigation";
  import axios from "axios";
  import { getResponse, urlBase } from "../services";

  const PanelAdmin = () => {
    const [candidatos, setCandidates] = useState([]);
    const router = useRouter();
    const handleLogoClick = () => {
      router.push("/");
    };  

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
    }, []);

    const handleDelete = async (candidato) => {
      const response = await axios.delete(
        urlBase + "Candidate/DeleteCandidates/" + candidato.CandidatesId
      );

      if (response.status === 200) {
        alert("Se ha eliminado el candidato con éxito");
      } else {
        alert("Ocurrió un error al eliminar el candidato");
      }

      await getCandidates();

    };

    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-6">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 rounded-tr-full rounded-tl-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              class="w-10 h-10 mb-1 text-gray-50 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              onClick={handleLogoClick}
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span class="sr-only"></span>
          </button>
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
