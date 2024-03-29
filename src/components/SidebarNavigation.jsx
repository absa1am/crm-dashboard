import { FaUsersCog } from "react-icons/fa";
import { MdDashboard, MdSettings, MdHelp } from "react-icons/md";

export const SidebarTopNavigation = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
    },
    {
        key: "customers",
        label: "Customers",
        path: "/customers",
        icon: <FaUsersCog />
    }
];

export const SidebarBottomNavigation = [
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        icon: <MdSettings />
    },
    {
        key: "supports",
        label: "Supports",
        path: "/supports",
        icon: <MdHelp />
    }
];