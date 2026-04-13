import ProductDescriptionSection from "./ProductDescription/ProductDescriptionSection.jsx";
import ProductImageSection from "./ProductImage/ProductImageSection.jsx";

const Main = () => {
    return (
        <main className={"flex flex-col md:flex-row items-center gap-12 md:gap-32 md:px-16"}>
            <div className={"min-w-0 flex-1"}>
                <ProductImageSection/>
            </div>
            <div className={"min-w-0 flex-1"}>
                <ProductDescriptionSection/>
            </div>
        </main>
    );
};

export default Main;