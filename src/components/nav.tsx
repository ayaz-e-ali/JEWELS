export default function Nav() {
    return <div className="border-b-2 border-[#CEBEB9] pb-1 pt-3">
        <nav className="grid grid-cols-3 container items-center">
            <ul className="flex font-martel font-semibold text-md gap-10 whitespace-nowrap invisible md:visible">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Collection</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <h1 className="text-center text-header1 font-bastiken">JEWELS</h1>
            <div className="flex justify-center gap-4 invisible md:visible">
                <svg className="cursor-pointer" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0086 13.7282H14.06L13.7238 13.3969C14.9005 11.998 15.6089 10.1819 15.6089 8.20628C15.6089 3.80099 12.1149 0.230133 7.80446 0.230133C3.494 0.230133 0 3.80099 0 8.20628C0 12.6116 3.494 16.1824 7.80446 16.1824C9.73757 16.1824 11.5146 15.4584 12.8834 14.2559L13.2075 14.5995V15.5689L19.211 21.6921L21 19.8637L15.0086 13.7282ZM7.80446 13.7282C4.81475 13.7282 2.40137 11.2618 2.40137 8.20628C2.40137 5.1508 4.81475 2.68433 7.80446 2.68433C10.7942 2.68433 13.2075 5.1508 13.2075 8.20628C13.2075 11.2618 10.7942 13.7282 7.80446 13.7282Z" fill="black" />
                </svg>
                <svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" x2="0.5" y2="22.9259" stroke="#B2A4A4" stroke-opacity="0.51" />
                </svg>

                <svg className="cursor-pointer" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.9 17.4097C5.635 17.4097 4.6115 18.376 4.6115 19.5571C4.6115 20.7382 5.635 21.7046 6.9 21.7046C8.165 21.7046 9.2 20.7382 9.2 19.5571C9.2 18.376 8.165 17.4097 6.9 17.4097ZM0 0.230133V2.37758H2.3L6.44 10.5271L4.8875 13.1577C4.7035 13.4584 4.6 13.8127 4.6 14.1885C4.6 15.3696 5.635 16.336 6.9 16.336H20.7V14.1885H7.383C7.222 14.1885 7.0955 14.0704 7.0955 13.9201L7.13 13.7912L8.165 12.0411H16.7325C17.595 12.0411 18.354 11.6009 18.745 10.9351L22.862 3.96669C22.954 3.81637 23 3.63383 23 3.4513C23 2.86075 22.4825 2.37758 21.85 2.37758H4.8415L3.7605 0.230133H0ZM18.4 17.4097C17.135 17.4097 16.1115 18.376 16.1115 19.5571C16.1115 20.7382 17.135 21.7046 18.4 21.7046C19.665 21.7046 20.7 20.7382 20.7 19.5571C20.7 18.376 19.665 17.4097 18.4 17.4097Z" fill="black" />
                </svg>
                <svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" x2="0.5" y2="22.9259" stroke="#B2A4A4" stroke-opacity="0.51" />
                </svg>

                <svg className="cursor-pointer" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.71748C11.45 2.71748 12.625 3.94806 12.625 5.46665C12.625 6.98524 11.45 8.21583 10 8.21583C8.55 8.21583 7.375 6.98524 7.375 5.46665C7.375 3.94806 8.55 2.71748 10 2.71748ZM10 14.4997C13.7125 14.4997 17.625 16.411 17.625 17.2488V18.6889H2.375V17.2488C2.375 16.411 6.2875 14.4997 10 14.4997ZM10 0.230133C7.2375 0.230133 5 2.57348 5 5.46665C5 8.35983 7.2375 10.7032 10 10.7032C12.7625 10.7032 15 8.35983 15 5.46665C15 2.57348 12.7625 0.230133 10 0.230133ZM10 12.0123C6.6625 12.0123 0 13.7665 0 17.2488V21.1762H20V17.2488C20 13.7665 13.3375 12.0123 10 12.0123Z" fill="black" />
                </svg>
                <button className="font-semibold ml-4 font-martel">Sign Up</button>
            </div>
        </nav>
    </div>
}