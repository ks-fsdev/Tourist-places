import { useState } from "react";
import "./App.css";
import TouristPlaces from "./Components/TouristPlaces";
const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000,
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1597167231350-d057a45dc868?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500e",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000,
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000,
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-wrap max-w-[1000px] mx-auto">
        {touristPlaces.map((place) => {
          return (
            <TouristPlaces
              src={place.img}
              name={place.placeName}
              desc={place.desc}
              price={place.price}
              rating={place.ratings}
              weather={place.whenToVisit}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
