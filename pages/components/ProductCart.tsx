import { Product } from "@/product/type";
import parseCurrency from "@/utils/currency";
import Image from "next/image";

interface Props {
 product: Product;
 onAdd: (produc: Product) => void;
}

const ProductCart: React.FC<Props> = ({ product, onAdd }) => {
 return (
  <div
   className="py-10 px-10 rounded-xl overflow-hidden shadow-[0_3px_35px_0_rgba(0,0,0,0.14)]"
   key={product.id}
  >
   <div className="flex flex-col justify-center items-center">
    <div className="flex h-[220px] max-h-56">
     <Image
      className=" object-contain"
      loading="lazy"
      src={product.image}
      width={200}
      height={200}
      alt={product.title}
     />
    </div>

    <h3 className=" text-lg font-semibold">{product.title}</h3>
    <span>{parseCurrency(product.price)}</span>
    <button
     className=" bg-sky-600 text-white mt-5 py-1 px-3 rounded-lg"
     onClick={() => onAdd(product)}
    >
     Agregar
    </button>
   </div>
  </div>
 );
};

export default ProductCart;
