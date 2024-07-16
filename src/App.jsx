import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import Layout from "./components/layout/layout";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import ProutectedRoute from "./components/ProutectReact/ProutectedRoute";
import UserProvider from "./Context/Context";
import Forget from "./pages/forget/Forget";
import Code from "./pages/verfiyCode/Code";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./Context/Cart.Context";
import Checkout from "./pages/checkout/checkout";
import Category from "./pages/category/Category";
import Product from "./pages/product/product";
import Brand from "./pages/brand/Brand";
import WishlistProvider from "./Context/Wishlist.context";
import Wishlist from "./pages/wishlist/Wishlist";
import AllOrders from "./pages/AllOrders/AllOrders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Reset from "./pages/rest/Reset";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProutectedRoute>
              <Home />
            </ProutectedRoute>
          ),
        },
        { path: "/category/:id", element: <Category /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/product", element: <Product /> },
        { path: "/brand", element: <Brand /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/allorders", element: <AllOrders /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/cart", element: <Cart /> },
        { path: "*", element: <Error /> },
      ],
    },
    {
      path: "/auth",
      element: <Layout />,
      children: [
        { path: "Login", element: <Login /> },
        { path: "signup", element: <Register /> },
        { path: "forget", element: <Forget /> },
        { path: "code", element: <Code /> },
        { path: "reset", element: <Reset /> },
      ],
    },
  ]);


  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CartProvider>
            <WishlistProvider>
              <RouterProvider router={routes}></RouterProvider>
              <Toaster />
            </WishlistProvider>
          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
