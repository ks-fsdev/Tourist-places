function TouristPlaces({ src, name, desc, price, rating, weather }) {
  return (
    <>
      <div className="mx-auto">
        <div className="border-2 w-[400px] rounded-lg m-3 border-neutral-300 p-3 ">
          <div className="relative">
            <img
              src={src}
              className="rounded-lg h-60 w-full object-cover shadow-sm shadow-neutral-500"
              alt=""
            />

            <div className="absolute px-4 py-1 rounded-full border border-green-100 text-white font-semibold top-2 left-2 text-sm bg-green-700">
              {rating}
            </div>

            <div
              className={
                price < 15000
                  ? "absolute top-2 right-2 p-1 px-3 text-white font-semibold border border-amber-100 bg-amber-600 text-sm rounded-full"
                  : "hidden"
              }
            >
              Cheaper
            </div>
          </div>

          <div className="">
            <h1 className="text-xl font-medium my-3">{name}</h1>
            <p className="">{desc}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="px-3 my-4 py-2 w-45  bottom-20 rounded-full font-semibold text-green-800 bg-green-100/80">
              <p className="text-center">₹ {price} per person</p>
            </div>
            <div>
              {weather == "Summer" ? (
                <div className="text-yellow-700 font-medium bg-amber-100 px-3 py-2 flex gap-2 items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-brightness-high"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                  <p>Summer</p>
                </div>
              ) : (
                <div className="text-blue-700 font-medium bg-blue-100 px-3 py-2 flex gap-2 items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-snow3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" />
                    <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5m2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2z" />
                  </svg>
                  <p>Winter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TouristPlaces;
