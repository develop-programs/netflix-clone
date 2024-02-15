export default function Banner1() {
  return (
    <div className="lg:Container lg:mx-auto grid lg:flex h-auto gap-6">
      <div className="flex-1 flex justify-center items-center">
        <div className="grid text-center lg:text-start">
          <span className="text-4xl lg:text-5xl font-bold lg:font-black">
            Enjoy on your TV
          </span>
          <span className="text-lg lg:text-2xl font-normal mt-6">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center h-auto">
        <img src="/tv-removebg-preview.png" alt="" className="z-10 scale-125" />
        <div className="absolute flex justify-center items-center">
          <video
            loop
            autoPlay
            muted
            className="w-full scale-[.9] -mt-2 md:scale-[1.08] md:-mt-4 lg:scale-[.9] xl:scale-[1.1] xl:-mt-4 xl:-ms-2"
          >
            <source src="./video-tv-in-0819.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
