import { useState } from "react";
import "./App.css";
import TouristPlaces from "./Components/TouristPlaces";
const places = [
  {
    id: 1,
    name: "Taj Mahal",
    description:
      "Iconic white marble mausoleum and one of the seven wonders of the world, located in Agra.",
    imgUrl:
      "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    location: "Agra, Uttar Pradesh",
    isUNESCO: true,
    bestVisitSeason: [
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
    ],
    entryFee: 50, // in INR
  },
  {
    id: 2,
    name: "Hampi",
    description:
      "Ancient city ruins with stunning boulders, temples, and UNESCO World Heritage status in Karnataka.",
    imgUrl:
      "https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtcGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    location: "Karnataka",
    isUNESCO: true,
    bestVisitSeason: ["November", "December", "January", "February"],
    entryFee: 40,
  },
  {
    id: 3,
    name: "Goa Beaches",
    description:
      "Golden sandy beaches famous for vibrant nightlife and water sports along the Arabian Sea.",
    imgUrl:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    location: "Goa",
    isUNESCO: false,
    bestVisitSeason: ["November", "December", "January", "February"],
    entryFee: 0,
  },
  {
    id: 4,
    name: "Golden Temple",
    description:
      "Holy Sikh shrine covered with gold and surrounded by a sacred pool in Amritsar.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    location: "Amritsar, Punjab",
    isUNESCO: false,
    bestVisitSeason: ["January", "February", "March", "April", "May"],
    entryFee: 0,
  },
  {
    id: 5,
    name: "Manali",
    description:
      "Hill station known for breathtaking valleys, snowcapped mountains, and adventure sports.",
    imgUrl:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    location: "Himachal Pradesh",
    isUNESCO: false,
    bestVisitSeason: [
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December",
    ],
    entryFee: 0,
  },
  {
    id: 6,
    name: "Konark Sun Temple",
    description:
      "Magnificent 13th-century temple shaped like a chariot, a UNESCO World Heritage site.",
    imgUrl:
      "https://images.unsplash.com/photo-1749111728355-7a8824010fbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtvbmFyayUyMHRlbXBsZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    location: "Konark, Odisha",
    isUNESCO: true,
    bestVisitSeason: ["June", "July", "August", "September"],
    entryFee: 30,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-wrap max-w-[1000px] mx-auto">
        {places.map((place) => {
          return (
            <TouristPlaces
              src={place.imgUrl}
              placeName={place.name}
              location={place.location}
              desc={place.description}
              visitingSeason={place.bestVisitSeason}
              isUNESCO={place.isUNESCO}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
