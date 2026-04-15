import { trends } from "@/assets/img";
import { blogteams } from "@/assets/img";
import { blogheaders } from "@/assets/img";
import { blogheros } from "@/assets/img";
export default function BlogDetails() {
  return (
    <div className="bg-[#f7f8fa] min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          {/* Title */}
          <h1 className="text-green-500 ">Recipes</h1>
          <h1 className="text-3xl font-bold leading-snug mb-4">
            Best smartwatch 2022: the top wearables you can buy today
          </h1>

          {/* Author */}
          <div className="flex gap-2">
            <img src={blogteams[3]} className="w-8" />
            <p className="text-sm text-gray-400 mb-4">
              By Admin • 3 hours ago • 4 views
            </p>
          </div>

          {/* Hero Image */}
          <img
            src={blogheros}
            alt=""
            className="w-full h-[320px] object-cover rounded-xl mb-6"
          />

          {/* Text */}
          <p className="text-gray-600 leading-relaxed mb-4">
            Helping everyone live happier, healthier lives at home through their
            kitchen. Kitchen is a daily food magazine on the web celebrating
            life in the kitchen through home cooking and kitchen intelligence.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We've reviewed and ranked all of the best smartwatches on the market
            right now, and we've made a definitive list of the top 10 devices
            you can buy today. One of the 10 picks below may just be your
            perfect next smartwatch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Those top-end wearables span from the Apple Watch to Fitbits, Garmin
            watches to Tizen-sporting Samsung watches. There's also Wear OS
            which is Google's own wearable operating system in the vein of
            Apple's watchOS - you’ll see it show up in a lot of these devices.
          </p>

          {/* Subtitle */}
          <h2 className="text-xl font-semibold mb-3">
            Lorem ipsum dolor sit amet cons
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Throughout our review process, we look at the design, features,
            battery life, spec, price and more for each smartwatch, rank it
            against the competition and enter it into the list you'll find
            below.
          </p>

          {/* Images */}
          <div className="">
            <img src={blogheaders} />
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6">
            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet
            euismod et diam quis aliquam consequat porttitor integer a nisl, in
            faucibus nunc et aenean turpis dui dignissim nec scelerisque
            ullamcorper eu neque, augue quam quis lacus pretium eros est amet
            turpis nunc in turpis massa et eget facilisis ante molestie
            penatibus dolor volutpat, porta pellentesque scelerisque at ornare
            dui tincidunt cras feugiat tempor lectus
          </p>

          {/* Quote */}
          <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded-lg mb-6">
            <p className="text-gray-700 italic">
              diam elementum imperdiet. Etiam accumsan semper nisl eu congue.
              Sed aliquam magna erat, ac eleifend lacus rhoncus in.
            </p>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
            enim, libero sit. Est donec lobortis cursus amet, cras elementum
            libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu,
            sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo
            mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl,
            odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi
            rhoncus elit sit sit.{" "}
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Category</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between">
                Milk & Dairies <span>2</span>
              </li>
              <li className="flex justify-between">
                Clothing <span>5</span>
              </li>
              <li className="flex justify-between">
                Pet Foods <span>3</span>
              </li>
              <li className="flex justify-between">
                Baking material <span>4</span>
              </li>
              <li className="flex justify-between">
                Fresh Fruit <span>6</span>
              </li>
            </ul>
          </div>

          {/* Trending */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Trending Now</h3>

            {trends.slice(0, 4).map((img, i) => (
              <div key={i} className="flex gap-8 mb-4 items-center">
                <img src={img} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium">Product {i + 1}</p>
                  <p className="text-xs text-gray-400">$25</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {trends.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-16 object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Cabbage", "Broccoli", "Smoothie", "Fruit", "Salad"].map(
                (tag, i) => (
                  <h1
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </h1>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
