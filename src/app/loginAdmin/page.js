"use client";
import Image from "next/image";
import { useState } from "react";
import { postResponse } from "../services";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      AdminId: username,
      PasswordAdmin: password,
    };

    try {
      const response = await postResponse("Api/Login", data); 
      if (response.status === 200) {
        alert(response.data.message);
        localStorage.setItem("loggedIn", true);
        router.push('/paneladmin');
        
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error de autenticación:", err);
      alert("Hubo un problema al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <Image
            className="h-30 w-40"
            src="/imagenes/logo.svg"
            alt="logo login"
            width={200}
            height={100}
            onClick={handleLogoClick}
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
