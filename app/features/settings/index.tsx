import { prisma } from "@/functions/libs/prisma";
import { zSettings } from "@/functions/models/Settings";
import "server-only";
import { EditSettings } from "./components/EditSettings";



export default async function Page() {
  const settings = await getSettings();
  return <EditSettings value={settings} />;
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
