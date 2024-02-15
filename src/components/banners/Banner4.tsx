export default function Banner4() {
  return (
    <div className="lg:Container lg:mx-auto flex flex-col-reverse lg:flex-row h-auto gap-12">
      <div className="relative flex-1 flex justify-center items-center h-auto">
        <img
          src="/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png"
          alt=""
          className="z-10 "
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="grid text-center lg:text-start">
          <span className="text-4xl lg:text-5xl font-bold lg:font-black">
            Create profiles for kids
          </span>
          <span className="text-lg lg:text-2xl font-normal mt-6">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </span>
        </div>
      </div>
    </div>
  );
}
