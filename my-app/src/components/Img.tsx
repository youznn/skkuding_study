interface Props {
  index: number;
  name: string;
  className?: string;
}

export default function Img({ index, name, className }: Props) {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        alt={name}
        className={className}
      />
    </div>
  );
}
