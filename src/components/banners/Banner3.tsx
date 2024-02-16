export default function Banner3() {
  return (
    <div className="lg:Container lg:mx-auto grid lg:flex h-auto gap-12">
      <div className="flex-1 flex justify-center items-center">
        <div className="grid text-center lg:text-start">
          <span className="text-4xl lg:text-5xl font-bold lg:font-black">
            Watch everywhere
          </span>
          <span className="text-lg lg:text-2xl font-normal mt-6">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </span>
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center h-auto">
        <img
          src="/device-pile-in-removebg-preview.png"
          alt=""
          className="z-10 scale-105 xl:scale-125"
        />
        <div className="absolute flex justify-center items-center">
          <video
            loop
            autoPlay
            muted
            className="w-full scale-[.6] -mt-20 md:scale-[.7] md:-mt-36 lg:scale-[.6] xl:scale-[.9] xl:-mt-48 xl:-ms-2"
          >
            <source src="/video-devices-in.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
