import axios from "axios";
import Papa from "papaparse";

import { Product } from "./types";

export default {
   list: async (): Promise<Product[]> => {
      return axios
         .get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRAnWIUuAGgEjsHgah3CPun63Bm_n3Tc-A0ycxqdbUHYeExWGG1qLOiSjrgysu-IBdB0YU1bJ3ju18P/pub?output=csv',
            {
               responseType: "blob",
            }
         )

         .then((response) => new Promise<Product[]>((resolve, reject) => {
             Papa.parse(response.data, {
               header: true,
               complete: (results) => {
                  const products = results.data as Product[];
  
                  return resolve(
                    products.map((product) => ({
                      ...product,
                      precio: Number(product.precio),
                    })),
                  );
                } ,
               error: (error) => reject(error.message),
              });
           })
         );
   },

};

