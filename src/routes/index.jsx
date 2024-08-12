import Login from "../pages/login";
import Checkout from "../pages/checkout-page";
// import Cart from "../pages/cart-page";
import Home from "../pages/homepage";
import ProductdetailPage from "../pages/productDetail";
import Signup from "../pages/signup";
import Wishlist from "../pages/wishlist-page";
import Cart from "../pages/cart-page";
// import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout-page/layout";
import Electronics from "../Components/ProductCategory";
import CategoryItems from "../Components/CategoryItems";

// import Product from "../Components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,

        errorElement: <div>error</div>,
      },
      {
        // path: "/product",
        // element: <Product />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/category/:category",
        element: <CategoryItems />,
      },
      {
        path: "productDetails",
        element: <ProductdetailPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
