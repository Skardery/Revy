import Link from "next/link"
import Image from "next/image"
import Margin4 from "@/components/margins/[4rem]-margin"
import { FaHouseChimney, FaTicket, FaNewspaper, FaCircleInfo, FaHeadset, FaCircleQuestion, FaFilePen, FaUser, FaRegPenToSquare, FaPenToSquare } from "react-icons/fa6";


export default function MiddleDropdownNavbar() {
    return (
        <div>
            
            <Margin4/>
            <div className="h-[15rem] flex px-12 pb-8 justfiy-between">
                <Link href="/" className="hover:bg-gray-50 dark:hover:bg-sgrey dark:bg-dark w-1/4 p-4">
                    <FaHouseChimney className="h-1/4 w-1/6 bg-gray-100 dark:bg-dark text-dark dark:text-slate-50 p-1 rounded-lg mb-6" height="100" width="100"/>
                    <div className="h-1/2 flex justify-start w-full flex-col">
                        <p className="mb-2 font-semibold text-dark dark:text-slate-50">Hjem</p>
                        <p className="text-dark dark:text-slate-200">Finn generell informasjon om revyfest billetter</p>
                    </div>
                </Link>
                <Link href="/billettsalg" className="hover:bg-gray-50 dark:hover:bg-sgrey w-1/4 p-4">
                    <FaTicket className="h-1/4 w-1/6 bg-gray-100 dark:bg-dark text-dark dark:text-slate-50 p-1 rounded-lg mb-6" height="100" width="100"/>
                    <div className="h-1/2 flex justify-start w-full flex-col">
                        <p className="mb-2 font-semibold text-dark dark:text-slate-50">Billettsalg</p>
                        <p className="text-dark dark:text-slate-200">Billettene kjøpt her må hentes på oppgitt tidspunkt.</p>
                    </div>
                </Link>
                <Link href="/faq" className="hover:bg-gray-50 dark:hover:bg-sgrey w-1/4 p-4">
                    <FaCircleInfo className="h-1/4 w-1/6 bg-gray-100 dark:bg-dark text-dark dark:text-slate-50 p-1 rounded-lg mb-6" height="100" width="100"/>
                    <div className="h-1/2 flex justify-start w-full flex-col">
                        <p className="mb-2 font-semibold text-dark dark:text-slate-50">FAQ</p>
                        <p className=" text-dark dark:text-slate-200">Ofte stilte spørsmål kan du finne her.</p>
                    </div>
                </Link>
                <Link href="/konto" className="hover:bg-gray-50 dark:hover:bg-sgrey w-1/4 p-4 ">
                    <FaUser className="h-1/4 w-1/6 bg-gray-100 dark:bg-dark text-dark dark:text-slate-50 p-1 rounded-lg mb-6" height="100" width="100"/>
                    <div className="h-1/2 flex justify-start w-full flex-col">
                        <p className="mb-2 font-semibold text-dark dark:text-slate-50">Konto</p>
                        <p className="text-dark dark:text-slate-200">På kontoen din kan du få oversikt over dine betalinger osv.</p>
                    </div>
                </Link>
            </div>
            <div className="w-full h-[3rem] divide-x divide-white divide-2 flex">
                <Link className="w-full flex justify-center items-center bg-gray-200 hover:bg-gray-100 dark:hover:bg-logoDBlue text-dark dark:bg-gradient-radial dark:from-sgrey dark:to-slgrey dark:text-slate-50 dark:hover:from-logoBlue dark:hover:to-logoDBlue dark:hover:text-dark drop-shadow-md dark:drop-shadow-xl " href="hjelp"><FaRegPenToSquare className="mr-2"/>Trykk her for å få hjelp eller stille spørsmål du lurer på.</Link>
            </div>
        </div>
    )
}