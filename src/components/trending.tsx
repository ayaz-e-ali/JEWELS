import Button from "./button";

export default function Trending({ }) {
    return <section className="bg-primary grid lg:grid-cols-2 max-w-[2000px] mx-auto">
        <div className="flex flex-col font-light gap-10 justify-center lg:pl-16 md:pr-10 lg:pr-20 xl:pr-28 2xl:pr-36 2xl:mx-auto text-center lg:text-left">
            <h4 className="text-header2 font-bastiken">Most Trending In SS '23</h4>
            <p className="font-martel">
                Based on current fashion trends and new emerging styles, it is expected that bold and oversized earrings will continue to be popular. Additionally, sustainable fashion, eco-friendly materials and ethical production methods are becoming more important to consumers, so earrings made from recycled or sustainable materials also gain popularity.
            </p>
            <Button Class="self-start w-1/3">Shop Now</Button>
        </div>
        <img className="w-full lg:rounded-ss-[20rem]" src="top-view-golden-earrings-arrangement 1.png" alt="" />
    </section>
}