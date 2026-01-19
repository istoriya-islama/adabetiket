function isShow(isTrue: boolean){
    if (isTrue){
        return(
            <div>
                {/* Badge для мобильных - на всю ширину */}
                <span className="sm:hidden uppercase text-xs px-2 py-1 border border-solid border-yellow-500 text-center w-full text-shadow bg-yellow-400 rounded-lg text-black select-none block mb-2">
                    новый
                </span>
                
                {/* Badge для компьютеров - маленький в углу */}
                <span className="hidden sm:inline-block uppercase text-[0.5rem] px-1.5 py-1 border border-solid border-yellow-500 text-center float-right text-shadow bg-yellow-400 rounded-xl text-black hover:scale-120 select-none transition-transform duration-150">
                    новый
                </span>
            </div>
        )
    }
    else{
        return null
    }
}


export default function Post(props: any){
    return <div className='w-full h-full bg-three bg-cover bg-center rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col'>
        {isShow(props.isNew)}
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 clear-both">{props.title}</h2>
        <p className="text-sm sm:text-base mb-4 flex-grow">{props.text}</p>
        <a 
            href={`${props.urlPage}`} 
            className="px-3 py-1.5 sm:px-4 sm:py-2 border border-solid border-amber-800 bg-amber-900/70 hover:bg-amber-950 rounded transition duration-150 hover:scale-105 sm:hover:scale-110 md:hover:scale-120 cursor-pointer self-end text-sm sm:text-base"
        >
            Читать
        </a>
    </div>
}