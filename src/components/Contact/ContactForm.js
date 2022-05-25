import React, {useState} from 'react'
import {MdBadge} from 'react-icons/md'

// import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="bg-white py-12 px-4 overflow-hidden sm:px-6 lg:px-10 rounded-xl lg:py-12">
            <div className="relative mx-auto">
                <div className="">
                    <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">For Project Inquiries</h2>

                </div>
                <div className="mt-14">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first-name" className="block text-2xl font-medium text-[#A7A7A7]">
                                First Name
                            </label>
                            <div className="rounded-2xl mt-4 text-[#6C6C6C] focus-within:text-[#EF9572] relative shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdBadge className="h-8 w-8" aria-hidden="true"/>
                                </div>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="text-2xl text-black font-medium placeholder-[#A8A8A8] border-[#A8A8A8] rounded-2xl py-6 bg-white focus:outline-none focus:ring-[1.5px] focus:ring-[#EF9572] border-[1.5px] focus:border-none block w-full pl-14"
                                    placeholder="Type Name"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-2xl font-medium text-gray-400">
                                Last Name
                            </label>
                            <div className="rounded-2xl mt-4 border-gray-700 border-[1.5px] relative shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdBadge className="h-8 w-8 text-gray-500" aria-hidden="true"/>
                                </div>
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="text-2xl font-medium rounded-2xl focus:ring-indigo-500 py-6 bg-white  focus:border-indigo-500 block w-full pl-14 border-gray-300 "
                                    placeholder="Type Name"
                                />
                            </div>
                        </div>

                        <div className="mt-5 sm:col-span-2">
                            <label htmlFor="email" className="block text-2xl font-medium text-gray-400">
                                Email
                            </label>
                            <div className="rounded-2xl mt-4 border-gray-700 border-[1.5px] relative shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdBadge className="h-8 w-8 text-gray-500" aria-hidden="true"/>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Type Email"
                                    className="text-2xl font-medium rounded-2xl focus:ring-indigo-500 py-6 bg-white  focus:border-indigo-500 block w-full pl-14 border-gray-300 "
                                />

                            </div>
                        </div>
                        <div className="mt-5 sm:col-span-2">
                            <label htmlFor="email" className="block text-2xl font-medium text-gray-400">
                                Phone Number
                            </label>
                            <div className="rounded-2xl mt-4 border-gray-700 border-[1.5px] relative shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdBadge className="h-8 w-8 text-gray-500" aria-hidden="true"/>
                                </div>
                                <input
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    placeholder="Type Phone Number"
                                    className="text-2xl font-medium rounded-2xl focus:ring-indigo-500 py-6 bg-white  focus:border-indigo-500 block w-full pl-14 border-gray-300 "
                                />

                            </div>
                        </div>
                        <div className="mt-5 sm:col-span-2">
                            <label htmlFor="email" className="block text-2xl font-medium text-gray-400">
                                Message
                            </label>
                            <div className="mt-1">
                                <div className="rounded-2xl mt-4 border-gray-700 border-[1.5px] relative shadow-sm">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex py-4 pointer-events-none">
                                        <MdBadge className="h-8 w-8 text-gray-500" aria-hidden="true"/>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={9}
                                        placeholder="Type Phone Number"
                                        className="py-3 font-medium pl-14 block w-full bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-2xl"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 sm:col-span-2">
                            <button
                                className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
                                 transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-20 xl:py-6
                                 px-10  xl:m-0 py-8 xl:text-1xl text-xl"
                            >
                                send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
