import macImage from '../assets/macbook.jpg';

const MacbookSection = () => {
return (
<section className=" py-12 px-4 md:py-20 md:px-8 lg:px-16
w-full bg-white text-black text-center">
<h1 className="text-4xl text-blue-700 md:text-5xl font-semibold">MacBook Air</h1>
<p className="mt-3   text-blue-600 text-xl">Lean. Mean. M3 machine.</p>
<div className="mt-6 flex justify-center gap-8">
<a href="#" className="text-blue-600 hover:underline">Learn more</a>
<a href="#" className="text-blue-600 hover:underline">Buy</a>
</div>

{/* 🧪 This should now load 100% */}
<div className="mt-10 flex justify-center  p-4 ">
<img
src={macImage}
alt="MacBook Air"
className="w-full max-w-full md:max-w-[1200px] h-auto object-cover"
/>
</div>
</section>
);
};

export default MacbookSection;

