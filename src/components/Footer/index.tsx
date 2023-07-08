import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="flex justify-center items-center mt-20 bg-green-50">
      <div className="flex flex-col justify-between items-center gap-y-10 px-4 py-6 w-full max-w-[1084px] md:flex-row bg-green-50">
        <a href="">
          <Image
            src="/logo.png"
            width={150}
            height={120}
            alt="Logo"
            className="bg-green-50"
          />
        </a>
        <div className="flex justify-center items-center gap-x-4 bg-green-50">
          <a href="">
            <FaFacebookSquare size={30} color="#515050" className="bg-green-50" />
          </a>
          <a href="">
            <FaInstagram size={30} color="#515050" className="bg-green-50" />
          </a>
          <a href="">
            <FaTwitter size={30} color="#515050" className="bg-green-50" />
          </a>
        </div>
        <span className="text-black bg-green-50">Desenvolvido por <span className="text-black font-medium bg-green-50">Mateus</span></span>
      </div>
    </footer>
  )
}