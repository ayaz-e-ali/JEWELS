import Button from "./button";
import Nav from "./nav";

export default function Hero() {
    return <div className="bg-primary text-dark px-6 lg:px-0 transition-colors">
        <Nav />
        <div className="grid grid-cols-1 lg:grid-cols-12 md:pl-10 lg:pl-20 xl:pl-28 2xl:pl-36 max-w-[2000px] 2xl:mx-auto">
            <div className="col-span-5 space-y-10 flex flex-col justify-center">
                <h2 className="text-header1 font-bastiken whitespace-nowrap">
                    Your One Stop Destination<br />for Unique and Exquisite<br />Jewelry Pieces
                </h2>
                <p className="text-md font-martel">
                    Here, we offer various types of jewelry, including necklaces, bracelets, earrings, and rings. From classic designs to modern styles, we have something for everyone.
                </p>
                <Button Class="max-w-fit">Shop The Collection</Button>
            </div>
            <div className="col-span-7 py-10">
                <img className="lg:rounded-s-full w-full" src="pink-cheeked-redhead-woman-plays-with-her-pearl-necklace-lady-classic-white-blouse-looking-down-camera 1.webp" alt="pink cheeked redhead woman plays with her pearl necklace lady classic white blouse looking down" />
            </div>
        </div>
    </div>
}