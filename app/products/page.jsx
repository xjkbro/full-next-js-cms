import Link from "next/link";
import React from "react";
import ProductTable from "./ProductTable";


export default async function Products() {
//   const { products } = await getProducts();

  return (
    <div className="flex flex-col font-bold w-fit">
        <ProductTable />
      {/* {products.map((product, i) => (
        <Link key={i} href={`/products/${product.slug}`}>
          {product.title}
        </Link>
      ))} */}

    </div>
  );
}

// const getProducts = async () => {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/rest/products`);
//   return res.json();
// };
