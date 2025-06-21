import bannerImage from '../assets/Bannerimg.jpg'; // Your background image

const StudentBanner = () => {
return (
<section
className="mt-20 bg-[#f5f5f7] text-center px-4 py-10 text-black">


<h2 className="text-3xl text-blue-700 font-semibold mb-2">
Save on Mac or iPad.
</h2>
<p className="text-lg mb-4 text-blue-500">
Get  up to ₹20,000 off on eligible products with Apple Education Pricing.
</p>
<a href="#" className="text-blue-600 font-medium hover:underline">
    Shop now &gt;
</a>

</section>
);
};

export default StudentBanner;