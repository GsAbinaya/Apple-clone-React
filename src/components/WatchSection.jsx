import watchImage from '../assets/watch.jpg'; // Add your Watch image here

const WatchSection = () => {
return (
<section className=" py-12 px-4 md:py-20 md:px-8 lg:px-16
w-full bg-gray-100 text-center  text-black">
<h1 className="text-4xl  text-blue-700 md:text-5xl font-semibold">Apple Watch</h1>
<p className="mt-3 text-blue-500 text-xl">A healthy leap ahead.</p>
<div className="mt-6 flex justify-center gap-8">
<a href="#" className="text-blue-600 hover:underline">Learn more</a>
<a href="#" className="text-blue-600 hover:underline">Buy</a>
</div>
<div className="mt-10 max-w-[1200px] mx-auto">
<img
src={watchImage}
alt="Apple Watch"
className="w-full h-auto object-cover"
/>
</div>
</section>
);
};

export default WatchSection;