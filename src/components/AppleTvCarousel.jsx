import React, { useState, useEffect } from "react";
import dhoniImg from "../assets/dhoni.jpg";
import rajiniImg from "../assets/rajini.jpg";
import vijayImg from "../assets/sethu.jpg";
import heistImg from "../assets/moneyheist.jpg";
import sonicImg from "../assets/sonic.jpg";
import appleTvLogo from "../assets/appletvlogo.png"; // ensure this is correct

const celebs = [
{
name: "MS Dhoni",
image: dhoniImg,
mainText: "Watch IPL",
},
{
name: "Rajinikanth",
image: rajiniImg,
mainText: "Watch Thalapathy",
},

{
name: "Vijay Sethupathi",
image: vijayImg,
mainText: "Watch 96",
},
{
name: "Money Heist",
image: heistImg,
mainText: "Watch ur favourite series",
},
{
name: "Sonic",
image: sonicImg,
mainText: "Watch ur favourite cartoon movies",
},
];

const AppleTVCarousel = () => {
const [index, setIndex] = useState(0);

useEffect(() => {
const timer = setInterval(() => {
setIndex((prev) => (prev + 1) % celebs.length);
}, 3000);
return () => clearInterval(timer);
}, []);

const current = celebs[index];

return (
<section className="w-full py-10 px-4 flex justify-center bg-black">
<div className="w-full max-w-3xl bg-gray-900 rounded-lg overflow-hidden shadow-lg relative">
{/* Image */}
<img
src={current.image}
alt={current.name}
className="w-full h-[400px] object-cover"
/>

{/* Main Text */}
<h2 className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-blue-600 text-3xl font-bold text-center">
{current.mainText}
</h2>

{/* Apple TV+ logo and label */}
<div className="absolute bottom-4 left-4 flex items-center gap-2 bg-indigo-600 bg-opacity-80 px-3 py-1 rounded-md">
<img src={appleTvLogo} alt="Apple TV+" className="h-6 w-auto" />
<span className=" text-blue-700 font-medium">TV+</span>
</div>

{/* Stream Now Button */}
<button className="absolute bottom-4 right-4 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-300 transition">
Stream Now
</button>
</div>
</section>
);
};

export default AppleTVCarousel;