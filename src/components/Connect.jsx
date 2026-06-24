import { Mail, Phone, MapPin } from "lucide-react";

const Connect = () => {
  return (
    <div id="connect" className="min-h-screen bg-[#020617] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            style={{ fontSize: "32px" }}
            className="md:text-5xl text-white font-bold"
          >
            Let's{" "}
            <span className="text-purple-500 border-b-2 border-purple-500 ">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4">
              <Mail className="text-purple-400" size={28} />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">vivekk@gmail.com</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4">
              <Phone className="text-purple-400" size={28} />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+91 99999 99999</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4">
              <MapPin className="text-purple-400" size={28} />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">Bhopal , India</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="mb-5">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="mb-5">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-[#0f172a] text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
