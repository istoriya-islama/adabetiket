import { RiTelegram2Fill } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className='w-full mx-auto bg-transparent'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 p-4 sm:p-5 mt-6 sm:mt-8 md:mt-10'>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-sm sm:text-base md:text-lg text-shadow hover:text-shadow'>
            Спасибо за чтение
          </p>

          <a
            href='https://t.me/adab_etiket/'
            className='shadow-amber-600/50 shadow-2xl transition-transform duration-75 hover:scale-110 flex-shrink-0'
          >
            <RiTelegram2Fill
              color='white'
              className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
