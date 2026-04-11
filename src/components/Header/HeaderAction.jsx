import CartIcon from '../../assets/icon-cart.svg'
import Avatar from '../../assets/image-avatar.png'
const HeaderAction = () => {
    return (
        <div className={"flex items-center gap-12"}>
            <div className={"flex justify-center items-center shrink-0"}>
                <img src={CartIcon} alt={"cart-icon"}/>
            </div>
            <div className={"flex justify-center items-center w-12.5 h-12.5 shrink-0"}>
                <img src={Avatar} alt={"avatar"}/>
            </div>
        </div>
    );
};

export default HeaderAction;