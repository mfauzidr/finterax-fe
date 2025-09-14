const Footer = () => {
  return (
    <footer className="bg-gray-lavender text-slate-100 text-shadow py-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">FinteraX</h2>
          <p className="mt-2 text-sm">
            Your gateway to seamless financial solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@finterax.com</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        © 2025 FinteraX. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
