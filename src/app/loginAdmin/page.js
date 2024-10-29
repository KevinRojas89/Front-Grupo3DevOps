import Image from "next/image";


function Login() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md">

                <div className="flex justify-center">
                    <Image className="h-25 w-25" src="/imagenes/logo.svg" alt="logo login" width={100} height={100} />
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold text-center">Login</h3>
                    </div>
                    <div className="p-6">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
                                <input type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file.text-sm file.font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" ></input>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" type="password"></input>
                            </div>
                            <button className="before:ease relative h-10 w-full rounded-md font-medium overflow-hidden border border-black bg-black text-white shadow-2x1 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-[400px] px-4 py-2 disabled:pointer-events-none">
                                <span relative="relative z-10">Login</span>
                            </button>
                        </form>

                        <div className="mt-4 text-center text-sm">
                            <a className="underline" href="#" rel="ugc">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;