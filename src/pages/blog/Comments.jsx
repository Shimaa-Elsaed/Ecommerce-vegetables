import { blogteams } from "@/assets/img";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Comments() {
  return (
    <div className="mt-12 px-12 md:px-8 lg:px-20">
      {" "}
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        {/* TAGS */}
        <div className="flex gap-3">
          {["deer", "nature", "conserve"].map((tag, i) => (
            <span
              key={i}
              className="bg-green-700 text-white text-xs px-4 py-2 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* SHARE LINKS */}
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>Share this:</span>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
      {/* AUTHOR BOX */}
      <div className="flex gap-4 items-start mb-12">
        <img
          src={blogteams[0]}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-lg">Barbara Cartland</h3>
          <p className="text-sm text-gray-400 mb-2">306 posts • Since 2012</p>

          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Hi there, I am a veteran food blogger sharing my daily all kinds of
            healthy and fresh recipes. I find inspiration in nature, on the
            streets and almost everywhere...
          </p>
        </div>
      </div>
      {/* LEAVE COMMENT */}
      <h2 className="text-2xl font-semibold mb-6">Leave a Comment</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input className="border p-3 rounded-lg text-sm" placeholder="Name" />
          <input
            className="border p-3 rounded-lg text-sm"
            placeholder="Email"
          />
        </div>

        <input
          className="w-full border p-3 rounded-lg text-sm mb-4"
          placeholder="Website"
        />

        <textarea
          rows="4"
          className="w-full border p-3 rounded-lg text-sm mb-4"
          placeholder="Comment"
        />

        <button className="bg-green-700 text-white px-6 py-2 rounded-lg text-sm">
          Post Comment
        </button>
      </div>
      {/* COMMENTS */}
      <h2 className="text-2xl font-semibold mb-6">Comments</h2>
      <div className="space-y-10">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex gap-4">
            {/* IMAGE */}
            <img
              src={blogteams[i]}
              className="w-14 h-14 rounded-full object-cover"
            />

            {/* TEXT */}
            <div>
              <p className="text-xs text-gray-400 mb-1">
                December 4, 2022 at 3:12 pm
              </p>

              <h4 className="font-semibold text-sm mb-1">
                {i === 0 ? "Sienna" : i === 1 ? "Brenna" : "Gemma"}
              </h4>

              {/* SMALL TEXT */}
              <p className="text-gray-500 text-sm mb-1">
                Short preview text goes here...
              </p>

              {/* BIG TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus suscipit exercitationem accusantium obcaecati quos
                voluptate nesciunt facilis itaque modi commodi dignissimos...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
