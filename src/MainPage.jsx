import Header from "./components/Header/index.jsx";

const MainPage = () => {
    return (
        <div className={"max-w-277.5 w-full mx-auto min-h-screen"}>
        <div className={"flex flex-col gap-24"}>
            <Header/>
        </div>
        </div>
    );
};

export default MainPage;