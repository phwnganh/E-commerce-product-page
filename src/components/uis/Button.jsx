
const Button = ({children, ...props}) => {
    return (
        <button className={"flex items-center justify-center gap-4 bg-orange-500 hover:bg-orange-300 rounded-10 px-6 py-4 font-bold w-full"} {...props}>
            {children}
        </button>
    );
};

export default Button;