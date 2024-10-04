 import "./globals.css"
export default function Home() {
  return (
    <div className="bg-white font-sans ">

      <div className="bg-white py-6">
        <div className="container mx-auto flex items-center justify-between px-2">
          <img className="h-32" src="/imagenes/logofront.svg"></img>
          <nav>
            <ul className="flex space-x-6 ">
              <li><a className="text-black hover:text-blue-900" href="/src/app/QuienesSomos">Quienes Somos?</a></li>
              <li><a className="text-black hover:text-blue-900" href="/src/app/postulate">Postulate</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-white py-40  relative overflow-hidden">
        <div className="container mx-auto px-0 relative z-10">
          <div className="max-w-3xl">
            <h1 className='text-5xl font-bold leading-tight mb-4'><span className="text-blue-800">Tecnología</span> que transforma<br></br><span className="text-blue-500">Soluciones</span> que perduran</h1>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <li>Únete a <span className="font-bold">Esencia</span> y sé parte del futuro tecnológico.</li>
              <li>Innovamos hoy, para cambiar el mañana.</li>
            </ul>
          </div>
        </div >
        <img className="absolute top-36 right-10 w-1/2 transform translate-x-1/4 -translate-y-1/4" src="/imagenes/fondo1.png"></img>
      </div>
    </div>
  );
}
