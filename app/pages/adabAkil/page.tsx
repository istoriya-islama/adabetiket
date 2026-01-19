'use client'

import Cover from '@/app/Components/js/Cover'

export default function AdabBuhari() {
	return (
		<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
			<Cover title='Книга Благопристойности' inText='#book' />

			{/* PDF контейнер с адаптивной высотой */}
			<div
				className='text-center p-3 sm:p-4 md:p-6 border-2 border-dashed border-gray-300 rounded-xl sm:rounded-2xl text-sm sm:text-base w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]'
				id='book'
			>
				<p className="text-amber-500 uppercase">Предупреждение: на мобильных устройствах, если файл у вас не открывается, он автоматически будет скачиваться на ваш телефон. Не удивляйтесь.</p>
				<iframe
					src='/books/adabAkil.pdf'
					className='w-full h-full rounded-xl'
					title='Книга Благопристойности'
				/>
			</div>
		</div>
	)
}
