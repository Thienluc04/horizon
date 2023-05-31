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
import { CreateUser, ManageUser } from 'modules/user';
import { ManageOrder } from 'modules/order';
import { ManageProduct } from 'modules/product';

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
          <Route path="/dashboard/createUser" element={<CreateUser></CreateUser>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
