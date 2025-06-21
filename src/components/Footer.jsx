


const Footer = () => {
return (
<footer className="bg-gray-900 text-gray-400 py-12 px-6">
<div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-white font-semibold mb-4">Shop and Learn</h3>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Mac</a></li>
<li><a href="#" className="hover:underline">iPad</a></li>
<li><a href="#" className="hover:underline">iPhone</a></li>
<li><a href="#" className="hover:underline">Watch</a></li>
<li><a href="#" className="hover:underline">AirPods</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Services</h3>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Apple Music</a></li>
<li><a href="#" className="hover:underline">Apple TV+</a></li>
<li><a href="#" className="hover:underline">iCloud</a></li>
<li><a href="#" className="hover:underline">AppleCare+</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Account</h3>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Manage Your Apple ID</a></li>
<li><a href="#" className="hover:underline">Apple Store Account</a></li>
<li><a href="#" className="hover:underline">iCloud.com</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">About Apple</h3>
<ul className="space-y-2 text-sm">
<li><a href="#" className="hover:underline">Newsroom</a></li>
<li><a href="#" className="hover:underline">Apple Leadership</a></li>
<li><a href="#" className="hover:underline">Careers</a></li>
<li><a href="#" className="hover:underline">Investors</a></li>
</ul>
</div>
</div>

<div className="max-w-[1200px] mx-auto mt-12 border-t border-gray-700 pt-6 text-center text-sm">
<p>© {new Date().getFullYear()} Apple Clone. All rights reserved.</p>
</div>
</footer>
);
};

export default Footer;