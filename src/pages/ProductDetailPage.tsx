import { depotApi } from 'api/depotApi';
import { detailConfigApi } from 'api/detailConfigApi';
import productApi from 'api/productApi';
import { useAppDispatch } from 'app/hooks';
import { Button } from 'components/button';
import { Quantity } from 'components/common';
import { cartActions } from 'features/cart/cartSlice';
import parse from 'html-react-parser';
import { Product } from 'models';
import { Depot } from 'models/depot';
import { ProductItem, ProductList } from 'modules/product';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { active } from 'utils/constant';

export default function ProductDetailPage() {
  const { slug } = useParams();

  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const [content, setContent] = useState<any>();

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [depot, setDepot] = useState<Depot>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (slug) {
        const data = await productApi.getProductBySlug(slug);
        setProduct(data);
      }
    })();
  }, [slug]);

  useEffect(() => {
    (async () => {
      if (product) {
        const data = await detailConfigApi.getByIdProduct(product.idProduct);
        setContent(data.content);
      }
    })();
  }, [product]);

  useEffect(() => {
    (async () => {
      if (product) {
        const related = await productApi.getAll({
          limit: 4,
          page: 1,
          idStatusProductInput: active.PUBLIC,
          nameCategoryInput: product.Category,
        });
        setRelatedProducts(related.data);
      }
    })();
  }, [product]);

  useEffect(() => {
    if (product) {
      async function fetchData() {
        const data = await depotApi.getDepotByIdProduct(product?.idProduct + '');
        setDepot(data);
      }
      fetchData();
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        cartActions.incrementItemCartDetail({
          cart: {
            category: product.Category,
            id: Number(product.idProduct),
            image: product.image,
            name: product.NameProduct,
            price: product.CurrentPrice,
            quantity: quantity,
            trademark: product.TradeMark,
            priceProduct: product.CurrentPrice,
            slug: product.Slug,
          },
          quantity: quantity,
          price: product.CurrentPrice,
        })
      );
    }
  };

  return (
    <>
      {product && (
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-[1000px] mx-auto py-10">
            <div className="p-5 flex gap-5 border border-gray3 rounded-lg">
              <div className="border border-gray3 rounded-lg">
                <img src={product?.image} alt="" className="max-w-[350px] p-5" />
              </div>
              <div className="flex flex-col gap-5 flex-1">
                <h2 className="text-xl font-semibold leading-7 text-dark max-lg:text-lg max-lg:leading-6 max-lg:text-center">
                  {product?.NameProduct}
                </h2>
                <div className="flex gap-5">
                  <p>
                    Category: <span className="text-primary">{product.Category}</span>
                  </p>
                  <p>
                    Trademark: <span className="text-primary">{product.TradeMark}</span>
                  </p>
                </div>
                <span className="p-2 rounded-lg text-[#FA3434] bg-[#FFF0DF] mr-auto">
                  {Number(product?.CurrentPrice).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </span>
                <div className="flex gap-10 items-center">
                  <Quantity
                    max={Number(depot?.quantily)}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  ></Quantity>
                  <div className="flex gap-3">
                    <p>Amount:</p>
                    <p className="text-primary">{depot?.quantily}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between">
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/cpu.png" className="max-w-5" />
                      </span>
                      <p className="text-sm">{product.Specifications.CpuName}</p>
                    </div>
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/ram.png" className="max-w-5" />
                      </span>
                      <p className="text-sm">{product.Specifications.RamName}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/disk.png" className="max-w-5" />
                      </span>
                      <p className="text-sm">{product.Specifications.DiskName}</p>
                    </div>
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/vga.png" className="max-w-5" />
                      </span>
                      <p className="text-sm">{product.Specifications.VgaName}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/screen.png" className="max-w-5" alt="" />
                      </span>
                      <p className="text-sm">{product.Specifications.ScreenName}</p>
                    </div>
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/color.png" className="max-w-5" alt="" />
                      </span>
                      <p className="text-sm">{product.Specifications.ColorName}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 flex-1 items-center">
                      <span>
                        <img src="/images/OS.png" className="max-w-5" />
                      </span>
                      <p className="text-sm">{product.Specifications.OsName}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Button onClick={handleAddToCart} kind="primary">
                    Add to cart
                  </Button>
                  <Button to="/cart" kind="secondary">
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray3 rounded-lg mt-10">{parse(`${content}`)}</div>
          </div>
          <div className="my-10">
            <h2 className="xl:text-2xl text-lg font-semibold text-dark leading-6 mb-6">
              Related products
            </h2>
            <ProductList>
              {relatedProducts?.map((item) => (
                <ProductItem
                  key={item.idProduct}
                  product={item}
                  params={{ limit: 1, page: 1, idStatusProductInput: active.PUBLIC }}
                  className="border border-primary"
                ></ProductItem>
              ))}
            </ProductList>
          </div>
        </div>
      )}

      {!product && (
        <div className="w-10 h-10 mt-10 border-2 border-dashboardSecondary border-t-transparent rounded-full animate-spin mx-auto"></div>
      )}
    </>
  );
}
