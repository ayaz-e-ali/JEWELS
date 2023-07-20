import Button from "./button"

export default function New({ }) {
    return <section className="container space-y-20 my-20 ">
        <h2 className="text-header2 font-bastiken text-center text-dark">New Collection</h2>
        <ul className="flex flex-col lg:flex-row items-center gap-10 px-4 lg:px-0">
            <Card image_url="display-shiny-luxurious-golden-chain 1.png" content="Necklaces" />
            <Card image_url="high-angle-aesthetic-golden-earrings-arrangement 1.png" content="Earring" />
            <Card image_url="wedding-rings-wedding-celebrations-accessories-decorations 1.png" content="Wedding Rings" />
        </ul>
    </section>
}


interface Props {
    image_url: string,
    content: string
}
function Card({ image_url, content }: Props) {
    return <li className="relative w-full">
        <img loading="lazy" className="w-full" src={image_url} alt={image_url} />
        <Button Class="absolute bottom-4 w-4/5">{content}</Button>
    </li>
}