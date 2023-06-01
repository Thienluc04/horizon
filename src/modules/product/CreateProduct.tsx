import { Button } from 'components/button';
import { Input } from 'components/input';
import { Textarea } from 'components/textarea';
import { useForm } from 'react-hook-form';

export interface CreateProductProps {}

export function CreateProduct(_: CreateProductProps) {
  const { control } = useForm({ mode: 'onSubmit' });
  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
      <h1 className="text-2xl font-semibold leading-7">Create New Product</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">
            Home {'>'} All Products {'>'} Create Product
          </p>
        </div>
      </div>
      <div className="p-6 bg-white rounded-2xl flex gap-12">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-dashboardPrimary">Product Name</h2>
            <Input
              control={control}
              name="name"
              placeholder="Product name"
              type="text"
              className="!border-dashboardPrimary text-dashboardPrimary "
            ></Input>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-dashboardPrimary">Description</h2>
            <Textarea
              control={control}
              name="description"
              placeholder="Product description"
            ></Textarea>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-dashboardPrimary">Category</h2>
            <Input
              control={control}
              name="category"
              placeholder="Category"
              type="text"
              className="!border-dashboardPrimary text-dashboardPrimary "
            ></Input>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-dashboardPrimary">Brand Name</h2>
            <Input
              control={control}
              name="brand"
              placeholder="Brand name"
              type="text"
              className="!border-dashboardPrimary text-dashboardPrimary "
            ></Input>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-xl font-bold text-dashboardPrimary">SKU</h2>
              <Input
                control={control}
                name="sku"
                placeholder="Sku"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-xl font-bold text-dashboardPrimary">Stock Quantity</h2>
              <Input
                control={control}
                name="quantity"
                placeholder="Stock quantity"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-xl font-bold text-dashboardPrimary">Regular Price</h2>
              <Input
                control={control}
                name="regularPrice"
                placeholder="Regular Price"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-xl font-bold text-dashboardPrimary">Sale Price</h2>
              <Input
                control={control}
                name="salePrice"
                placeholder="Sale Price"
                type="text"
                className="!border-dashboardPrimary text-dashboardPrimary "
              ></Input>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[500px] mx-auto flex flex-col gap-6">
            <div>
              <img src="/images/shoe-large.png" alt="" className="mx-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-dashboardPrimary">Product Gallery</h2>
              <div className="p-4 border border-dashboardPrimary border-dashed flex flex-col items-center gap-2 rounded-lg">
                <span className="mb-2">
                  <svg
                    width="51"
                    height="44"
                    viewBox="0 0 51 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.5 0.5H3.5C2.57174 0.5 1.6815 0.868749 1.02513 1.52513C0.368749 2.1815 0 3.07174 0 4V40C0 40.9283 0.368749 41.8185 1.02513 42.4749C1.6815 43.1312 2.57174 43.5 3.5 43.5H47.5C48.4283 43.5 49.3185 43.1312 49.9749 42.4749C50.6312 41.8185 51 40.9283 51 40V4C51 3.07174 50.6312 2.1815 49.9749 1.52513C49.3185 0.868749 48.4283 0.5 47.5 0.5ZM3.5 3.5H47.5C47.6326 3.5 47.7598 3.55268 47.8536 3.64645C47.9473 3.74021 48 3.86739 48 4V32.375L39.975 24.35C39.3154 23.6996 38.4263 23.335 37.5 23.335C36.5737 23.335 35.6846 23.6996 35.025 24.35L29.85 29.525C29.8055 29.5735 29.7514 29.6122 29.6912 29.6387C29.6309 29.6652 29.5658 29.6789 29.5 29.6789C29.4342 29.6789 29.3691 29.6652 29.3088 29.6387C29.2486 29.6122 29.1945 29.5735 29.15 29.525L17.975 18.35C17.3154 17.6996 16.4263 17.335 15.5 17.335C14.5737 17.335 13.6846 17.6996 13.025 18.35L3 28.375V4C3 3.86739 3.05268 3.74021 3.14645 3.64645C3.24021 3.55268 3.36739 3.5 3.5 3.5ZM47.5 40.5H3.5C3.36739 40.5 3.24021 40.4473 3.14645 40.3536C3.05268 40.2598 3 40.1326 3 40V32.625L15.15 20.475C15.1945 20.4265 15.2486 20.3878 15.3088 20.3613C15.3691 20.3348 15.4342 20.3211 15.5 20.3211C15.5658 20.3211 15.6309 20.3348 15.6912 20.3613C15.7514 20.3878 15.8055 20.4265 15.85 20.475L27.025 31.65C27.6846 32.3004 28.5737 32.665 29.5 32.665C30.4263 32.665 31.3154 32.3004 31.975 31.65L37.15 26.475C37.1945 26.4265 37.2486 26.3878 37.3088 26.3613C37.3691 26.3348 37.4342 26.3211 37.5 26.3211C37.5658 26.3211 37.6309 26.3348 37.6912 26.3613C37.7514 26.3878 37.8055 26.4265 37.85 26.475L48 36.625V40C48 40.1326 47.9473 40.2598 47.8536 40.3536C47.7598 40.4473 47.6326 40.5 47.5 40.5ZM30.725 16.775C30.4922 16.5422 30.3081 16.2653 30.1836 15.9606C30.0591 15.6558 29.9967 15.3292 30 15C30 14.337 30.2634 13.7011 30.7322 13.2322C31.2011 12.7634 31.837 12.5 32.5 12.5C33.163 12.5 33.7989 12.7634 34.2678 13.2322C34.7366 13.7011 35 14.337 35 15C35 15.663 34.7366 16.2989 34.2678 16.7678C33.7989 17.2366 33.163 17.5 32.5 17.5C32.1708 17.5033 31.8442 17.4409 31.5394 17.3164C31.2347 17.1919 30.9578 17.0078 30.725 16.775Z"
                      fill="#4A69E2"
                    />
                  </svg>
                </span>
                <p>Drop your imager here, or browse</p>
                <p>Jpeg, png are allowed</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {new Array(3).fill(0).map((_, index) => (
                <div key={index} className="flex p-4 gap-4 mx-auto items-center">
                  <div>
                    <img src="/images/shoe1.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-dashboardPrimary">Product thumbnail.png</p>
                    <span>
                      <svg
                        width="289"
                        height="4"
                        viewBox="0 0 289 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="289" height="4" rx="2" fill="#4A69E2" />
                        <rect width="137" height="4" rx="2" fill="#4A69E2" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6156 22.0234L13.616 22.0234C13.7626 22.0211 13.9071 21.9873 14.0395 21.9243C14.1719 21.8613 14.2893 21.7705 14.3836 21.6582L22.7836 11.6582L22.7656 11.6431L22.7838 11.6579C22.9537 11.4496 23.0349 11.1827 23.0096 10.915C22.9844 10.6474 22.8549 10.4003 22.649 10.2274C22.4431 10.0545 22.1774 9.9695 21.9094 9.99085C21.6414 10.0122 21.3925 10.1382 21.2166 10.3415L21.2164 10.3418L13.5719 19.4405L10.7597 16.316C10.7596 16.3159 10.7595 16.3158 10.7595 16.3158C10.6706 16.2124 10.5621 16.1278 10.4401 16.0669C10.318 16.0061 10.185 15.9702 10.0489 15.9614C9.9128 15.9527 9.77631 15.9712 9.64746 16.016C9.51861 16.0607 9.40001 16.1308 9.29862 16.222C9.19723 16.3132 9.1151 16.4238 9.05706 16.5473C8.99902 16.6707 8.96624 16.8045 8.96065 16.9408C8.95505 17.0771 8.97676 17.2131 9.02449 17.3409C9.07218 17.4686 9.14491 17.5854 9.23839 17.6846C9.23845 17.6847 9.23851 17.6848 9.23857 17.6848L12.8382 21.6844C12.9341 21.7911 13.0514 21.8764 13.1824 21.9348C13.3135 21.9932 13.4553 22.0234 13.5987 22.0234L13.6156 22.0234ZM3.02344 16C3.02344 8.84482 8.84482 3.02344 16 3.02344C23.1552 3.02344 28.9766 8.84482 28.9766 16C28.9766 23.1552 23.1552 28.9766 16 28.9766C8.84482 28.9766 3.02344 23.1552 3.02344 16Z"
                        fill="#4A69E2"
                        stroke="#4A69E2"
                        strokeWidth="0.046875"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-10 gap-4 justify-center">
            <Button kind="dashboard" className="w-[140px] h-12 uppercase">
              Create
            </Button>
            <Button kind="dashboard" className="w-[140px] h-12 uppercase bg-[#D00000]">
              Delete
            </Button>
            <Button
              kind="dashboard"
              className="w-[140px] h-12 uppercase bg-white !text-dashboardPrimary border-solid !border-dashboardPrimary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
