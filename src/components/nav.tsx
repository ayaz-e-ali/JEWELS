

export default function Nav() {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark")
    }

    return <div className="border-b-2 border-[#CEBEB9] pb-1 pt-3">
        <nav className="grid grid-cols-3 container items-center">
            <ul className="flex font-martel font-semibold text-md gap-10 whitespace-nowrap invisible md:visible">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Collection</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <h1 className="text-center text-header1 font-bastiken">JEWELS</h1>
            <div className="flex justify-center gap-4 invisible md:visible child:fill-dark">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 cursor-pointer">
                    <path d="M19 3C13.488281 3 9 7.488281 9 13C9 15.394531 9.839844 17.589844 11.25 19.3125L3.28125 27.28125L4.71875 28.71875L12.6875 20.75C14.410156 22.160156 16.605469 23 19 23C24.511719 23 29 18.511719 29 13C29 7.488281 24.511719 3 19 3 Z M 19 5C23.429688 5 27 8.570313 27 13C27 17.429688 23.429688 21 19 21C14.570313 21 11 17.429688 11 13C11 8.570313 14.570313 5 19 5Z" />
                </svg>

                <svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" x2="0.5" y2="22.9259" stroke="#B2A4A4" stroke-opacity="0.51" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 cursor-pointer">
                    <path d="M5 7C4.449219 7 4 7.449219 4 8C4 8.550781 4.449219 9 5 9L7.21875 9L9.84375 19.5C10.066406 20.390625 10.863281 21 11.78125 21L23.25 21C24.152344 21 24.917969 20.402344 25.15625 19.53125L27.75 10L11 10L11.5 12L25.15625 12L23.25 19L11.78125 19L9.15625 8.5C8.933594 7.609375 8.136719 7 7.21875 7 Z M 22 21C20.355469 21 19 22.355469 19 24C19 25.644531 20.355469 27 22 27C23.644531 27 25 25.644531 25 24C25 22.355469 23.644531 21 22 21 Z M 13 21C11.355469 21 10 22.355469 10 24C10 25.644531 11.355469 27 13 27C14.644531 27 16 25.644531 16 24C16 22.355469 14.644531 21 13 21 Z M 13 23C13.5625 23 14 23.4375 14 24C14 24.5625 13.5625 25 13 25C12.4375 25 12 24.5625 12 24C12 23.4375 12.4375 23 13 23 Z M 22 23C22.5625 23 23 23.4375 23 24C23 24.5625 22.5625 25 22 25C21.4375 25 21 24.5625 21 24C21 23.4375 21.4375 23 22 23Z" />
                </svg>

                <svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" x2="0.5" y2="22.9259" stroke="#B2A4A4" stroke-opacity="0.51" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 cursor-pointer dark:block hidden" onClick={toggleDarkMode}>
                    <path d="M15 3L15 8L17 8L17 3 Z M 7.5 6.09375L6.09375 7.5L9.625 11.0625L11.0625 9.625 Z M 24.5 6.09375L20.9375 9.625L22.375 11.0625L25.90625 7.5 Z M 16 9C12.144531 9 9 12.144531 9 16C9 19.855469 12.144531 23 16 23C19.855469 23 23 19.855469 23 16C23 12.144531 19.855469 9 16 9 Z M 16 11C18.773438 11 21 13.226563 21 16C21 18.773438 18.773438 21 16 21C13.226563 21 11 18.773438 11 16C11 13.226563 13.226563 11 16 11 Z M 3 15L3 17L8 17L8 15 Z M 24 15L24 17L29 17L29 15 Z M 9.625 20.9375L6.09375 24.5L7.5 25.90625L11.0625 22.375 Z M 22.375 20.9375L20.9375 22.375L24.5 25.90625L25.90625 24.5 Z M 15 24L15 29L17 29L17 24Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 cursor-pointer dark:hidden block" onClick={toggleDarkMode}>
                    <path d="M15.082031 3.2011719L12.539062 4.0507812C7.6653314 5.6800716 4 10.26859 4 15.705078C4 22.482509 9.5164708 28 16.294922 28C21.73141 28 26.319928 24.334669 27.949219 19.460938L28.806641 16.890625L26.484375 18.285156C24.778281 19.309594 22.948412 20.220703 21.021484 20.220703C15.904936 20.220703 11.777344 16.09409 11.777344 10.976562C11.778217 9.0275384 12.608776 7.3833645 13.716797 5.5097656L15.082031 3.2011719 z M 10.576172 7.2851562C10.110755 8.4196287 9.7779503 9.6221903 9.7773438 10.976562C9.7773438 17.175037 14.824033 22.220703 21.021484 22.220703C22.360699 22.220703 23.581099 21.890193 24.710938 21.431641C22.851141 24.145984 19.790663 26 16.294922 26C10.597373 26 6 21.401647 6 15.705078C6 12.206243 7.8578683 9.1444111 10.576172 7.2851562 z" />
                </svg>
                <button className="font-semibold ml-4 font-martel">Sign Up</button>
            </div>
        </nav>
    </div>
}