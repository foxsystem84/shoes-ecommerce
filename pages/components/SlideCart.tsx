import { CartItem, Product } from "@/product/type";
import parseCurrency from "@/utils/currency";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useMemo } from "react";
import { INFORMATION } from "../constants";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import whatsapplogo from "../../public/images/iwhatsapp.png";
import Image from "next/image";

interface Props {
 items: CartItem[];
 onDecrement: (product: Product) => void;
 onIncrement: (product: Product) => void;
 open: boolean;
 setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideCart: React.FC<Props> = ({
 items,
 open = false,
 setOpen,
 onDecrement,
 onIncrement,
}) => {
 const total = useMemo(
  () =>
   parseCurrency(
    items.reduce(
     (total, product) => total + product.price * product.quantity,
     0
    )
   ),
  [items]
 );

 const text = useMemo(
  () =>
   items
    .reduce(
     (message, product) =>
      message.concat(
       `* ${product.title} - ${parseCurrency(
        product.price * product.quantity
       )}\n`
      ),
     ""
    )
    .concat(`\nTotal: ${total}`),
  [items, total]
 );
 return (
  <Transition.Root show={open} as={Fragment}>
   <Dialog as="div" className="relative z-10" onClose={setOpen}>
    <Transition.Child
     as={Fragment}
     enter="ease-in-out duration-500"
     enterFrom="opacity-0"
     enterTo="opacity-100"
     leave="ease-in-out duration-500"
     leaveFrom="opacity-100"
     leaveTo="opacity-0"
    >
     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-hidden">
     <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
       <Transition.Child
        as={Fragment}
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
       >
        <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
         <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
         >
          <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
           <button
            type="button"
            className="rounded-md py-1 px-2 text-gray-300 hover:text-white outline-none ring-2 ring-white"
            onClick={() => setOpen(false)}
           >
            <span className="sr-only">Close panel</span>X
           </button>
          </div>
         </Transition.Child>
         <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
          {/* <div className="px-4 sm:px-6">
           <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
          </div> */}
          <div className="relative  flex-1 px-4 sm:px-6">
           {/* Your content */}
           {items.length ? (
            <>
             <div className=" ">
              <h1 className=" mb-4  font-semibold">Productos en el carrito</h1>
              {items.map((product, index) => (
               <div className=" flex flex-col my-4 " key={product.id}>
                <div className="flex justify-between center">
                 <h4 className=" text-base font-normal ">
                  {product.quantity > 0 ? `${product.quantity} x ` : ""}
                  {product.title}
                 </h4>
                 <h4 className="text-sm">
                  {parseCurrency(product.price * product.quantity)}
                 </h4>
                </div>
                <div className=" flex">
                 <button
                  className=" rounded-lg text-sm bg-slate-200 "
                  onClick={() => onDecrement(product)}
                 >
                  <MinusSmallIcon className=" h-5 w-5 " />
                 </button>
                 <h4 className=" px-1">{` ${product.quantity} `}</h4>
                 <button
                  className=" rounded-lg text-sm bg-slate-200 "
                  onClick={() => onIncrement(product)}
                 >
                  <PlusSmallIcon className=" h-5 w-5 " />
                 </button>
                </div>
               </div>
              ))}
             </div>
             <div className="border-t-[1px] "></div>
             <div className="mt-2 flex justify-between">
              <h5>Total</h5>
              <h5>{total}</h5>
             </div>
             <div className=" ">
              <div className=" flex justify-center">
               <Link
                className=" bg-[#008069] text-white fixed bottom-0 px-4 py-1 mb-3 rounded-lg mx-auto flex items-center"
                href={`https://wa.me/${
                 INFORMATION.phone
                }?text=${encodeURIComponent(text)}`}
                target="_blank"
               >
                <Image
                 className=" mr-1"
                 src={whatsapplogo}
                 width="30"
                 height="30"
                 alt="logo whatsapp"
                />
                Completar pedido
               </Link>
              </div>
             </div>
            </>
           ) : (
            <div className=" mt-10 block text-center">
             No hay items en el carro
            </div>
           )}
          </div>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </div>
   </Dialog>
  </Transition.Root>
 );
};

export default SlideCart;
