import { SearchBar } from "@/components/layouts/SearchBar";

// export const revalidate = 0;

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
