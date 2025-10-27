import { Suspense } from "react";
import ProductList from "@/components/ProductList";
import Spinner from "@/components/ui/Spinner";

const Products = () => {
  return (
    <>
      <div className="flex items-center justify-center py-5">
        <h1 className="text-2xl font-bold">Product List</h1>
      </div>

      <Suspense fallback={<Spinner />}>
        <ProductList />
      </Suspense>
    </>
  );
};

export default Products;
