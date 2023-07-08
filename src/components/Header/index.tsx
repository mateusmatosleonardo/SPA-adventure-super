import Image from "next/image"

export function Header() {
  return (
    <header className="flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-[1084px] p-4">
        <a href="">
          <Image
            src="/logo.png"
            width={150}
            height={120}
            alt="Logo"
          />
        </a>
        <nav className="hidden  md:visible md:flex md:items-center md:gap-x-8">
          <ul className="flex items-center gap-x-14">
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Depoimentos</a>
            </li>
          </ul>
          <button
            className="text-white text-sm px-10 py-2"
            style={{ backgroundColor: "#30851d" }}
          >
            BAIXAR AGORA!
          </button>
        </nav>
      </div>
    </header>
  )
}