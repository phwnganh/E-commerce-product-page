import Header from "./components/Header/index.jsx";
import Main from "./components/Main/Main.jsx";

const MainPage = () => {
    return (
        <div className={"max-w-152 md:max-w-277.5 w-full mx-auto min-h-screen"}>
        <div className={"flex flex-col gap-6 sm:gap-12 md:gap-24"}>
            <Header/>
            <Main/>
        </div>
        </div>
    );
};

export default MainPage;