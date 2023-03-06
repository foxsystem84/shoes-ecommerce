/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"
import {Product} from './type'
import Papa from 'papaparse'
import { INFORMATION } from "@/pages/constants"

export default {
    list: async (): Promise<Product[]> => {
        return axios
        .get(`${INFORMATION.sheet}`,
        {
            responseType:  "blob",
        },
        )
        .then((response) =>{
            return new Promise<Product[]>((resolve, reject)=>{
                Papa.parse(response.data,{
                    header: true,
                    complete: (results)=>{
                        const products = results.data as Product[]
                        return resolve(products.map((product)=>({...product, price: Number(product.price)})))
                    },
                    error: (error)=>{
                        return reject(error.message)
                    }
                })
               
        })
        })
    }
}
