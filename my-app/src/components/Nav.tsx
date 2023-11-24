import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="hover: cursor-pointer  border-b  border-solid border-b-yellow-400 text-2xl font-sans font-bold gap-4 p-6">
        <Link to={"/"}>
          <h1 className="pl-20  text-yellow-400 hover:text-yellow-400/[0.4]">
            Pokemon List
          </h1>
        </Link>
      </nav>
    </div>
  );
}
