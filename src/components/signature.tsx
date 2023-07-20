import Button from "./button";

export default function Signature({ }) {
    return <section className="flex flex-col container space-y-20 my-20 text-dark">
        <div className="space-y-6">
            <h4 className="text-header2 font-bastiken text-center">Signature Earrings</h4>
            <p className="text-center w-2/3 mx-auto font-martel">Our unique and eye-catching earrings are exclusively made in-house. Each pair is carefully designed with attention to detail, resulting in a signature style that is both modern and timeless.</p>
        </div>
        <ul className="grid grid-cols-1 gap-10 lg:grid-cols-4 px-4 lg:px-0">
            <img loading="lazy" className="w-full" src="Rectangle 27.png" />
            <img loading="lazy" className="w-full" src="Rectangle 28.png" />
            <img loading="lazy" className="w-full" src="Rectangle 29.png" />
            <img loading="lazy" className="w-full" src="Rectangle 30.png" />
        </ul>
        <Button Class="rounded-s-full rounded-e-none lg:self-end w-52 self-center">View All</Button>
    </section>
}