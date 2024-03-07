import { Input } from "@/components/ui/input";

type search = {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ search, handleChange }: search) {
  return (
    <Input
      type="search"
      value={search}
      onChange={handleChange}
      className="relative w-full md:w-1/2 mt-5"
      placeholder="찾으시는 뉴스를 입력해주세요"
    />
  );
}
