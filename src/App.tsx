import { MainLayout } from "components/layout";
import "./App.scss";
import { Route, Routes } from "react-router";
import HomePage from "pages/HomePage";
import NotFountPage from "pages/NotFoundPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFountPage></NotFountPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;