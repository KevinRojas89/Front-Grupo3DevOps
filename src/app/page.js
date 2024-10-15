"use client";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToWhoAreWe = () => {
    router.push("/quienes");
  };

  const goToApply = () => {
    router.push("/postulate");
  };

  return (
    <div className="bg-white font-sans ">
      <div className="bg-white py-6 mx-1">
        <div className="container mx-10 md:flex md:items-center md:justify-between px-4 shadow-md block">
          <img className="h-32" src="/imagenes/logofront.svg"></img>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  className="text-black hover:text-blue-900 hover:cursor-pointer"
                  onClick={goToWhoAreWe}
                >
                  Quienes Somos?
                </a>
              </li>
              <li>
                <a className="text-black hover:text-blue-900 hover:cursor-pointer"
                onClick={goToApply}
                >Postulate</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-white py-40  relative overflow-hidden shadow-sm">
        <div className="container mx-auto px-4 relative z-10 flex">
          <div className="max-w-3xl flex-1">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              <span className="text-blue-800">Tecnología</span> que transforma
              <br></br>
              <span className="text-blue-500">Soluciones</span> que perduran
            </h1>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Únete a <span className="font-bold">Esencia</span> y sé parte
                del futuro tecnológico.
              </li>
              <li>Innovamos hoy, para cambiar el mañana.</li>
            </ul>
          </div>
          <img
            className="top-32 right-12 w-1/2 transform translate-x-1/8 -translate-y-1/6 flex-1 rounded-full"
            src="/imagenes/fondo1.png"
          ></img>
        </div>

      </div>
    </div>
  );
}
