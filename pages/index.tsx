import React from "react";
import { GetStaticProps } from "next";
import { Box, Button, Grid, Link, Stack,Text,Image, Flex } from "@chakra-ui/react";
import{motion,AnimatePresence, AnimateSharedLayout}from "framer-motion";

import { Product } from "../product/types";
import api from "../product/api";


interface Props {
  products: Product[];
}
function parseCurrency(value:number):string{
  return value.toLocaleString("es-AR",{
    style:"currency",
    currency:"ARS",
  });
}

const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart,setCart]=React.useState <Product[]> ([]);
  const [selectedImage,setSelectedImage]=React.useState <string> (null);

  const text =React.useMemo( ()=>
   cart
     .reduce((message,product)=>message.concat(`* ${product.title} - ${parseCurrency(product.precio)}\n`),``)
     .concat(`\n Total: ${parseCurrency(cart.reduce ((total, product) => total + product.precio, 0))} `), [cart],
  );
  
 /*  React.useEffect(  ()=> {setTimeout(()=> setCart([]),2000);
  },[cart] ); No funciona muy bien este efecto*/

  return( 
   <AnimateSharedLayout  type="crossfade">
      <Stack spacing={6}>
      <Grid templateColumns="repeat(auto-fill,minmax(240px,1fr))" gridGap={6} >
      {products.map (product =>        
        <Stack spacing={3} borderRadius="md" padding={4} backgroundColor="gray.100" key={product.id} >
           <Stack spacing={1} > 
            <Image alt={product.title} as={motion.img} cursor="pointer" layoutId={product.image}  maxHeight={128} objectFit="cover" src= {product.image} onClick={()=> setSelectedImage(product.image)} />
            <Text fontSize="sm" fontWeight="500" color="green.500">{product.title}</Text>
            <Text>{parseCurrency(product.precio)}</Text>
           </Stack>
           <Button colorScheme="primary" size="sm" variant="outline" onClick={()=>setCart(cart=>cart.concat(product))}> Agregar</Button>
        </Stack>)  
      }
      </Grid>
      {Boolean(cart.length) && (
          <Flex alignItems="center" 
                animate={{scale:1}} 
                as={motion.div} 
                bottom={4} 
                exit={{scale:0}} 
                initial={{scale:0}}
                justifyContent="center"
                 position="sticky"> 
            <Link isExternal href={`http://wa.me/543624744872?text=${encodeURIComponent(text)}`} >
              <Button colorScheme="whatsapp">Completar pedido({cart.length}productos)</Button>
            </Link>
         
          </Flex>
          ) 
      }
      
    </Stack>
    <AnimatePresence>
      {selectedImage && 
       <Flex key="backdrop" 
             alignItems="center" 
             as={motion.div}
             backgroundColor="rgba(0,0,0,0.5)"
             justifyContent="center" 
             layoutId={selectedImage} 
             position="fixed"
             top={0} 
             left={0} 
             height="100%" 
             width="100%"
             onClick={()=> setSelectedImage(null)}>
         <Image key="image" src={selectedImage} />
      </Flex>}
    </AnimatePresence>
   </AnimateSharedLayout>
  )

};


export const getStaticProps: GetStaticProps = async () => {
  const products= await api.list();
    return {
      revalidate:10,
      
        props: {
         products,
        },
    };
};

export default IndexRoute;