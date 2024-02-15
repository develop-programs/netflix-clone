export default function Banner2() {
  return (
    <div className="lg:Container lg:mx-auto flex flex-col-reverse lg:flex-row h-auto gap-12">
      <div className="relative flex-1 flex justify-center items-center h-auto">
        <img src="/mobile-0819.jpg" alt="" className="scale-105" />
        <div className="absolute bottom-4 h-20 md:h-28 w-full grid place-items-center md:px-36">
          <div className="bg-black border-2 border-gray-800 rounded-xl w-full h-auto flex p-2">
            <div>
              <img src="/boxshot.png" alt="" className="w-12 md:w-16" />
            </div>
            <div className="flex-1 flex flex-col justify-center ps-6">
              <p className="text-white text-sm md:text-base font-medium">
                Stranger Things
              </p>
              <p className="text-blue-600 text-xs md:text-sm font-normal">
                Downloading...
              </p>
            </div>
            <div className="flex justify-center items-center me-2 md:me-6">
              <img src="/download-icon.gif" alt="" className="w-12" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="grid text-center lg:text-start">
          <span className="text-4xl lg:text-5xl font-bold lg:font-black">
            Download your shows to watch offline
          </span>
          <span className="text-lg lg:text-2xl font-normal mt-6">
            Save your favourites easily and always have something to watch.
          </span>
        </div>
      </div>
    </div>
  );
}
