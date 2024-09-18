import Image from "next/image"
import Link from "next/link"

export default function LogoNavbar() {
    
    return (
        <div className="w-2/3 md:w-1/2 lg:w-1/2 flex flex-start ml-7 items-center">
            {/* <Image src="/Revy-logo.png" alt="Logo" width="50" height="50" /> */}
            <Link href="/"><div className=" w-[60px] h-[31px] dark:w-[60px] dark:h-[31px] mx-2 bg-[url('/Revyfest_logo.png')] bg-cover dark:bg-[url('/DarkRevy.png')] ')]" ></div></Link>
            <Link href="/" className="ml-3 text-dark dark:text-slate-50 text-lg">ELVEBAKKEN-REVYFEST</Link>
        </div>
    )
}