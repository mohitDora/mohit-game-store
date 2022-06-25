import { loadStripe } from "@stripe/stripe-js";

let stripePromise=null;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LE8xUSI6iZUdFLa5QO8fggp6lWX017YUbuGwF05tammr8UTHA7rqQrBNDI0sWaku1Sn4c8OuJGOKdYdThkgguRE0079UJEz5U');
  }

  return stripePromise;
}

export default getStripe;