import React, { useState } from "react"; // 👈 استيراد React و useState
import { product } from "@/data/data"; // 👈 الداتا بتاعت المنتجات
import { bestimgs } from "@/assets/img"; // 👈 صورة البانر
import { Button } from "../ui/button"; // 👈 زرار جاهز
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // 👈 أيقونات الأسهم

const Bestsalles = ({ cart, setCart }) => {
  // 👇 الأقسام (الفلترة)
  const btn = [
    "All",
    "Deals Of the Day",
    "Drinks",
    "Milks",
    "Bread & Juice",
    "Beauty",
  ];

  const show = 4; // 👈 عدد المنتجات اللي هتظهر في كل مرة

  // 👇 state للتحكم في بداية السلايدر
  const [count, setCount] = useState(0);

  // 👇 state للقسم المختار
  const [visible, setVisible] = useState("All");

  // 👇 فلترة المنتجات حسب القسم
  const filter =
    visible === "All"
      ? product // 👈 لو All نعرض كله
      : product.filter(
          (item) =>
            item.bestsalles.trim().toLowerCase() ===
            visible.trim().toLowerCase(),
        );

  // 👇 زرار السابق (السلايدر)
  const prev = () => {
    if (count > 0) {
      setCount(count - 1); // 👈 نرجع خطوة
    } else {
      setCount(filter.length - show); // 👈 نلف من الأول للآخر
    }
  };

  // 👇 زرار التالي
  const next = () => {
    if (count + show < filter.length) {
      setCount(count + 1); // 👈 نتحرك لقدام
    } else {
      setCount(0); // 👈 نرجع للبداية
    }
  };

  // 👇 المنتجات اللي هتظهر حسب السلايدر
  const visibleitem = filter.slice(count, count + show);

  // 👇 إضافة للسلة
  const addToCart = (productItem) => {
    const exist = cart.find((item) => item.id === productItem.id);

    if (exist) {
      // 👈 لو موجود نزود الكمية
      setCart(
        cart.map((item) =>
          item.id === productItem.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      // 👈 لو جديد نضيفه
      setCart([...cart, { ...productItem, qty: 1 }]);
    }
  };

  return (
    <div className="my-6 px-4 md:px-8">
      {/* 👇 الهيدر */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        {/* 👇 العنوان + الأسهم */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl md:text-2xl font-bold">Daily Best Salles</h1>

          {/* 👇 أزرار السلايدر */}
          <div className="flex gap-2">
            <Button className="bg-green-500" onClick={prev}>
              <FaArrowLeft />
            </Button>

            <Button className="bg-green-500" onClick={next}>
              <FaArrowRight />
            </Button>
          </div>
        </div>

        {/* 👇 الفلترة */}
        <div className="flex gap-4 flex-wrap">
          {btn.map((item) => (
            <h1
              key={item}
              onClick={() => {
                setVisible(item); // 👈 نغير القسم
                setCount(0); // 👈 نرجع السلايدر لأول
              }}
              className={`cursor-pointer text-sm ${
                visible === item
                  ? "text-green-500 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item}
            </h1>
          ))}
        </div>
      </div>

      {/* 👇 المحتوى */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* 👇 البانر */}
        <div
          className="w-full lg:w-[300px] h-[260px] lg:h-[350px] rounded-2xl p-5 text-white"
          style={{
            backgroundImage: `url(${bestimgs})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-lg md:text-xl font-bold mb-3">
            Bring nature into your home
          </h1>

          <Button className="bg-green-500 text-sm">Shop Now</Button>
        </div>

        {/* 👇 المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          {visibleitem.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-2 relative bg-white flex flex-col justify-between"
            >
              {/* 👇 الخصم */}
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {item.discount}
              </span>

              {/* 👇 الجزء العلوي */}
              <div>
                <img src={item.img} className="w-full h-44 object-contain" />

                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>

                <h1 className="text-sm font-semibold line-clamp-2">
                  {item.name}
                </h1>
              </div>

              {/* 👇 الجزء السفلي */}
              <div className="mt-auto">
                <div className="flex gap-2 mt-1">
                  <span className="text-green-500 font-bold text-sm">
                    ${item.price}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
                    ${item.oldPrice}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-1">Sold: {item.sold}</p>

                {/* 👇 زرار الإضافة */}
                <Button
                  onClick={() => addToCart(item)}
                  className="mt-2 w-full bg-green-500 text-white py-1 text-sm"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestsalles;
