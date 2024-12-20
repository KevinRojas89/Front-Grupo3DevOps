"use client";
import Image from "next/image";
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

  const goToLogin = () => {
    router.push("/loginAdmin");
  }

  return (
    <div className="bg-white font-sans">
      <div className="bg-white py-6 mx-1">
        <div className="container mx-10 md:flex md:items-center md:justify-between px-4 shadow-md block">
          <Image className="w-32" src="/imagenes/logo.svg" alt="Logo principal" width={100} height={100}/>
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

              <li>
                <a className="text-black hover:text-blue-900 hover:cursor-pointer"
                  onClick={goToLogin}
                >Administrador</a>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-white py-40  overflow-hidden shadow-sm">
        <div className="container mx-auto px-4 z-10 flex">
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
          <Image
            className="top-32 right-12 w-1/2 transform translate-x-1/8 -translate-y-1/6 flex-1 rounded-full"
            src="/imagenes/fondo 1.svg"
            alt="fondo principal"
            width={1000}
            height={1000}
          />
        </div>

      </div>
    </div>
  );
}
