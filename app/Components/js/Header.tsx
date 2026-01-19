import Link from 'next/link'
import { GoSearch } from 'react-icons/go'

export default function Header() {
  return (
    <header className='w-full bg-transparent p-3 sm:p-4'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between gap-2 sm:gap-4'>
          {/* Логотип */}
          <h1 className='text-base sm:text-lg md:text-xl font-bold uppercase text-shadow-super whitespace-nowrap'>
            Адаб - этикет
          </h1>

          {/* Навигация - скрываем на мобильных */}
          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-6 xl:gap-12'>
              <li>
                <Link
                  href='/'
                  className='cursor-pointer transition duration-200 hover:border-b text-shadow hover:scale-110'
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href='/pages/page'
                  className='cursor-pointer transition duration-200 hover:border-b text-shadow hover:scale-110'
                >
                  Статьи
                </Link>
              </li>
              <li>
                <Link
                  className='border border-solid animate-pulse px-3 py-2 rounded-xl bg-amber-900 cursor-pointer transition-colors duration-500 hover:border-amber-900/50 hover:text-gray-200/90 shadow-2xl shadow-amber-900/50 whitespace-nowrap'
                  href='https://t.me/adab_etiket'
                >
                  Зайди к нам
                </Link>
              </li>
            </ul>
          </nav>

          {/* Иконка поиска */}
          <Link
            href='/pages/search'
            className='shadow-super transition-transform duration-75 hover:rotate-12 sm:hover:rotate-30 md:hover:rotate-40 hover:scale-110 sm:hover:scale-120 flex-shrink-0'
          >
            <GoSearch
              color='white'
              className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7'
            />
          </Link>
        </div>

        {/* Мобильная навигация - показываем только на маленьких экранах */}
        <nav className='lg:hidden mt-3 sm:mt-4'>
          <ul className='flex items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base'>
            <li>
              <Link
                href='/'
                className='cursor-pointer transition duration-200 hover:border-b text-shadow'
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                href='/pages/page'
                className='cursor-pointer transition duration-200 hover:border-b text-shadow'
              >
                Статьи
              </Link>
            </li>
            <li>
              <Link
                className='border border-solid animate-pulse px-2 py-1 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl bg-amber-900 cursor-pointer transition-colors duration-500 text-xs sm:text-sm whitespace-nowrap'
                href='https://t.me/adab_etiket'
              >
                Telegram
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
