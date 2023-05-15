import { Link } from "react-router-dom";

export interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <div>
      <div className="xl:flex hidden justify-between max-w-[1180px] mx-auto my-10">
        <div className="flex flex-col gap-4">
          <Link to={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
          <p className="text-gray6 max-w-[276px]">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex gap-2">
            <img src="/images/facebook-icon.svg" alt="" />
            <img src="/images/twitter-icon.svg" alt="" />
            <img src="/images/linkedin-icon.svg" alt="" />
            <img src="/images/instagram-icon.svg" alt="" />
            <img src="/images/youtube-icon.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>About</p>
          <div className="flex flex-col gap-1 text-gray5">
            <a href="/">About Us</a>
            <a href="/">Find store</a>
            <a href="/">Categories</a>
            <a href="/">Blogs</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Partnership</p>
          <div className="flex flex-col gap-1 text-gray5">
            <a href="/">About Us</a>
            <a href="/">Find store</a>
            <a href="/">Categories</a>
            <a href="/">Blogs</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Information</p>
          <div className="flex flex-col gap-1 text-gray5">
            <a href="/">Help Center</a>
            <a href="/">Money Refund</a>
            <a href="/">Shipping</a>
            <a href="/">Contact us</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>For users</p>
          <div className="flex flex-col gap-1 text-gray5">
            <a href="/">Login</a>
            <a href="/">Register</a>
            <a href="/">Settings</a>
            <a href="/">My Orders</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Get app</p>
          <div className="flex flex-col gap-2">
            <img src="/images/apple-store.png" alt="" />
            <img src="/images/google-play.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gray2 p-7 border-t border-t-gray3">
        <div className="max-w-[1180px] mx-auto flex justify-between items-center">
          <p>© 2023 Ecommerce. </p>
          <div className="flex gap-2">
            <img src="/images/america-icon.svg" alt="" />
            <span>English</span>
            <img src="/images/arrow-up.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
