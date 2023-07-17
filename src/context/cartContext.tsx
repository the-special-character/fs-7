import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import axiosInstance from "../axiosInstance.js";
import { useAuth } from "./authContext.tsx";

type CartContextType = {};

export const CartContext = createContext<CartContextType>();

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  console.log("user from cart provider", user?.user?.id);

  const loadCart = useCallback(async () => {
    try {
      const url = "660/cart";
      const res = await axiosInstance.get(url);
      setCart(res);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const addToCart = useCallback(
    async (data) => {
      try {
        const userId = user?.user?.id;
        const url = "660/cart";
        const res = await axiosInstance.post(url, { ...data, userId });
        setCart((val) => [...val, res]);
        //   setCart(res);
      } catch (error) {
        //   console.log(error.message);
      }
    },
    [user?.user?.id]
  );

  const value = useMemo(
    () => ({ cart, loadCart, addToCart }),
    [cart, loadCart, addToCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
