export type Robot = {
  id: number;
  name: string;
  email: string;
};

export type SearchBoxProps = {
  setSearchField: (value: string) => void;
};
