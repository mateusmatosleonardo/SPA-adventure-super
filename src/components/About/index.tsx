import { FaUsers, FaStar } from 'react-icons/fa';
import { IoLogoGameControllerA } from 'react-icons/io';

export function About() {
  return (
    <section className="flex justify-center items-start mt-10">
      <div className="flex flex-col gap-y-10 w-full max-w-[1084px] px-4">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-xl font-semibold text-blue-950">SOBRE O JOGO</h2>
          <div className="w-14 h-[3px] bg-green-600" />
        </div>
        <div className="w-full flex flex-col gap-x-5 gap-y-8 lg:flex-row">
          <div className='lg:w-[29%] shadow'>
            <div className="flex gap-y-2">
              <div className='p-6 bg-green-600'>
                <FaUsers size={32} color='#ffffff' className='bg-green-600' />
              </div>
              <div className='bg-green-50 flex items-center flex-1'>
                <span className='text-lg font-semibold text-blue-950 bg-green-50 px-4'>Totalmente multiplayer</span>
              </div>
            </div>
            <div className='bg-white px-6 py-8'>
              <span className='text-sm bg-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blr. Impedit, mollitia!
              </span>
            </div>
          </div>
          <div className='lg:w-[29%] shadow'>
            <div className="flex gap-y-2">
              <div className='p-6 bg-green-600'>
                <FaStar size={32} color='#ffffff' className='bg-green-600' />
              </div>
              <div className='bg-green-50 flex items-center flex-1'>
                <span className='text-lg font-semibold text-blue-950 bg-green-50 px-4'>Desafios toda semana!</span>
              </div>
            </div>
            <div className='bg-white px-6 py-8'>
              <span className='text-sm bg-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blr. Impedit, mollitia!
              </span>
            </div>
          </div>
          <div className='w-full flex-1 shadow'>
            <div className="flex gap-y-2">
              <div className='p-6 bg-green-600'>
                <IoLogoGameControllerA size={32} color='#ffffff' className='bg-green-600' />
              </div>
              <div className='bg-green-50 flex items-center flex-1'>
                <span className='text-lg font-semibold text-blue-950 bg-green-50 px-4'>Jogue em todas as plataformas possíveis</span>
              </div>
            </div>
            <div className='bg-white px-6 py-8'>
              <span className='text-sm bg-white'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blr. Impedit, mollitia dasndandawjd adjas dad ad didwdwdw!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}