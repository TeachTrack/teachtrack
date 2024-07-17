import { Link } from "react-router-dom"
import NotPageimg from "./../../assets/404.svg"

const NotPage = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <img className="w-3/4 mx-auto" src={NotPageimg} alt="not Page" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sahifa topilmadi</h1>
                <p className="mt-6 text-base leading-7 break-words font-medium text-gray-600">Uzr, siz qidirayotgan sahifani topa olmadik. yana bir bor qayta urinib ko'rasizmi?</p>
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

export default NotPage