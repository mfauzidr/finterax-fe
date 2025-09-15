import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav className="flex bg-gray-purple h-16 w-full text-white items-center px-16">
      <div className="flex items-center justify-between w-full">
        <div className="flex">FinteraX</div>
        <div className="flex">
          <ul className="flex items-center gap-6 bg-light-purple text-gray-purple p-2 rounded-full">
            <li className="mx-2 px-3 hover:text-purple-500 hover:bg-purple-200 hover::bg-opacity-10 rounded-full">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 px-3 hover:text-purple-500 hover:bg-purple-200 hover::bg-opacity-10 rounded-full">
              <Link to="/">About Us</Link>
            </li>
            <li className="mx-2 px-3 hover:text-purple-500 hover:bg-purple-200 hover::bg-opacity-10 rounded-full">
              <Link to="/">Contact</Link>
            </li>
            <li className="mx-2 px-3 hover:text-purple-500 hover:bg-purple-200 hover::bg-opacity-10 rounded-full">
              <Link to="/">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
