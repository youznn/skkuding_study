import { useParams } from "react-router-dom"; // useParams 추가
import DetailTable from "../components/DetailTable";
import Nav from "../components/Nav";
import "../styles/App.css";

function DetailPages() {
  const { id } = useParams();

  if (id !== undefined) {
    return (
      <div className="font-sans bg-slate-950 text-gray-200 font-light">
        <Nav />
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
