import { DashboardLayout, MainLayout } from 'components/layout';
import './App.scss';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/HomePage';
import NotFountPage from 'pages/NotFoundPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import ProfilePage from 'pages/ProfilePage';
import ChangePassPage from 'pages/ChangePassPage';
import { DashboardHome } from 'modules/dashboard';
import { UpdateUser, CreateUser, ManageUser } from 'modules/user';
import { ManageOrder, ManageOrderDetails } from 'modules/order';
import { CreateProduct, ManageProduct, ManageProductDetails } from 'modules/product';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFountPage></NotFountPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>

        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="/profile/password" element={<ChangePassPage></ChangePassPage>}></Route>
        </Route>

        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
          <Route path="/dashboard/products" element={<ManageProduct></ManageProduct>}></Route>
          <Route path="/dashboard/orders" element={<ManageOrder></ManageOrder>}></Route>
          <Route path="/dashboard/users" element={<ManageUser></ManageUser>}></Route>

          <Route path="/dashboard/users/createUser" element={<CreateUser></CreateUser>}></Route>
          <Route path="/dashboard/users/:slug" element={<UpdateUser></UpdateUser>}></Route>

          <Route
            path="/dashboard/orders/:slug"
            element={<ManageOrderDetails></ManageOrderDetails>}
          ></Route>

          <Route
            path="/dashboard/products/:slug"
            element={<ManageProductDetails></ManageProductDetails>}
          ></Route>
          <Route
            path="/dashboard/products/createProduct"
            element={<CreateProduct></CreateProduct>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
