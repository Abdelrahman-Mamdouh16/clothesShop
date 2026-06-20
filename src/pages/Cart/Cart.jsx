import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function Cart() {
  const { cartItems, products, removeFromCart, updateQuantity } = useContext(ShopContext);

  const getCartItems = () => {
    return cartItems.map((item) => {
      const product = products.find((p) => p._id === item._id);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean);
  };

  const cartProducts = getCartItems();
  const subtotal = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  return (
    <div className="mt-10 mb-20">
      {/* Header */}
      <div className="flex items-center gap-3 mx-3 mb-10">
        <h1 className="text-3xl tracking-wider text-secondary dark:text-primary prata-regular">
          YOUR CART
        </h1>
        <span className="w-20 h-[2px] bg-secondary dark:bg-primary"></span>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mx-3">
        {/* Cart Items Section */}
        <div className="lg:col-span-8">
          {cartProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-primary-100">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-5 border-b border-gray-300 pb-4 mb-6">
                <p className="col-span-5 text-sm font-medium text-secondary dark:text-primary">
                  PRODUCT
                </p>
                <p className="col-span-2 text-sm font-medium text-secondary dark:text-primary">
                  PRICE
                </p>
                <p className="col-span-2 text-sm font-medium text-secondary dark:text-primary">
                  QUANTITY
                </p>
                <p className="col-span-3 text-sm font-medium text-secondary dark:text-primary">
                  TOTAL
                </p>
              </div>

              {/* Cart Items */}
              {cartProducts.map((item) => (
                <div key={item._id} className="grid grid-cols-12 gap-5 items-center border-b border-gray-200 py-5">
                  {/* Product Image & Name */}
                  <div className="col-span-5 flex gap-4 items-center">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-20 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-secondary dark:text-primary">
                        {item.name}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="col-span-2 text-secondary dark:text-primary">
                    ${item.price}
                  </p>

                  {/* Quantity */}
                  <div className="col-span-2 flex items-center gap-2 border border-gray-300 w-fit px-3 py-1">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="text-secondary dark:text-primary font-bold"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item._id, parseInt(e.target.value) || 1)}
                      className="w-8 text-center bg-transparent text-secondary dark:text-primary border-none outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="text-secondary dark:text-primary font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <p className="col-span-3 text-secondary dark:text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="col-span-12 text-right text-red-500 text-sm hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Totals Section */}
        <div className="lg:col-span-4">
          <div className="border border-gray-300 p-8">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl tracking-wider text-secondary dark:text-primary prata-regular">
                CART TOTALS
              </h2>
              <span className="w-12 h-[2px] bg-secondary dark:bg-primary"></span>
            </div>

            <div className="space-y-4 mb-8">
              {/* Subtotal */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <p className="text-gray-600 dark:text-primary-100">Subtotal</p>
                <p className="text-secondary dark:text-primary font-medium">
                  ${subtotal.toFixed(2)}
                </p>
              </div>

              {/* Shipping Fee */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <p className="text-gray-600 dark:text-primary-100">Shipping Fee</p>
                <p className="text-secondary dark:text-primary font-medium">
                  ${shippingFee.toFixed(2)}
                </p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-4">
                <p className="text-lg font-semibold text-secondary dark:text-primary">Total</p>
                <p className="text-lg font-semibold text-secondary dark:text-primary">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button className="w-full bg-secondary dark:bg-primary text-white dark:text-secondary px-6 py-3 text-sm font-semibold tracking-wider hover:opacity-80 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
