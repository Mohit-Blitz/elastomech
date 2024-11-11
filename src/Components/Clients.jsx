import { clients } from "../Data/Clients";

const Clients = () => {
  return (
    <>
      <div className="bg-[#e8eaee] w-full p-[50px]">
        <div className="mx-auto w-max mb-5 text-4xl font-bold font-playfair">
          Our Notable Clients
        </div>
        <div className="flex items-center justify-center bg-white w-max mx-auto rounded-lg">
          {clients.map((client) => (
            <>
              <div className="mx-5 cursor-pointer">
                <img src={client.img} className="h-[150px]" />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
