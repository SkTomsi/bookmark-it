import SidebarContent from './home/SidebarContent';
import { getAllFolders } from '../_data-access';

export default async function Sidebar() {
  const { folders } = await getAllFolders();

  return (
    <div className="flex flex-col gap-y-2 w-[244px] relative">
      <SidebarContent folders={folders} />
    </div>
  );
}
