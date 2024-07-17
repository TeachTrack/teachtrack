import { Link } from "react-router-dom"
import ServerE from "./../../assets/500.svg"
const ServerEror = () => {
  return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
            <img className="w-3/4 mx-auto" src={ServerE} alt="server error" />
                <p className="text-base break-words font-medium leading-7 text-gray-600">Hozircha, Server xavfsizligini ta'minlash va barcha himoya choralari olib borilmoqda</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/dashboard"
                        className="rounded-md bg-blue-700 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Oldingi sahifaga qaytish
                    </Link>
                    <Link to="/login" className="text-sm font-semibold text-gray-900">
                        Qo'llab-quvvatlash
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
  )
}

export default ServerEror