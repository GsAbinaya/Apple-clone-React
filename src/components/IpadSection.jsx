


import ipadImage from '../assets/ipad.jpg'; // Add your iPad image here

const IpadSection = () => {
return (
<section className="py-12 px-4 md:py-20 md:px-8 lg:px-16
w-full bg-white text-center  text-black">
<h1 className="text-4xl md:text-5xl font-semibold">iPad</h1>
<p className="mt-3 text-xl">Lovable. Drawable. Magical.</p>
<div className="mt-6 flex justify-center gap-8">
<a href="#" className="text-blue-600 hover:underline">Learn more</a>
<a href="#" className="text-blue-600 hover:underline">Buy</a>
</div>
<div className="mt-10 max-w-[1200px] mx-auto">
<img
src={ipadImage}
alt="iPad"
className="w-full h-auto object-cover"
/>
</div>
</section>
);
};

export default IpadSection;
