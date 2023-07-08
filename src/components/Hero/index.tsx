import Image from "next/image";
import { Depoiments } from "../Depoiments";

export function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col justify-between items-center gap-y-10 w-full max-w-[1084px] p-4 lg:flex-row">
        <div className="flex flex-col justify-start items-start gap-y-6 w-full max-w-[450px]">
          <h2 className="text-3xl text-blue-950 font-bold">Desafie seus amigos nesse multiplayer repleto de aventuras.</h2>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dolores, quas vero nobis maiores asperiores deleniti facilis totam.
            Fuga excepturi maiores pariatur reiciendis qui assumenda veniam nam repudiandae sequi rem!
          </span>
          <div className="flex justify-start items-center gap-x-4">
            <a href="">
              <Image
                src="/googleplay.png"
                width={120}
                height={120}
                alt="Googleplay logo"
              />
            </a>
            <a href="">
              <Image
                src="/appstore.png"
                width={120}
                height={120}
                alt="AppStore logo"
              />
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/hero.jpg"
            width={420}
            height={420}
            alt="Hero image"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-10 w-full max-w-[1084px] p-4 lg:gap-x-10 lg:gap-y-0 lg:grid-cols-2 mt-10">
        <Depoiments
          testimony="O melhor jogo do ano! Incrível como consigo aprender e me divertir ao mesmo tempo!"
          author="Geovani - App Store"
        />
        <Depoiments
          testimony="Não consigo parar de jogar! É tão envolvente, os desafios são muito divertidos!!"
          author="Luciana - Play Store"
        />
      </div>
    </section>
  )
}