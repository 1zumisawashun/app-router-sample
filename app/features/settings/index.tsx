import { prisma } from "@/functions/libs/prisma";
import { zSettings } from "@/functions/models/Settings";
import "server-only";
import { EditSettings } from "./components/EditSettings";

export const revalidate = 0;

export const metadata = {
  title: "Settings",
};

export default async function Page() {
  // ページ内でのDBからのデータ取得
  const settings = await getSettings();
  return (
    <main>
      <div className="container-sp _mb-2">
        <h2 className="text-small -grey _my-1">Settings</h2>
        <EditSettings value={settings} />
      </div>
    </main>
  );
}

const getSettings = async () => {
  const settings = await prisma.metadata.findMany();
  const data = settings.reduce<Record<string, string>>((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc;
  }, {});
  const parsedData = zSettings.parse(data);
  return parsedData;
};
