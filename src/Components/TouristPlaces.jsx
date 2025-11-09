function TouristPlaces({
  src,
  placeName,
  location,
  desc,
  visitingSeason,
  isUNESCO,
}) {
  return (
    <>
      <div className="mx-auto">
        <div className="border-2 rounded-lg border-neutral-300 px-2 pt-2 pb-5 w-[400px] m-6">
          <div className="relative">
            {/* <div
              className="absolute hidden
            {
            let currentSeason = March;
            } 
             py-1 px-3 top-2 left-2 text-[14px] font-medium bg-amber-100 rounded-full text-amber-600"
            >
              visiting Season
            </div> */}
            <div
              className="absolute hidden
        
             py-1 px-3 top-2 left-2 text-[14px] font-medium bg-indigo-100 rounded-full text-indigo-600"
            >
              UNESCO
            </div>

            <img className="rounded-lg" src={src} alt={placeName} />
            <div className="absolute top-0 right-2 my-2 p-1 bg-green-100 w-15 rounded-full text-green-600 text-center">
              <p className="font-medium text-[14px]">₹50</p>
            </div>
          </div>

          <div>
            <h1 className="text-[20px] font-semibold my-3">{placeName}</h1>
            <p className="my-2 font-medium">{location}</p>
            <p className="">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TouristPlaces;
