import { ReactElement, createContext, useState, useEffect } from "react";

//represent the structure of a product.
export type ProductType = {
    sku: string;
    name: string;
    price: number;
};

// const initState: ProductType[] = [
//     {
//         sku: "item0001",
//         name: "Widget",
//         price: 9.99,
//     },
//     {
//         sku: "item0002",
//         name: "Premium Widget",
//         price: 19.99,
//     },
//     {
//         sku: "item0003",
//         name: "Deluxe Widget",
//         price: 29.99,
//     },
// ];

//represent the initial state of the products.
const initState: ProductType[] = []

//represents the shape of the context state. It includes a products property, which is an array of ProductType.
export type UseProductsContextType = {products: ProductType[]}

//initial context state
const initContextState: UseProductsContextType = {products: []}

//specify the type of the context
const ProductsContext = createContext<UseProductsContextType>(initContextState)

//the ProductsProvider component can receive React elements as children.
type ChildrenType = { children?: ReactElement | ReactElement[]}

//create ProductsProvide component. uses the useState hook to manage the state of the products array. The fetched data is stored in the products state using the setProducts function.
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect( () => {
        const fetchProducts =async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products').then(res => {
                return res.json()
            }).catch(err => {
                if(err instanceof Error) console.log(err.message)
            })
            return data
        }
        fetchProducts().then(products => setProducts(products))
    }, [])

    //a context provider is created. It provides the products state to its children components.
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

//Other components in the application can use this context to access and manipulate the list of products.
export default ProductsContext