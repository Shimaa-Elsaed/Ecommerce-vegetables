import React, { useState } from "react"; // 👈 استيراد React و useState
import { product } from "@/data/data"; // 👈 استيراد الداتا (المنتجات)

const Products = ({ cart, setCart }) => {
  // 👇 state علشان نحدد القسم اللي المستخدم اختاره
  const [visible, setVisible] = useState("All");

  // 👇 الأقسام اللي هتظهر في الفلترة
  const categories = [
    "All",
    "Backing Material",
    "Fresh Fruits",
    "Meats",
    "Vegetables",
    "Snacks",
  ];

  // 👇 فلترة المنتجات حسب القسم المختار
  const filterdata =
    visible === "All" // 👈 لو مختار All
      ? product // 👈 هات كل المنتجات
      : product.filter((item) => item.desc === visible); // 👈 غير كده فلتر

  // 👇 دالة إضافة المنتج للسلة
  const addToCart = (productItem) => {
    // 👇 نشوف المنتج موجود في السلة ولا لأ
    const exist = cart.find((item) => item.id === productItem.id);

    if (exist) {
      // 👇 لو موجود نزود الكمية
      setCart(
        cart.map(
          (item) =>
            item.id === productItem.id
              ? { ...item, qty: item.qty + 1 } // 👈 نزود 1
              : item, // 👈 باقي المنتجات زي ما هي
        ),
      );
    } else {
      // 👇 لو المنتج جديد
      setCart([...cart, { ...productItem, qty: 1 }]); // 👈 نضيفه بكمية 1
    }
  };

  return (
    <div className="px-4 md:px-8 py-6">
      {/* 👇 الهيدر (العنوان + الفلترة) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* 👇 عنوان */}
        <h1 className="text-xl md:text-2xl font-semibold">Popular Products</h1>

        {/* 👇 أزرار الفلترة */}
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat, index) => (
            <span
              key={index} // 👈 مهم في map
              onClick={() => setVisible(cat)} // 👈 لما نضغط نغير القسم
              className={`cursor-pointer text-sm transition ${
                visible === cat
                  ? "text-green-500 font-semibold border-b-2 border-green-500" // 👈 لو مختار
                  : "text-gray-500" // 👈 لو مش مختار
              }`}
            >
              {cat} {/* 👈 اسم القسم */}
            </span>
          ))}
        </div>
      </div>

      {/* 👇 عرض المنتجات */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filterdata.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-3 hover:shadow-lg transition relative"
          >
            {/* 👇 الخصم */}
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              {item.discount}
            </span>

            {/* 👇 صورة المنتج */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-contain"
            />

            {/* 👇 نوع المنتج */}
            <p className="text-xs text-gray-400 mt-2">{item.category}</p>

            {/* 👇 اسم المنتج */}
            <h3 className="text-sm font-medium mt-1 line-clamp-2">
              {item.name}
            </h3>

            {/* 👇 السعر */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-600 font-semibold">
                ${item.price}
              </span>

              <span className="text-xs text-gray-400 line-through">
                ${item.oldPrice}
              </span>
            </div>

            {/* 👇 زرار الإضافة */}
            <button
              onClick={() => addToCart(item)} // 👈 لما نضغط نضيف للسلة
              className="mt-3 w-full bg-green-100 text-green-600 py-1 rounded hover:bg-green-200 transition"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
