import React from "react"
import { ChakraProvider,Container,VStack,Image,Heading,Text,Box,Divider} from "@chakra-ui/react"
import { AppProps } from "next/app"
import theme from "../theme"

const App: React.FC<AppProps>= ({ Component, pageProps }) =>{
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
      <Container backgroundColor="white" borderRadius="sm" boxShadow="md" marginY={4} maxWidth="container.xl" padding={4}>
        <VStack marginBotton={6}>
          <Image borderRadius={9999}  src="https://lh3.googleusercontent.com/ZD1XZsde1M2xWqctCvKOcObnjywzFxV-2W8sto5E5WCbRElK0alkfvCu4a9qtfbusCU0Vy0rHrVaUw-H0NAnbtXbn9QLlZYVCnm8ycKHCTY0fRyxaK-h_pckEk1dYTAkWb8xv2jLg4hchhgp9EjiCZDQk-tXYWgqW-Ne5B5NPMV_O1Z8Ex1sErr-ttwmK6n1s5OkwfPSPLM78XNyCXpU_cBoHOVrBNGYm7dN61jDEq3O5BPLcC17Wifz1JN8LD0WrvqWy21WUy3pScp0JZTC1tlwokd_Zkk3VQWx8lhR8kzK03bK0lWoOC5lwvUNbvkWHTflWfEK6wyZ_QNJaPzk1NmafIQEoj-9X5QjPBaboG8TEhIc4mAHVYYokj0JtHzuybM8C5uSxQlN36FhZYdY63SqP22pU1pFdwfK-LBe4-L367N4-dOJNEMv-eqhpbKHRRQcbkP66ih02LssmUo--l3iPfDPwOyrs8EXU7MwoPY2LBK1ODt5Hc8hx9g7BXZ8T3qxqhfWAHk496aZVIxLCa4FXP_TKRDcvBVrWm1_S1dMqDxeA410thPOkUGORowpW0-c8AmR4RDp2b3FJfD2Fn1bj8C1yD4kdZjHSG2B9h1rfVLsQNsoSy6M_wLX60-JExh2FXczJ6JTzB2PeI17ti3y0gbfp0UDxZAD8nKTxBjDUuDsoXPbk5_ChQnJhLgR8dKiaHQXe8vw_6UfrNOfplUL=s64-no?authuser=0" />
          <Heading>CopateTienda</Heading>
          <Text>La tiendeta Original</Text>
        </VStack>
        < Divider marginY={6}/>
       <Component {...pageProps} />
      </Container>
      </Box>
  
    </ChakraProvider>
  )
}

export default App