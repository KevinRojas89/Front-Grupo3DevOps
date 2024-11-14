"use client";
import "../globals.css";
import Image from "next/image";
import { getResponse, postResponse } from "../services";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { urlBase } from "../services";

const ToApply = () => {
  const router = useRouter();
  
  const handleLogoClick = () => {
    router.push("/");
  };

  const [dataProf, setDataProf] = useState([]);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    // Organiza los datos de la misma manera que en la petición de Postman
    formData.append("data", JSON.stringify({
      CandidatesId: parseInt(event.target.cedula.value, 10),
      Name: event.target.nombre.value,
      Email: event.target.correo.value,
      Phone: event.target.celular.value,
      ProfessionId: parseInt(selectedProfession,),
      ExperienceYears: parseInt(event.target.experiencia.value, 10),
      EducationLevel: event.target.educacion.value,
      ApplicationDate: event.target.fecha.value,
      City: event.target.ciudades.value,
      Skill: Array.from(event.target.habilidades)
        .filter(input => input.checked)
        .map(input => ({ id: parseInt(input.value, 10), name: dataCities.skills.filter(sk => {if (sk.skillId == input.value) return sk.skillName})[0].skillName})), 
    }));
  
    if (file) {
      formData.append("resume", file);
    }
  
    try {
      const response = await axios.post(urlBase + 'Candidate/candidates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.status === 200) {
        alert("Se ha postulado con éxito");
        router.push('/');
      } else {
        console.error("Error en la respuesta del servidor:", response.data);
        alert("Error al enviar el formulario. " + (response.data.error || "Por favor, verifica los datos."));
      }

    } catch (error) {
      console.error("Error de conexión o en el envío:", error);
      alert("Error en la conexión o en el envío del formulario. Revisa la consola para más detalles.");
    }
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
      <Image src="/imagenes/logo.svg" alt="logo" width={200} height={200} onClick={handleLogoClick} />
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-4">Formulario de Aplicación</h1>
          <hr className="border-t-2 border-gray-300 mb-8" />
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mb-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registro de Información</h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cedula">Cédula</label>
              <input className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="cedula" type="text" placeholder="Ingrese su cédula" required />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="nombre">Nombre</label>
              <input className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="nombre" type="text" placeholder="Ingrese su nombre" required />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="correo">Correo</label>
              <input className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="correo" type="email" placeholder="Ingrese su correo" required />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="celular">Número de Celular</label>
              <input className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="celular" type="text" placeholder="Ingrese su número de celular" required />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="profesion">Profesión</label>
              <select className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="profesion" onChange={(e) => setSelectedProfession(e.target.value)} required>
                <option value="">Seleccione una profesión</option>
                {dataProf.map((profession) => (
                  <option key={profession.ProfessionId} value={profession.ProfessionId}>{profession.Name}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="experiencia">Años de Experiencia</label>
              <select className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="experiencia">
                <option value="0-1">0-1 años</option>
                <option value="2-5">2-5 años</option>
                <option value="6-10">6-10 años</option>
                <option value="10+">Más de 10 años</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="educacion">Nivel de Educación</label>
              <select className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="educacion">
                <option value="secundaria">Secundaria</option>
                <option value="universitario">Universitario</option>
                <option value="maestria">Maestría</option>
                <option value="doctorado">Doctorado</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fecha">Seleccione la Fecha</label>
              <input className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="fecha" type="date" required />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="ciudades">Ciudad</label>
              <select className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700" id="ciudades">
                {dataCities.cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="habilidades">Habilidades</label>
              <div id="habilidades">
                {dataCities.skills.length > 0 ? (
                  dataCities.skills.map((skill) => (
                    <div key={skill.skillId} className="flex items-center mb-2">
                      <input type="checkbox" id={`skill-${skill.skillId}`} name="habilidades" value={skill.skillId} className="mr-2 h-4 w-4 text-blue-500 border-gray-300 rounded" />
                      <label htmlFor={`skill-${skill.skillId}`} className="text-gray-700">{skill.skillName}</label>
                    </div>
                  ))
                ) : (
                  <p>No hay habilidades para esta profesión</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Hoja de Vida</label>
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={(e) => setFile(e.target.files[0])} />
              {file && <span className="text-gray-700">Archivo cargado: {file.name}</span>}
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToApply;
