import { Button } from 'components/button';
import { ProductItem, ProductList } from '.';

export interface ManageProductProps {}

export function ManageProduct(_: ManageProductProps) {
  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
      <h1 className="text-2xl font-semibold leading-7">All Products</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} All Products</p>
        </div>
        <Button to="/dashboard/products/createProduct" kind="dashboard">
          Create Product
        </Button>
      </div>
      <ProductList>
        {new Array(12).fill(0).map((_, index) => (
          <ProductItem key={index}></ProductItem>
        ))}
      </ProductList>
    </div>
  );
}
