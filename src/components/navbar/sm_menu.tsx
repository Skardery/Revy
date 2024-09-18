import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { FaHouseChimney, FaTicket, FaNewspaper, FaCircleInfo, FaHeadset, FaCircleQuestion, FaFilePen, FaUser } from "react-icons/fa6";

const solutions = [
  { name: 'Hjem', description: 'Trykk her for å komme til hovedsiden.', href: '/', icon: FaHouseChimney},
  { name: 'Billsettsalg', description: 'Kjøp Revyfest biletter her!', href: 'billettsalg', icon: FaTicket },
  { name: 'FAQ', description: 'Her finner du svar på ofte stilte spørsmål.', href: '/faq', icon: FaCircleInfo },
  { name: 'Konto', description: "Her kan du se dine kjøp, betalinger osv.", href: '/konto', icon: FaUser },

]
const callsToAction = [
  { name: 'Trykk her for å få hjelp.', href: '/hjelp', icon: FaHeadset }, 
]

export default function sm_menu() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true); 
  }, []);

  return (
    <div className="relative">
      <button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 opacity-0">
        <ChevronDownIcon className="h-3 w-3" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-sgrey text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            <div className="p-4 ">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover-bg-gray-50 hover:bg-hoverg">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-sgrey group-hover:bg-white dark:group-hover:bg-hoverg">
                    <item.icon className="h-6 w-6 text-gray-600 dark:text-slate-50 group-hover:text-indigo-600 dark:group-hover:text-logoBlue" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900 dark:text-slate-50 ">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600 dark:text-slate-50">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center  bg-gray-50 dark:bg-slgrey dark:hover:bg-hoverg   ">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center p-3 w-full font-semibold text-gray-900 dark:text-slate-50 hover-bg-gray-100 dark:hover:text-logoBlue  "
                >
                  {/* <item.icon className="h-5 w-5 flex-none text-gray-400 dark:text-slate-50  " aria-hidden="true" /> */}
                  <FaHeadset className="h-5 w-5 flex-none dark:hover:text-logoBlue mx-2 "/>

                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
