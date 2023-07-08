import Image from "next/image";

interface DepoimentsProps {
  testimony: string;
  author: string;
}

export function Depoiments({ testimony, author }: DepoimentsProps) {
  return (
    <div className="flex justify-center items-center bg-white shadow-md p-7 rounded-sm">
      <div className="flex flex-col justify-start items-start gap-y-4 bg-white">
        <div className="flex justify-between items-start bg-white gap-x-4 lg:gap-x-8">
          <span className="italic bg-white font-medium">
            {testimony}
          </span>
          <Image
            src="/quote.png"
            width={52}
            height={52}
            alt="quote"
            className="bg-white"
          />
        </div>
        <span className="bg-white font-semibold text-green-600">
          {author}
        </span>
      </div>
    </div>
  )
}