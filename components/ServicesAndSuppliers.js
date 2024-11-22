import React from "react";

const ServicesAndSuppliers = () => {
  return (
    <div className="bg-gray-100 hidden md:block py-8">
      {/* Our Extra Services Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Our extra services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Service Cards */}
          {[
            { title: "Source from Industry Hubs", icon: "search", image: "/back.jpg" },
            { title: "Customize Your Products", icon: "edit", image: "/background.jpg" },
            { title: "Fast, reliable shipping by ocean or air", icon: "plane", image: "/a.jpg" },
            { title: "Product monitoring and inspection", icon: "info", image: "/next.svg" },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md p-4 flex items-center">
              <div
                className="w-16 h-16 bg-cover bg-center rounded-md mr-4"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <span className={`material-icons text-blue-500`}>{service.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers by Region Section */}
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-xl font-bold mb-4 py-1">Suppliers by region</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Region Cards */}
          {[
            { country: "Arabic Emirates", flag: "/flags/AE.png", link: "shopname.ae" },
            { country: "Australia", flag: "/flags/AU.png", link: "shopname.au" },
            { country: "United States", flag: "/flags/US.png", link: "shopname.us" },
            { country: "Italy", flag: "/flags/IT.png", link: "shopname.it" },
            { country: "Denmark", flag: "/flags/DK.png", link: "shopname.dk" },
            { country: "GERMANY", flag: "/flags/DE.png", link: "shopname.de" },
            { country: "China", flag: "/flags/CN.png", link: "shopname.cn" },
            { country: "Great Britain", flag: "/flags/GB.png", link: "shopname.co.uk" },
          ].map((region, index) => (
            <div key={index} className="flex cursor-pointer hover:translate-y-[-10px] transition-all duration-500 items-center">
              <img
                src={region.flag}
                alt={region.country}
                className="w-12 h-7  mr-2"
              />
              <div>
                <p className="font-medium ">{region.country}</p>
                <a
                  href={`https://${region.link}`}
                  target="_blank"
                  className="text-gray-500 text-sm"
                  rel="noopener noreferrer"
                >
                  {region.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAndSuppliers;
