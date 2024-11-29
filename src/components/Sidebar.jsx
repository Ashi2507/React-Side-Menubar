import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import { createContext, useContext, useState } from "react"

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">

                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">

                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold"></h4>
                                <span className="text-xs text-gray-600"></span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

import { Plus } from "lucide-react";
import { Link } from "react-router-dom";



export function SidebarItem({
    icon,
    text,
    to,
    active,
    onClick,
    showPlus,
    children
}) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li
            className={`relative flex flex-col py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
                }`}
        >
            <div
                className="flex items-center w-full"
                onClick={onClick} // Handle click for the main item
            >
                {icon}
                <span
                    className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                        }`}
                >
                    {text}
                </span>
                {showPlus && expanded && (
                    <Plus size={16} className="ml-auto text-indigo-400" />
                )}
            </div>

            {/* Render children for dropdown below the parent */}
            {children && expanded && (
                <ul className="mt-2 bg-gray-100 rounded-md shadow-md transition-all">
                    {children}
                </ul>
            )}
        </li>
    );
}
