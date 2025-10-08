import Button from "./button";

export default function AboutUs({ }) {
    return <section className="bg-primary grid lg:grid-cols-2 max-w-[2000px] mx-auto text-dark">
        <img className="w-full lg:rounded-se-[20rem]" src="Rectangle 25.webp" alt="models wearing jewleries" />
        <div className="flex flex-col font-light gap-20 justify-center lg:pl-16 md:pr-10 lg:pr-20 xl:pr-28 2xl:pr-36 2xl:mx-auto text-center lg:text-left">
            <h4 className="text-header2 font-bastiken">About Us</h4>
            <p className="font-martel font-light">
                We're a group of five friends passionate about making unique and beautiful jewelry. Whether it's crafting intricate beaded necklaces or designing elegant bracelets, our creativity and skills shine through in every piece we create. We value collaboration and work together to come up with new ideas and techniques that enrich our craft. From sourcing the highest quality materials to putting the finishing touches on each piece, we take pride in every step of the process. At the heart of our business is a genuine love for jewelry-making, and we can't wait to share our passion with you.
            </p>
            <Button Class="rounded-s-full rounded-e-none self-end w-2/5">Read More</Button>
        </div>
    </section>
}