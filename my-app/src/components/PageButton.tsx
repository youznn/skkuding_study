import usePageStore from "../datas/page";

interface Props {
  buttonIdx: number;
  onClick: any;
  isActive: boolean;
}

export default function PageButton({ buttonIdx, onClick, isActive }: Props) {
  return isActive ? (
    <button
      value={buttonIdx}
      onClick={onClick}
      className="text-white text-lg border rounded-full text-white h-7 w-7 bg-yellow-400/40 border-none"
    >
      {buttonIdx + 1}
    </button>
  ) : (
    <button
      value={buttonIdx}
      onClick={onClick}
      className="text-white text-lg h-7 w-7"
    >
      {buttonIdx + 1}
    </button>
  );
}
