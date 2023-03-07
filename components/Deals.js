import React      from "react";
import headphones from "../assets/headphones.png";
import laptop     from "../assets/laptop.png";
import phone      from "../assets/phone.png";
import Product    from "./Product";

const Deals = () => {
    const products =[
        {title:"Headphones", image: headphones},
        {title:"Laptop",     image: laptop},
        {title:"Phone",      image: phone},
        {title:"Headphones", image: headphones},
    ];
    return (
        <div className = "bg-[#eaeded] w-full pb-4">
            <div className = "py-2 mx-auto w-[80vw] xl:w-[70vw] font-semibold text-[20px]"> DEALS </div>
            <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto w-[80vw] xl:w-[70vw] gap-5">
                {products.map((product) => (
                    <Product title={product.title} image = {product.image} />
                ))}
            </div>
        </div>
    );
};

export default Deals;