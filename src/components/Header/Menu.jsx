import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-menu.svg";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <nav aria-label={"menu-site"} className={"flex items-center gap-14 h-full"}>
      <button
        type={"button"}
        className={"flex md:hidden justify-center items-center"}
      >
        <img src={MenuIcon} alt="Menu" />
      </button>
      <div className={"flex justify-center items-center"}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={"hidden md:flex items-end gap-8 h-full"}>
        <NavLink
          to="/collections"
          className={({ isActive }) =>
            `relative flex items-center h-full ${
              isActive ? "text-grey-950" : "text-grey-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              Collections
              <span
                className={`
                    absolute left-0 -bottom-px w-full h-1
                    ${isActive ? "bg-orange-500" : "bg-transparent"}
                `}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/men"
          className={({ isActive }) =>
            `relative flex items-center h-full ${
              isActive ? "text-grey-950" : "text-grey-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              Men
              <span
                className={`
                    absolute left-0 -bottom-px w-full h-1
                    ${isActive ? "bg-orange-500" : "bg-transparent"}
                `}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/women"
          className={({ isActive }) =>
            `relative flex items-center h-full ${
              isActive ? "text-grey-950" : "text-grey-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              Women
              <span
                className={`
                    absolute left-0 -bottom-px w-full h-1
                    ${isActive ? "bg-orange-500" : "bg-transparent"}
                `}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative flex items-center h-full ${isActive ? "text-grey-950" : "text-grey-500"}`
          }
        >
          {({ isActive }) => (
            <>
              About
              <span
                className={`absolute left-0 -bottom-px w-full h-1 ${isActive ? "bg-orange-500" : "bg-transparent"}`}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative flex items-center h-full ${
              isActive ? "text-grey-950" : "text-grey-500"
            }`
          }
        >
          {({ isActive }) => (
            <>
              Contact
              <span
                className={`
                    absolute left-0 -bottom-px w-full h-1
                    ${isActive ? "bg-orange-500" : "bg-transparent"}
                `}
              />
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Menu;
