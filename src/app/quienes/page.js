"use client";
import Image from "next/image";
import "./quienes.css";
import { useRouter } from "next/navigation";

const WhoAreWe = () => {
  const router = useRouter();
  
  const handleLogoClick = () => {
    router.push("/"); // Cambia "/" a la ruta a la que quieras redirigir
  };

  return (
    <div className="mainContainer">
      {/* se agrega un panel principal que contiene todo "mainContainer" */}
      {/* se agrega mainTittle con animaciones alojadas en el "globals.css" aplicadas con tailwind */}
      <div className="mainTittle pb-80 pt-64 flex flex-col items-center">
        <Image
          src="/imagenes/logo.svg"
          alt="logo"
          className="w-1/5 scale-up-center"
          width={100}
          height={100}
          onClick={handleLogoClick}
        />
      </div>
      {/* para las secciones de container y container-2, se les agrega la clase showMe para animación de scroll, 
      se recomienda agregar para cada sección nueva */}
      <div className="container showMe bg-sky-500 rounded-md">
        <div className="image-section slide-left">
          <Image
            src="/imagenes/d.svg"
            alt="Technology Illustration"
            className="rounded-full"
            width={740}
            height={493}
          />
        </div>
        <div className="text-section bg-gradient-to-r from-sky-400 to-sky-200">
          <p className="font-sans font-medium">
            Esencia es una empresa de tecnología dedicada a desarrollar
            soluciones innovadoras que facilitan la transformación digital de
            empresas y organizaciones. Nos enfocamos en capturar la esencia de
            las necesidades de nuestros clientes y traducirlas en productos y
            servicios tecnológicos que optimicen procesos, mejoren la
            experiencia del usuario y promuevan la sostenibilidad.
          </p>
        </div>
        {/* Overlapping Circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
      {/* se agrega la sección "container-2" con su respectiva animación showMe*/}
      <div className="container-2 showMe lg:flex lg:flex-row lg:space-x-56 lg:justify-center mt-52 pt-48 sm:pb-80 pb-48">
        <div className="valores">
          <div className="panel bg-sky-300 pb-32 w-64 relative rounded-md mb-32">
            <h1 className="font-sans font-bold text-4xl  italic text-indigo-950 absolute -top-6">
              OBJETIVO
            </h1>
            <p className="text-left p-5 font-sans font-semibold tracking-tight">
              El objetivo de Esencia es ser una referencia en el mercado
              tecnológico, ofreciendo soluciones de calidad que no solo
              resuelvan los problemas actuales, sino que también anticipen las
              necesidades futuras de nuestros clientes. Queremos ayudar a las
              empresas a adoptar la tecnología de manera efectiva para impulsar
              su crecimiento y sostenibilidad.
            </p>
            <div className="image-v w-44 absolute -bottom-8 -right-9">
              <Image
                src="/imagenes/valores1.svg"
                alt="imagenPrimerValor"
                className="rounded-full"
                width={740}
                height={493}
              />
            </div>
          </div>
        </div>

        <div className="valores">
          <div className="panel bg-sky-300 pb-56 w-64 relative rounded-md mb-32">
            <h1 className="font-sans font-bold text-4xl  italic text-indigo-950 absolute -top-6">
              MISIÓN
            </h1>
            <p className="text-left p-5 font-sans font-semibold tracking-tight">
              La misión de Esencia es desarrollar tecnología que capture la
              verdadera necesidad de nuestros clientes, entregando soluciones
              que sean accesibles, de alta calidad y beneficiosas para todos,
              desde pequeñas empresas hasta grandes corporaciones.
            </p>
            <div className="image-v w-44 absolute -bottom-8 -right-9">
              <Image
                src="/imagenes/valores2.svg"
                alt="imagenSegundoValor"
                className="rounded-full"
                width={740}
                height={493}
              />
            </div>
          </div>
        </div>

        <div className="valores">
          <div className="panel bg-sky-300 pb-72 w-64 relative rounded-md mb-32">
            <h1 className="font-sans font-bold text-4xl  italic text-indigo-950 absolute -top-6">
              VISIÓN
            </h1>
            <p className="text-left p-5 font-sans font-semibold tracking-tight">
              Nuestra visión es ser reconocidos a nivel global como una empresa
              líder en innovación tecnológica, que contribuye a la construcción
              de un futuro más conectado, eficiente y sostenible.
            </p>
            <div className="image-v w-36 absolute -bottom-8 -right-9">
              <Image
                src="/imagenes/valores3.svg"
                alt="imagenTercerValor"
                className="rounded-full"
                width={740}
                height={493}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white">
        <div class="container mx-auto py-12">
          <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 block">
            <div class="bg-blue-700 p-6">
              <h3 class="font-bold text-lg">INNOVACIÓN</h3>
              <p class="mt-2">
                Nos enfocamos en crear soluciones que anticipen las necesidades
                futuras.
              </p>
            </div>
            <div class="bg-blue-500 p-6">
              <h3 class="font-bold text-lg">CALIDAD</h3>
              <p class="mt-2">
                Comprometidos con la entrega de productos y servicios de alta
                calidad.
              </p>
            </div>
            <div class="bg-blue-700 p-6">
              <h3 class="font-bold text-lg">SOSTENIBILIDAD</h3>
              <p class="mt-2">
                Desarrollamos tecnología respetuosa con el medio ambiente.
              </p>
            </div>
            <div class="bg-blue-500 p-6">
              <h3 class="font-bold text-lg">INTEGRIDAD</h3>
              <p class="mt-2">Operamos bajo los más altos estándares éticos.</p>
            </div>
            <div class="col-span-2 sm:col-span-2 lg:col-span-1 bg-blue-600 p-6">
              <h3 class="font-bold text-lg">COLABORACIÓN</h3>
              <p class="mt-2">
                Trabajamos de cerca con nuestros clientes para garantizar
                soluciones que superen sus expectativas.
              </p>
            </div>
          </div>
          <div class="lg:text-right text-center">
            <h1 class="text-4xl font-bold">VALORES</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
