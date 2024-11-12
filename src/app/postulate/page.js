"use client";
import "../globals.css";
import Image from "next/image";
import { getResponse } from "../services";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ToApply = () => {
  const router = useRouter();
  
  const handleLogoClick = () => {
    router.push("/"); 
  };


  const [dataProf, setDataProf] = useState([]);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [selectedProfession, setSelectedProfession] = useState();
  const [dataCities, setDataCities] = useState({ cities: [], skills: [] });
  useEffect(() => {
    getInitialData();
  }, []);

  const getCities = async () => {
    const dataCities = await getResponse(
      "Candidate/profession/" + selectedProfession
    );
    setDataCities(dataCities.data);
  };

  useEffect(() => {
    if (selectedProfession) {
      getCities();
    }
  }, [selectedProfession]);

  const getInitialData = async () => {
    const dataProfessions = await getResponse("Candidate/AllProfessions");
    setDataProf(dataProfessions.data);
  };

  return (
    <div className="mainContainer">
      <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-tr-full rounded-tl-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg class="w-10 h-10 mb-1 text-gray-50 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" onClick={handleLogoClick}>
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
        <span class="sr-only"></span>
      </button>
      <div className="pt-30 flex flex-col items-center ">
        <Image src="/imagenes/logo.svg" alt="logo" width={200} height={200}/>

        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Formulario de Aplicación
          </h1>

          <hr className="border-t-2 border-gray-300 mb-8" />

          <form className="bg-white shadow-lg rounded-lg p-8 mb-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Registro de Información
            </h2>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="cedula"
              >
                Cédula
              </label>
              <input
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="cedula"
                type="text"
                placeholder="Ingrese su cédula"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="nombre"
                type="text"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="correo"
              >
                Correo
              </label>
              <input
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="correo"
                type="email"
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="celular"
              >
                Número de Celular
              </label>
              <input
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="celular"
                type="text"
                placeholder="Ingrese su número de celular"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="profesion"
              >
                Profesión
              </label>
              <select
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="profesion"
                onChange={(event) => setSelectedProfession(event.target.value)}
              >
                {dataProf.map((profession) => (
                  <option
                    key={profession.ProfessionId}
                    value={profession.ProfessionId}
                  >
                    {profession.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="experiencia"
              >
                Años de Experiencia
              </label>
              <select
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="experiencia"
              >
                <option value="0-1">0-1 años</option>
                <option value="2-5">2-5 años</option>
                <option value="6-10">6-10 años</option>
                <option value="10+">Más de 10 años</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="educacion"
              >
                Nivel de Educación
              </label>
              <select
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="educacion"
              >
                <option value="secundaria">Secundaria</option>
                <option value="universitario">Universitario</option>
                <option value="maestria">Maestría</option>
                <option value="doctorado">Doctorado</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="fecha"
              >
                Seleccione la Fecha
              </label>
              <input
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="fecha"
                type="date"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="ciudad"
              >
                Ciudad
              </label>
              <select
                className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="ciudades"
                // onChange={(event)=>setSelectedProfession(event.target.value)}
              >
                {dataCities.cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="habilidades"
              >
                Habilidades
              </label>
              <div id="habilidades">
                <div>
                  {dataCities.skills.length > 0 ? (
                    dataCities.skills.map((skill) => (
                      <div
                        key={skill.skillId}
                        className="flex items-center mb-2"
                      >
                        <input
                          type="checkbox"
                          id={`skill-${skill.skillId}`}
                          name="habilidades"
                          value={skill.skillId}
                          className="mr-2 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`skill-${skill.skillId}`}
                          className="text-gray-700"
                        >
                          {skill.skillName}
                        </label>
                      </div>
                    ))
                  ) : (
                    <p>No hay habilidades para esta profesión</p>
                  )}
                </div>
              </div>
            </div>
            (
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="cv"
              >
                Adjuntar Hoja de Vida (opcional)
              </label>
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4">
                <input
                  className="hidden"
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    setFile(selectedFile);
                  }}
                />
                <label
                  htmlFor="cv"
                  className="flex flex-col items-center cursor-pointer text-center"
                >
                  <svg
                    className="w-12 h-12 text-blue-500 mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v14a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 9 9-9"
                    />
                  </svg>
                  {file ? (
                    <span className="text-gray-700">
                      Archivo cargado: {file.name}
                    </span>
                  ) : (
                    <>
                      <span className="text-gray-700">
                        Arrastra y suelta tu archivo aquí o haz clic para subir
                      </span>
                      <span className="text-gray-500 text-sm">
                        Formatos permitidos: PDF, DOC, DOCX, JPG, PNG
                      </span>
                    </>
                  )}
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToApply;
