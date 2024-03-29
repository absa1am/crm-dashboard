import { MdOutlineGrid3X3 } from "react-icons/md";
import { SidebarBottomNavigation, SidebarTopNavigation } from "./SidebarNavigation";
import { Link, useLocation } from "react-router-dom";

function SidebarLink({ navItem }) {
    const {pathname} = useLocation();

    return (
        <Link to={navItem.path} className={"flex items-center gap-2 font-light px-2 py-1 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base" + (pathname === navItem.path && 'text-white bg-neutral-700')}>
            <span className="text-md">{navItem.icon}</span>
            {navItem.label}
        </Link>
    );
}

export default function Sidebar() {
    return (
        <div className={"flex flex-col bg-neutral-900 w-60 p-3 text-white"}>
            {/* Sidebar title */}
            <div className={"flex items-center gap-2 px-1 py-3"}>
                <MdOutlineGrid3X3 fontSize={24} />
                <span className={"text-neutral-100 text-lg"}>CM Dashboard</span>
            </div>

            {/* Sidebar top navigation */}
            <div className={"flex-1 py-8 flex flex-col gap-0.5"}>
                {SidebarTopNavigation.map((navItem) => (
                    <SidebarLink key={navItem.key} navItem={navItem} />
                ))}
            </div>

            {/* Sidebar bottom navigation */}
            <div className={"flex flex-col gap-0.5 pt-2 border-t border-neutral-700"}>
                {SidebarBottomNavigation.map((navItem) => (
                    <SidebarLink key={navItem.key} navItem={navItem} />
                ))}
            </div>
        </div>
    );
}