import Menu from "./Menu.jsx";
import HeaderAction from "./HeaderAction.jsx";

const Header = () => {
    return (
        <header className={"flex flex-col gap-8 px-6 sm:px-0 border-b border-grey-100"}>
            <div className={"flex items-center justify-between h-20"}>
                <Menu/>
                <HeaderAction/>
            </div>
        </header>

    );
};

export default Header;