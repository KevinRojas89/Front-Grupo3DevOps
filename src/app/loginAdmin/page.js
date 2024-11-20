"use client";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Image from "next/image";
import { useState } from "react";
import { postResponse } from "../services";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const notify = (mensaje) => toast(mensaje);
  


  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/"); 
  };

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      AdminId: username,
      PasswordAdmin: password,
    };

    try {
      const response = await postResponse("Api/Login", data); 
      if (response.status === 200) {
        notify('Ingreso exitoso');
        localStorage.setItem("loggedIn", true);
        await esperar(2000);
        router.push('/paneladmin');
        
      } else {
        notify("Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error de autenticación:", err);
      notify(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ToastContainer></ToastContainer>
      <button
        onClick={handleLogoClick}
        className="absolute top-4 left-4 inline-flex flex-col items-center justify-center px-2 py-2 rounded-full hover:bg-gray-200 transition"
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
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <Image
            className="h-30 w-40"
            src="/imagenes/logo.svg"
            alt="logo login"
            width={200}
            height={100}
          />
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold text-center">
              Login
            </h3>
          </div>
          <div className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none"
                />
              </div>
              <button
                type="submit"
                className="relative h-10 w-full rounded-md font-medium border border-black bg-black text-white shadow transition-all hover:shadow-black px-4 py-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
