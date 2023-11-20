import { SearchBar } from "@/components/layouts/SearchBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
