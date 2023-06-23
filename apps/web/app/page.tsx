
import Link from "next/link";
import Head from "next/head";
import Tpye from "@/components/login/Tpye";

export default function Login() {
  return (
    <main className=" overflow-hidden">
      <Head>
        <title>U4 - Get Started</title>
      </Head>
      <section className=" flex flex-row justify-center items-center">
          <div className=' h-screen hidden justify-center items-center md:flex md:w-1/3 lg:flex w-1/3' >
            Logo
          </div>
          <div className=' h-screen flex flex-col justify-center items-center gap-0 md:gap-2 lg:gap-2 w-full md:w-2/3 lg:w-2/3'>
            <h2 className=' text-2xl font-mono pb-2 md:pb-5 lg:pb-5'>You are a</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-2 md:pb-5 lg:pb-5'>
              <Tpye name="Teacher" />
              <Tpye name="Student" />
            </div>
            <Link key={'/login'} href={'/login'}>
              <button
                className=' px-4 p-2 bg-black text-white rounded-xl'>
                Get Started
              </button>
            </Link>
          </div>
      </section>
    </main>
  )
}
