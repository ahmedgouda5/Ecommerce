import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Catrgories from "./components/Catrgories/Catrgories";
import Brands from "./components/Brands/Brands";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import Login from "./components/Login/Login";
import Register from "./components/regregister/Register";
import Details from "./Details/Details";
import TokenContextProvider from "./Context/TokenContext";
import { ProtectedRouts } from "./components/ProtectedRouts/ProtectedRouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartContextProvider } from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/Checkout/Checkout";
import Allorders from "./components/Allorders/Allorders";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import VerifyCode from "./VerifyCode/VerifyCode";
import ResetPassword from "./ResetPassword/ResetPassword";
import WishList from "./WishList/WishList";
import SubCatagories from "./components/SubCatagories/SubCatagories";
import UserContextProvider from "./Context/Usercontext";

const queryClient = new QueryClient();

let routs = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Cart",
        element: (
          <ProtectedRouts>
            <Cart />
          </ProtectedRouts>
        ),
      },
      {
        path: "Products",
        element: <Products />,
      },
      {
        path: "Catrgories",
        element: <Catrgories />,
      },
      {
        path: "SubCategories/:id",
        element: <SubCatagories />,
      },
      {
        path: "ForgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "Brands",
        element: <Brands />,
      },
      {
        path: "Checkout",
        element: (
          <ProtectedRouts>
            <Checkout />
          </ProtectedRouts>
        ),
      },
      {
        path: "WishList",
        element: (
          <ProtectedRouts>
            <WishList />
          </ProtectedRouts>
        ),
      },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "VerifyCode", element: <VerifyCode /> },
      { path: "ResetPassword", element: <ResetPassword /> },
      {
        path: "Details/:id",
        element: <Details />,
      },
      {
        path: "Allorders",
        element: (
          <ProtectedRouts>
            <Allorders />
          </ProtectedRouts>
        ),
      },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <TokenContextProvider>
              <RouterProvider router={routs} />
              <Toaster position="bottom-left" reverseOrder={false} />
            </TokenContextProvider>
          </QueryClientProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
