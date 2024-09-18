import Header from '@/components/navbar/main-navbar';
import SmHeader from '@/components/navbar/sm-navbar';
import { Footer } from '@/components/navbar/footer';


import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Hvordan kjøper jeg billetter?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Hvordan får jeg billetene mine?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Hvordan fungerer trekningsprosessen?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Hva gjør jeg hvis jeg ikke fikk bilett?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Er det mulig å få refundert billetten min?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  
  
]

export default function Example() {
  return (
    <div className="bg-gray-50 dark:bg-dark">
    <div className="bg-gray-50 dark:bg-dark min-h-screen">
    <div className='hidden md:flex'><Header/></div>
      <div className='flex md:hidden'><SmHeader/></div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-8 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-slate-50/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-dark dark:text-slate-50 ">Ofte stilte spørsmål</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-slate-50/10 ">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-dark dark:text-slate-50">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-black">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
        <div className="my-0"><Footer/></div>
    </div>
  )
}
