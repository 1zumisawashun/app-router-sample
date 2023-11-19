import { SubHeader } from "@/components/layouts/SubHeader";
import Settings from "@/features/settings";

export default async function Page() {
  return (
    <SubHeader title="Settings">
      <Settings />
    </SubHeader>
  );
}
