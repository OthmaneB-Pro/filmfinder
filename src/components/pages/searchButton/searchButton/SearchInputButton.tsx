type SearchInputButtonProps = {
  name: string;
  setName: (value: string) => void;
};

export default function SearchInputButton({ name, setName }: SearchInputButtonProps) {
  return (
    <input
      type="text"
      placeholder="Rechercher un film..."
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
