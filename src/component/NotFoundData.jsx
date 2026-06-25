import Link from "next/link";
import { FaSearch } from "react-icons/fa";


const NotFoundData = ({ notFound }) => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl border border-gray-200 p-8 text-center">
                <div className="text-4xl text-gray-400/50 mb-4 flex justify-center"><FaSearch /></div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {notFound?.title}
                </h2>

                <p className="text-gray-500 mb-6">
                    {notFound?.description}
                </p>

                <Link href={notFound?.href || '/allProperty'} className="px-5 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
                    {notFound?.button}
                </Link>
            </div>
        </div>
    );
};

export default NotFoundData;