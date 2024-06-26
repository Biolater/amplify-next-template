import { FC } from "react";

const SearchIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="29"
      height="29"
      className={`w-full h-full ${className}`}
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7261 18.239H19.4162L18.952 17.7913C20.5769 15.9011 21.5552 13.4471 21.5552 10.7776C21.5552 4.82504 16.7301 0 10.7776 0C4.82504 0 0 4.82504 0 10.7776C0 16.7301 4.82504 21.5552 10.7776 21.5552C13.4471 21.5552 15.9011 20.5769 17.7913 18.952L18.239 19.4162V20.7261L26.5294 29L29 26.5294L20.7261 18.239ZM10.7776 18.239C6.64894 18.239 3.31618 14.9062 3.31618 10.7776C3.31618 6.64894 6.64894 3.31618 10.7776 3.31618C14.9062 3.31618 18.239 6.64894 18.239 10.7776C18.239 14.9062 14.9062 18.239 10.7776 18.239Z"
      />
    </svg>
  );
};

export default SearchIcon;
