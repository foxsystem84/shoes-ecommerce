import { CartItem, Product } from "@/product/type";
import React, { useMemo, useState } from "react";
import api from "@/product/api";
import ProductCart from "./ProductCart";
import SlideCart from "./SlideCart";

interface Props {
 products: Product[];
}

const ListProduct: React.FC<Props> = ({ products }) => {
 const [cart, setCart] = useState<CartItem[]>([]);
 const [open, setOpen] = React.useState<boolean>(false);

 function handleUpdateCart(product: Product, action: string) {
  switch (action) {
   case "increment":
    setCart((cart) => {
     return cart.map((item) =>
      item.id === product.id
       ? {
          ...item,
          quantity: item.quantity + 1,
         }
       : item
     );
    });
    break;
   case "decrement":
    const item = cart.find((item) => item.id === product.id);
    if (item && item.quantity > 1) {
     setCart((cart) =>
      cart.map((item) =>
       item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
     );
    } else {
     setCart((cart) => cart.filter((item) => item.id !== product.id));
    }
    break;

   default:
    break;
  }
 }

 function handleAddToCart(product: Product) {
  setCart((cart) => {
   const isCart = cart.find((item) => item.id === product.id);
   if (isCart) {
    return cart.map((item) =>
     item.id === product.id
      ? {
         ...item,
         quantity: item.quantity + 1,
        }
      : item
    );
   }
   return cart.concat({ ...product, quantity: 1 });
  });
 }

 return (
  <>
   <div className=" container mx-auto mt-20">
    {products.length ? (
     <div className=" lg:w-full grid lg:grid-cols-4 gap-20  ">
      {products.map((product) => (
       <ProductCart
        key={product.id}
        product={product}
        onAdd={(product) => handleAddToCart(product)}
       />
      ))}
     </div>
    ) : (
     <div>No hay productos</div>
    )}

    {Boolean(cart.length) && (
     <div className="flex justify-center">
      <button
       className=" fixed  lg:bottom-4 rounded-lg bg-slate-800 text-white py-1 px-5"
       onClick={() => setOpen(!open)}
      >
       Ver pedidos ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
      </button>
     </div>
    )}
   </div>
   <SlideCart
    items={cart}
    onDecrement={(product) => handleUpdateCart(product, "decrement")}
    onIncrement={(product) => handleUpdateCart(product, "increment")}
    open={open}
    setOpen={setOpen}
   />
  </>
 );
};

export default ListProduct;
