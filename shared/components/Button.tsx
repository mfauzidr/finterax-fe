import { Link } from "react-router-dom";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  buttonName: string;
  size?: string;
  link?: string;
  onClick?: () => void;
}

export const Button = ({
  type,
  buttonName,
  size,
  link = "#",
  onClick,
}: ButtonProps & { onClick?: () => void }) => {
  return (
    <Link
      to={link}
      onClick={() => {
        onClick?.();
      }}
      className={`flex-1 ${size} py-1 lg:py-2 bg-gray-purple rounded font-semibold text-light-purple text-center text-xs md:text-base`}
    >
      <button type={type}>{buttonName}</button>
    </Link>
  );
};
