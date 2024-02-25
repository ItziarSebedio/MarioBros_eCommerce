//import { useEffect, useState } from "react";
import Hero from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct";
import { getProducts } from "../../service";
//import { Product } from "../../interface";
import { Toaster } from 'sonner'
import { useQuery } from "react-query";
import { useState } from "react";

const Home = () => {

  const [page, setPage] = useState(1)

  const {data, isLoading, error} = useQuery(
    ['products', page], 
    () => getProducts(page), 
    {keepPreviousData: true}
  );

  // const [products, setProducts] = useState<Product[]>([]);
  // //creamos estados adicionales para tener feedback de cuándo se está cargando la data y en caso de que haya algún error:
  // const [error, setError] = useState(false) 
  // const [isLoading, setIsLoading] = useState(true)

  // //para traer los datos de la api que están corriendo en http://localhost:3000/products hacemos esta función getProducts que originalmente pusimos en este componente y luego movimos a src > service > products.service.ts 

  // useEffect(()=>{
  //   getProducts().then((data) => {
  //     setProducts(data)
  //   }).catch(()=> {
  //     setError(true)
  //   }).finally(()=>{
  //     setIsLoading(false)
  //   })
  // },[])

  // console.log(products);

  return (
    <>
    <Hero/>
    <Toaster richColors/>
    {isLoading && <p>Loading...</p>}
    {error && <p>Something went wrong</p>}
    <div className={styles.container}>
        {data?.map((product) => (
            <CardProduct key={product.tail} product={product}/>
        ))}
    </div>

    <div className={styles.paginationContainer}>
      <button onClick={()=> setPage(page-1)} disabled={page===1} className={styles.paginationButton}>Previous page</button>
      <div className={styles.paginationActive}>
        <span>{page}</span>
      </div>
      <button onClick={()=> setPage(page+1)} className={styles.paginationButton}>Next page</button>
    </div>




    </>
  )
}

export default Home