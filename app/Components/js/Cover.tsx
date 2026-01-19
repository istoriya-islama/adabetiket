import { FaAngleDown } from 'react-icons/fa'

export default function Cover(props) {
  return (
    <div className='rounded-xl sm:rounded-2xl md:rounded-3xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[34rem] bg-books bg-cover bg-center bg-no-repeat mt-3 sm:mt-4 flex flex-col items-center justify-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center px-4 sm:px-8 md:px-12 lg:px-16 text-shadow'>
        {props.title}
      </h1>

      <a
        className='text-xl sm:text-2xl text-shadow-super animate-bounce inline-block mt-8 sm:mt-12 md:mt-16'
        href={`${props.inText}`}
      >
        <FaAngleDown
          color='white'
          className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8'
        />
      </a>
    </div>
  )
}
