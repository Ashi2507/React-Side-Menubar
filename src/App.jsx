import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { useState } from "react";
import Home1 from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";


function App() {
  const [activeItem, setActiveItem] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (text) => {
    setActiveItem(text); console.log(text);
    setTimeout(() => setActiveItem(""), 200); // Blinking effect
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            active={activeItem === "Home"}
            onClick={() => window.location.pathname = "/home"}
            showPlus
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active={activeItem === "Dashboard"}
            onClick={() => window.location.pathname = "/dashboard"}
            showPlus
          />
          <SidebarItem
            icon={<StickyNote size={20} />}
            text="Projects"
            alert
            active={activeItem === "Projects"}
            onClick={() => handleItemClick("Projects")}
            showPlus
          />
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Calendar"
            active={activeItem === "Calendar"}
            onClick={() => handleItemClick("Calendar")}
            showPlus
          />
          <SidebarItem
            icon={<Layers size={20} />}
            text="Tasks"
            active={activeItem === "Tasks"}
            onClick={() => handleItemClick("Tasks")}
            showPlus
          />
          <SidebarItem
            icon={<Flag size={20} />}
            text="Reporting"
            active={activeItem === "Reporting"}
            onClick={() => handleItemClick("Reporting")}
            showPlus
          />
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            active={activeItem === "Settings"}
            onClick={toggleDropdown}
            showPlus
          >
            {isDropdownOpen && (
              <>
                <SidebarItem
                  text="Profile"
                  onClick={() => handleItemClick("Profile")}
                />
                <SidebarItem
                  text="Account"
                  onClick={() => handleItemClick("Account")}
                />
                <SidebarItem
                  text="Notifications"
                  onClick={() => handleItemClick("Notifications")}
                />
              </>
            )}
          </SidebarItem>
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
            active={activeItem === "Help"}
            onClick={() => handleItemClick("Help")}
            showPlus
          />
        </Sidebar>
        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Home1 />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router >
  );
}


export default App
