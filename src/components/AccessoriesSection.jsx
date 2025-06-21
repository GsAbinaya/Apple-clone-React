import accessoriesImage from '../assets/accessories.jpg'; // Your accessories image

const AccessoriesSection = () => {
return (
<section className="py-12 px-4 md:py-20 md:px-8 lg:px-16
w-full bg-white text-center  text-black">
<h1 className="text-4xl text-blue-700 md:text-5xl font-semibold">Accessories</h1>
<p className="mt-3  text-blue-600 text-xl">Love your tech even more.</p>
<div className="mt-6 flex justify-center gap-8">
<a href="#" className="text-blue-600 hover:underline">Shop now</a>
</div>
<div className="mt-10 max-w-[1200px] mx-auto">
<img
src={accessoriesImage}
alt="Accessories"
className="w-full h-auto object-cover"
/>
</div>
</section>
);
};

export default AccessoriesSection;
