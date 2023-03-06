/* eslint-disable react-hooks/rules-of-hooks */
import { Product } from "../product/type";
import { GetStaticProps } from "next";
import React from "react";
import api from "@/product/api";
import ListProduct from "./components/ListProduct";

interface Props {
 products: Product[];
}

const index: React.FC<Props> = ({ products }) => {
 return (
  <>
   <ListProduct products={products} />
  </>
 );
};

export const getStaticProps: GetStaticProps = async () => {
 const products = await api.list();
 return {
  props: {
   products,
  },
 };
};

export default index;
