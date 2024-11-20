import React from "react";

const Footer = () => {
  // Data for Categories
  const categories = [
    { title: "Categories", links: ["Blogs"] },
    { title: "Shipping", links: ["Contact us"] },
    { title: "Settings", links: ["My Orders"] },
  ];

  // Social Media Links
  const socialMedia = [
    { href: "#", label: "Facebook", icon: "fab fa-facebook" },
    { href: "#", label: "Twitter", icon: "fab fa-twitter" },
    { href: "#", label: "LinkedIn", icon: "fab fa-linkedin" },
    { href: "#", label: "Instagram", icon: "fab fa-instagram" },
    { href: "#", label: "YouTube", icon: "fab fa-youtube" },
  ];

  return (
    <footer className="bg-gray-200 text-gray-700">
      {/* Newsletter Section */}
      <div className="text-center py-8 px-4">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
        <p className="text-md mb-4">
          Get daily updates on offers from suppliers worldwide.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-96 border rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className=" py-6 bg-gray-100">
        <div className="container  mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.href}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label={media.label}
                >
                  <i className={`${media.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Categories */}
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{category.title}</h3>
              <ul>
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Google Play Button */}
          <div>
            <h3 className="font-semibold mb-2">Download Our App</h3>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center">
              <i className="fab fa-google-play mr-2"></i>
              Google Play
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-300 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2023 Ecommerce. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="US Flag"
              className="w-5 h-5 mr-2"
            />
            <select className="bg-transparent focus:outline-none">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
