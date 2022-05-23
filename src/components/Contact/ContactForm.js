import {useState} from 'react'

// import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-10 rounded-xl lg:py-16">
            <div className="relative mx-auto">
                <div className="">
                    <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">For Project Inquiries</h2>

                </div>
                <div className="mt-12">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first-name" className="block text-2xl font-medium text-gray-700">
                                First name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-2xl font-medium text-gray-700">
                                Last name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-2xl font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-2xl font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    placeholder="+1 (555) 987-6543"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={''}
                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Let's talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
