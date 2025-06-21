import Navbar from "./components/Navbar";
import Banner from "./components/StudentBanner";
import Hero from "./components/Hero";
import MacbookAir from "./components/MacbookSection";
import iPad from "./components/IpadSection";
import Watch from "./components/WatchSection";
import Accessories from "./components/AccessoriesSection";
import ProductGrid from "./components/ProductGrid";
import AppleTVCarousel from "./components/AppleTvCarousel";
import Footer from "./components/Footer";

function App() {
return (
<div className="bg-white">
{/* Navbar stays full width */}
<Navbar />

{/* Banner */}
<div className="max-w-[1200px] mx-auto px-4 mt-20">
<Banner />
</div>

{/* Hero Section */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<Hero />
</div>

{/* MacBook Air */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<MacbookAir />
</div>

{/* iPad Section */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<iPad />
</div>

{/* Watch */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<Watch />
</div>

{/* Accessories */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<Accessories />
</div>

{/* Product Grid */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<ProductGrid />
</div>

{/* Apple TV+ Carousel */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<AppleTVCarousel />
</div>

{/* Footer */}
<div className="max-w-[1200px] mx-auto px-4 py-10">
<Footer />
</div>
</div>
);
}

export default App;
