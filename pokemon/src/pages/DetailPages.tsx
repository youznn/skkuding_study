import { useParams, Link } from "react-router-dom"; // useParams 추가
import DetailTable from "../DetailTable";
import "../styles/App.css";

function DetailPages() {
  const { id } = useParams();

  if (id !== undefined) {
    return (
      <div className="font-sans bg-slate-950 text-gray-200 font-light">
        <nav className="hover: cursor-pointer  border-b  border-solid border-b-yellow-400 text-2xl font-sans font-bold gap-4 p-6">
          <Link to={"/"}>
            <h1 className="pl-20  text-yellow-400 hover:text-yellow-400/[0.4]">
              Pokemon List
            </h1>
          </Link>
        </nav>
        <main>
          <DetailTable index={id} />
        </main>
      </div>
    );
  } else {
    return <div>HELLO</div>;
  }
}

export default DetailPages;
