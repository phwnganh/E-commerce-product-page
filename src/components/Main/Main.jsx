import ProductDescriptionSection from "./ProductDescription/ProductDescriptionSection.jsx";
import ProductImageSection from "./ProductImageSection.jsx";

const Main = () => {
    return (
        <main className={"flex items-center gap-32"}>
                <ProductImageSection/>
                <ProductDescriptionSection/>
        </main>
    );
};

export default Main;