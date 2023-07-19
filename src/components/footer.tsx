import Button from "./button";

export default function Footer({ }) {
    return <footer className="bg-primary">
        <div className="font-martel grid lg:grid-cols-10 container  py-10">
            <div className="text-center lg:text-left lg:col-span-4 mr-20 space-y-4">
                <h5 className="text-2xl">Join Our Email List</h5>
                <p className="text-[#6A6A6A]">Subscribing to Jewels allows you to stay updated on the latest trends and designs in the jewelry industry.</p>
                <div className="flex relative">
                    <input type="email" className="w-full px-8 py-3 rounded-full placeholder:text-[#6A6A6A] outline-none" placeholder="Email" />
                    <Button Class="absolute right-0 rounded-s-full">Send</Button>
                </div>
                <div className="flex gap-8 child:w-12 child:border-secondary child:border child:p-2 child:rounded-full pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M11.46875 5C7.917969 5 5 7.914063 5 11.46875L5 20.53125C5 24.082031 7.914063 27 11.46875 27L20.53125 27C24.082031 27 27 24.085938 27 20.53125L27 11.46875C27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7L20.53125 7C23.003906 7 25 8.996094 25 11.46875L25 20.53125C25 23.003906 23.003906 25 20.53125 25L11.46875 25C8.996094 25 7 23.003906 7 20.53125L7 11.46875C7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875C21.402344 9.1875 21 9.589844 21 10.09375C21 10.597656 21.402344 11 21.90625 11C22.410156 11 22.8125 10.597656 22.8125 10.09375C22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10C12.699219 10 10 12.699219 10 16C10 19.300781 12.699219 22 16 22C19.300781 22 22 19.300781 22 16C22 12.699219 19.300781 10 16 10 Z M 16 12C18.222656 12 20 13.777344 20 16C20 18.222656 18.222656 20 16 20C13.777344 20 12 18.222656 12 16C12 13.777344 13.777344 12 16 12Z" fill="#B07B54" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M16.09375 4C11.01675 4 6 7.3833281 6 12.861328C6 16.344328 7.9584844 18.324219 9.1464844 18.324219C9.6364844 18.324219 9.9199219 16.958266 9.9199219 16.572266C9.9199219 16.112266 8.7460938 15.131797 8.7460938 13.216797C8.7460938 9.2387969 11.774359 6.4199219 15.693359 6.4199219C19.063359 6.4199219 21.556641 8.3335625 21.556641 11.851562C21.556641 14.478563 20.501891 19.40625 17.087891 19.40625C15.855891 19.40625 14.802734 18.516234 14.802734 17.240234C14.802734 15.370234 16 13.558906 16 11.628906C16 8.3529063 11.462891 8.94725 11.462891 12.90625C11.462891 13.73725 11.5665 14.657063 11.9375 15.414062C11.2555 18.353063 10 23.037406 10 26.066406C10 27.001406 10.133656 27.921422 10.222656 28.857422C10.390656 29.045422 10.307453 29.025641 10.564453 28.931641C13.058453 25.517641 12.827078 24.544172 13.955078 20.076172C14.564078 21.234172 16.137766 21.857422 17.384766 21.857422C22.639766 21.857422 25 16.736141 25 12.119141C25 7.2061406 20.75475 4 16.09375 4 z" fill="#B07B54" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" fill="#B07B54" />
                    </svg>
                </div>
            </div>

            <div className="text-center lg:text-left lg:col-span-2">
                <h6 className="text-lg font-bold text-secondary">Shop</h6>
                <ul>
                    <li>Collection</li>
                    <li>Rings</li>
                    <li>Bracelets</li>
                    <li>Chains</li>
                    <li>Wedding Rings</li>
                </ul>
            </div>

            <div className="text-center lg:text-left lg:col-span-2">
                <h6 className="text-lg font-bold text-secondary">About</h6>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>FAQ's</li>
                </ul>
            </div>

            <div className="text-center lg:text-left lg:col-span-2">
                <h6 className="text-lg font-bold text-secondary">Our Contacts</h6>
                <ul>
                    <li>Shop_Jewels@gmail.com</li>
                    <li>+123456798</li>
                </ul>
            </div>

        </div>
        <div className="border-t-2 border-[#B2A4A4] text-center font-martel py-2">
            <p className="">2023 JEWELS. All Rights Reserved.</p>
            <p className="font-extralight text-[#6A6A6A]">created by <a className="font-bold" href="https://muhammed-ali.vercel.app/">Muhammed alali</a></p>
        </div>
    </footer>
}