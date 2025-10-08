export default function Instagram({ }) {
    return <section className="flex flex-col container space-y-20 my-20 text-dark">
        <div className="space-y-6">
            <h4 className="text-header2 font-bastiken text-center">Follow Us On Instagram</h4>
            <p className="text-center w-2/3 mx-auto font-martel">@SHOPJEWELSBOUTIQUE #JEWELS</p>
        </div>
        <ul className="grid grid-cols-1 gap-10 lg:grid-cols-4 px-4 lg:px-0">
            <img loading="lazy" className="w-full" src="Rectangle 14 (1).webp" />
            <img loading="lazy" className="w-full" src="Rectangle 15.webp" />
            <img loading="lazy" className="w-full" src="Rectangle 16.webp" />
            <img loading="lazy" className="w-full" src="Rectangle 17.webp" />
            <img loading="lazy" className="w-full" src="Rectangle 14.webp" />
            <img loading="lazy" className="w-full" src="Rectangle 16 (1).webp" />
            <img loading="lazy" className="w-full" src="Rectangle 15 (1).webp" />
            <img loading="lazy" className="w-full" src="Rectangle 17 (1).webp" />
        </ul>
    </section>
}