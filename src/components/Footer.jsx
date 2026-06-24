import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp,FaHeart} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-purple-500/20 py-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">

          <a
            href="https://github.com/webdev-vivek"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/vivek-kumar-125a44333"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://instagram.com/vivek__k__sharma"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaInstagram size={24} />
          </a>

        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-6">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#contact" className="hover:text-purple-400">Connect</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart size={16} className="text-purple-400" />
            by <span className="text-purple-400 font-medium">Vivek Kumar</span>
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;