export default function BestSellers({ }) {
    return <section className="container space-y-20 my-20 text-dark">
        <h4 className="text-header2 font-bastiken text-center">Best Sellers</h4>
        <ul className="grid grid-cols-1 gap-10 lg:grid-cols-3 px-4 lg:px-0">
            <Card image_url="Rectangle 18.png" price="60.00" name="High Angle Golden Earrings" />
            <Card image_url="Rectangle 19.png" price="47.00" name="Round Gold Earrings" />
            <Card Class="lg:col-start-2" image_url="Rectangle 20.png" price="35.00" name="Thin Gold Chain" />
            <Card image_url="Rectangle 21.png" price="52.00" name="Shiny Golden Chain" />
            <Card image_url="Rectangle 23.png" price="58.00" name="Eastern Gold Bracelet" />
            <Card image_url="Rectangle 22.png" price="77.00" name="Gold Bracelet" />
        </ul>
    </section>
}

interface CardProps {
    image_url: string,
    name: string,
    price: string,
    Class?: string
}
function Card({ image_url, name, price, Class }: CardProps) {
    return <div className={`font-martel space-y-2 font-light relative w-full ${Class}`}>
        <img loading="lazy" className="w-full" src={image_url} alt={image_url} />
        <p>{name}</p>
        <p>${price} USD</p>
    </div>
}