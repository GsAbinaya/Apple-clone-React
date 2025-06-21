import heroImage from  '../assets/hero.jpg';

const Hero = () => {
return (
<section
className=" py-12 px-4 md:py-20 md:px-8 lg:px-16
relative w-full h-screen overflow-hidden">
<img 
src={heroImage}
alt="Hero"
className="absolute top-0 left-0 w-full  h-full object-cover"/>

<div className=" relative z-10 flex flex-col justify-center items-center  text-white h-full bg-black/40 px-4">
<h1 className="text-4xl  text-blue-700 md:text-8xl font-extrabold">Mac for Students</h1>

<div className="mt-6 flex gap-6">
<a href="#" className="text-blue-500  hover:underline">Learn more</a>

</div>
</div>
</section>
);
};
export default Hero;