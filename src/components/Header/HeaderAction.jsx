import CartIcon from '../../assets/icon-cart.svg'
import Avatar from '../../assets/image-avatar.png'
import {useState} from "react";
import NotificationDropdown from "./NotificationDropdown.jsx";
const HeaderAction = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }
    return (
        <div className={"flex items-center gap-6 sm:gap-12"}>
            <button type={"button"} className={"flex justify-center items-center shrink-0"}>
                <img src={CartIcon} alt={"cart-icon"}/>
            </button>
            <div className={"relative"}>
                <button onClick={handleOpen} type={"button"} className={`flex justify-center items-center w-6 h-6 sm:w-12.5 sm:h-12.5 shrink-0 ${isOpen ? "ring-2 ring-orange-500 rounded-full" : ""}`}>
                    <img src={Avatar} alt={"avatar"}/>
                </button>
                {isOpen && <NotificationDropdown/>}
            </div>

        </div>
    );
};

export default HeaderAction;