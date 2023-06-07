import { Link } from 'react-router-dom';

export interface NotFountPageProps {}

export default function NotFountPage({}: NotFountPageProps) {
  return (
    <div className="max-w-[1180px] mx-auto my-10">
      <img src="/not-found.png" width={200} height={200} alt="" className="mx-auto" />
      <h2 className=" text-center text-3xl mt-10">This page is not found</h2>
      <Link to={'/'} className="text-center text-primary block mt-5 text-xl">
        Home
      </Link>
    </div>
  );
}
