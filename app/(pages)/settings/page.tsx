import { SubHeader } from "@/components";
import Settings from "@/features/settings";

export default async function Page() {
  return (
    <SubHeader title="Settings">
      <Settings />
    </SubHeader>
  );
}
