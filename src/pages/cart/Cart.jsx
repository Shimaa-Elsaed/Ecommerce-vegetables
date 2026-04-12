import React from "react";

const Cart = ({ cart, setCart }) => {
  // 👇 نحسب السعر الإجمالي (price * qty لكل منتج)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 👇 زيادة الكمية
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 } // نزود 1
          : item,
      ),
    );
  };

  // 👇 تقليل الكمية
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 } // نقلل 1
            : item,
        )
        .filter((item) => item.qty > 0), // لو بقى صفر نشيله
    );
  };

  // 👇 حذف منتج بالكامل
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 👇 عنوان الصفحة */}
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {/* 👇 لو السلة فاضية */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">السلة فاضية 🛒</p>
      ) : (
        <>
          {/* 👇 عرض المنتجات */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                {/* 👇 صورة المنتج */}
                <img src={item.img} className="w-24 h-24 object-contain" />

                {/* 👇 تفاصيل المنتج */}
                <div className="flex-1 px-4 text-center md:text-left">
                  <h2 className="font-semibold text-lg">{item.name}</h2>

                  <p className="text-green-600 font-bold">${item.price}</p>
                </div>

                {/* 👇 التحكم في الكمية */}
                <div className="flex items-center gap-3">
                  {/* زرار تقليل */}
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  {/* عرض الكمية */}
                  <span className="font-bold">{item.qty}</span>

                  {/* زرار زيادة */}
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* 👇 السعر الكلي للمنتج */}
                <div className="w-24 text-center font-semibold">
                  ${item.price * item.qty}
                </div>

                {/* 👇 حذف المنتج */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>

          {/* 👇 الإجمالي */}
          <div className="mt-8 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total:</h2>

            <span className="text-2xl text-green-600 font-bold">
              ${totalPrice}
            </span>
          </div>

          {/* 👇 زرار الدفع */}
          <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
