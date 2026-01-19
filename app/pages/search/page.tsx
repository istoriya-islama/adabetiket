'use client'

import { FaAngleDown } from "react-icons/fa";
import { articles } from "../../Components/data/data.for.search"
import { useState } from "react"

export default function Search(){
    const [query, setQuery] = useState('');

    // Фильтруем статьи по заголовку или содержимому
    const filteredArticles = articles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
    );

    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Hero секция с поиском */}
        <div className="text-center bg-books bg-cover bg-center rounded-xl sm:rounded-2xl w-full mt-3 sm:mt-5 p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-shadow mt-4 sm:mt-6 md:mt-8">Поиск по сайту</h1>
            
            {/* Адаптивный input */}
            <input 
                type="text" 
                placeholder="Поиск..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}  
                className="border outline-0 pt-2 pb-2 px-3 py-3 rounded-xl bg-amber-900 mt-4 sm:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md focus:border-neutral-400 border-solid border-white text-sm sm:text-base"
            />
            <br/>
            <a className="text-xl sm:text-2xl text-shadow-super animate-bounce inline-block mt-6 sm:mt-9" href="#list-search">
                <FaAngleDown color="white" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"/>
            </a>
        </div>

        {/* Результаты поиска */}
        <div className="text-left bg-transparent duration-75 text-base sm:text-lg rounded-xl sm:rounded-2xl border border-solid border-white p-4 sm:p-6 md:p-8 lg:p-10 mt-4 sm:mt-5">
            <ul id="list-search">
              { filteredArticles.map(article => (
                <li 
                    key={article.id} 
                    className="border border-solid border-white p-4 sm:p-6 md:p-8 lg:p-10 w-full transition-transform hover:rotate-1 sm:hover:rotate-2 md:hover:rotate-3 mb-6 sm:mb-8 md:mb-10 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gradient-to-br from-amber-950 to-amber-700"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2">{article.title}</h3>
                  <p className="text-sm sm:text-base mb-3">{article.content}</p>
                  
                  {/* Адаптивная кнопка */}
                  <button className="border border-solid border-white mt-2 p-2 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-amber-900/60 transition-transform hover:scale-105 sm:hover:scale-110 md:hover:scale-120 hover:-rotate-1 sm:hover:-rotate-2 md:hover:-rotate-3 text-sm sm:text-base">
                    <a href={`../pages/${article.url}`}>Читать</a>
                  </button>
                </li>
              )) }
            </ul>
        </div>
    </div>
}