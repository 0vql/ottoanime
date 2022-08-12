import React from 'react'
import { useSelector } from "react-redux";

function Footer({contact}) {
    const { theme } = useSelector((state) => state);

  return (
    <footer className="p-4   md:px-6 md:py-8 relative">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src="/ottoanime.svg" className="mr-3 h-8" alt="Animex Logo"/>
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${theme.text.selected}`}>AniMexStream</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-700 sm:mb-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <button  className="hover:underline" onClick={contact}>Contact</button>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">AnimexStream™</a>. All Rights Reserved.

    </span>
</footer>
  )
}

export default Footer