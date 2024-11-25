import { useEffect, useRef, useState } from "react";
import { TabState, TabProps } from "./interface"; // Adjust the import path to match your project structure
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TabBar = ({
  tabState,
  onTabChange,
  isDesktop,
}: {
  tabState: TabState;
  onTabChange: (id: string) => void;
  isDesktop: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (isDesktop)
    return (
      <>
        <div className="hidden md:flex items-center justify-between ">
          {tabState.tabs.map((tab: TabProps) => (
            <div
              key={tab.id}
              className="flex items-center"
              onClick={() => onTabChange(tab.id)}
              style={{ cursor: "pointer" }}
            >
              <h1
                className={`flex items-center p-2 text-2xl font-semibold m-4 hover:text-primary transition-colors duration-500 ${
                  tab.id === tabState.activeTabId
                    ? " text-primary"
                    : "text-gray-500"
                }`}
              >
                {tab.title}
              </h1>
            </div>
          ))}
        </div>
      </>
    );
  else
    return (
      <>
        {/* If screen is small */}
        <div className="md:hidden relative mr-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            ref={buttonRef}
            className={`focus:outline-none text-2xl hover:text-primary font-semibold ${
              isDropdownOpen ? "text-primary" : "text-gray-700"
            }`}
          >
            <IoMenu
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="mt-2"
              style={{
                fontSize: "24px",
                color: isDropdownOpen || hovered ? "#F3544B" : "black",
              }}
            />
          </button>

          {/* Dropdown with animation */}
          <div
            ref={dropdownRef}
            className={`absolute mt-6 w-60 bg-white shadow-lg rounded-lg z-50 transform transition-all duration-500 ease-in-out ${
              isDropdownOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {tabState.tabs.map((tab) => (
              <h1
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsDropdownOpen(false);
                  
                }}
                className="block px-4 py-4 text-2xl text-gray-700 font-semibold hover:bg-gray-100 hover:text-primary"
                style={{ cursor: "pointer" }}
              >
                {tab.title}
              </h1>
            ))}
          </div>
        </div>
      </>
    );
};

export default TabBar;
