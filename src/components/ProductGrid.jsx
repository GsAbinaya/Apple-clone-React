import React from "react";
import macbookImg from "../assets/MacbookAir.jpg";
import ipadImg from "../assets/ipad1.jpg";
import watchImg from "../assets/airpod.jpg";
import iphoneImg from "../assets/accessories1.jpg";
import AppleTVCarousel from "./AppleTvCarousel";

const products = [
{
name: "iPad Air",
description: "Now supercharged by the M3 chip",
buttons: ["Learn more", "Buy"],
image: ipadImg,
},
{
name: "MacBook Pro",
description: "A work of smart",
buttons: ["Learn more", "Buy"],
image: macbookImg,
},
{
name: "iPhone",
description: "Meet the iPhone 16 family",
buttons: ["Shop iPhone"],
image: iphoneImg,
},
{
name: "AirPods 4",
description: "Iconic now supersonic. Active Noise Cancellation",
buttons: ["Learn more", "Buy"],
image: watchImg,
},
];
const ProductGrid = () => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 px-6">

      {products.map((product, index) => (

        <div key={index} className="relative bg-black text-white rounded-lg overflow-hidden">

          {/* Background Image */}

          <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />



          {/* Overlay Content */}

          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">

            <h2 className="text-2xl text-blue-700 md:text-3xl font-bold">{product.name}</h2>

            <p className="mt-2 text-blue-600 text-sm md:text-base">{product.description}</p>

            <div className="mt-4 flex gap-4 flex-wrap justify-center">

              {product.buttons.map((btn, i) => (

                <button

                  key={i}

                  className="bg-white text-black px-4 py-2 text-sm rounded-2xl hover:bg-gray-200"

                >

                  {btn}

                </button>

              ))}

            </div>

          </div>



          {/* Bottom Colorful Tag — Except AirPods */}

          {product.name !== "AirPods 4" && (

            <div className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white text-center py-2 text-sm font-medium">

              Built for Apple Intelligence

            </div>

          )}

        </div>

      ))}

    </div>

  );

};



export default ProductGrid;


