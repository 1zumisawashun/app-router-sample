import { SubHeader } from "@/components/layouts/SubHeader";
import Settings from "@/features/settings";

export const revalidate = 0;

export const metadata = {
  title: "Settings",
};

export default async function Page() {
  return (
    <SubHeader title="Settings">
      <Settings />
    </SubHeader>
  );
}
