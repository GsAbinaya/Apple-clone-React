import { useState } from 'react';
import appleLogo from "../assets/appletvlogo.png"; // ✅ Your local logo
import {
    MagnifyingGlassIcon, ShoppingBagIcon  } from "@heroicons/react/24/outline";

    
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const navItems = [
"Store", "Mac", "iPad", "iPhone", "Watch",
"AirPods", "TV & Home", "Entertainment", "Accessories", "Support"
];

return (
<nav className="bg-black text-white px-6 py-4 fixed w-full top-0 z-50">
<div className="max-w-[1200px] mx-auto flex items-center justify-between">


{/* Apple Logo + Brand Name */}
<div className="flex items-center gap-2">
<img src={appleLogo} alt="Apple Logo" className="h-6 w-6" />
<span className="text-2xl font-semibold">AppleClone</span>
</div>

{/* Desktop Menu */}
<ul className="hidden md:flex space-x-8 text-sm">
{navItems.map((item) => (
<li key={item}>
<a href="#" className="hover:underline">{item}</a>
</li>
))}
</ul>

<div className="hidden md:flex items-center gap-6">
<MagnifyingGlassIcon className="h-5 w-5 text-white cursor-pointer" />
<ShoppingBagIcon className="h-5 w-5 text-white cursor-pointer" />
</div>


{/* Hamburger Button (Mobile) */}
<button
className="md:hidden flex items-center"
onClick={() => setIsOpen(!isOpen)}
aria-label="Toggle menu"
>
<svg
className="w-6 h-6 fill-white"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
>
{isOpen ? (
<path
fillRule="evenodd"
clipRule="evenodd"
d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.3A1 1 0 105.7 5.71L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z"
/>
) : (
<path d="M4 6h16M4 12h16M4 18h16" />
)}
</svg>
</button>
</div>

{/* Mobile Menu */}
{isOpen && (
<ul className="md:hidden bg-black text-white px-6 py-4 space-y-4">
{navItems.map((item) => (
<li key={item}>
<a href="#" className="block hover:underline">{item}</a>
</li>
))}
</ul>
)}
</nav>
);
};

export default Navbar;
