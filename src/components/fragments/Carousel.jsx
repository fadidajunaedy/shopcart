import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
    return (
        <div className="mx-auto max-w-screen py-6 px-4 lg:px-8">
            <div className="container mx-auto">
                <Carousel
                    className="rounded-xl overflow-hidden shadow-md h-72"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src="./product.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="./product.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="./product.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="./product.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    {/* <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    /> */}
                </Carousel>
            </div>
        </div>
    );
}