import Cover from '@/app/Components/js/Cover'
import Post from '@/app/Components/js/Post'

export default function Page() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
      <Cover title='Стaтьи' inText='#info' />

      {/* Адаптивная сетка: 1 колонка на мобильных, 2 на планшетах и больше */}
      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full mt-4 sm:mt-5'
        id='info'
      >
        <Post
          title='Адабаль муфрад'
          text="1. О СКАЗАНИИ ВСЕВЫШНЕГО: И ПОВЕЛЕЛИ Мы ЧЕЛОВЕКУ ПОЧИТАТЬ РОДИТЕЛЕЙ (29:8) 1. 'Абу Амр аш-Шайбани сказал: «Хозяин этого дома рассказал нам (и он указал на дом 'Абд Аллаха ибн Мас'уда): «Я спросил Пророка..."
          urlPage='./adabBuhari'
          isNew={false}
        />
        <Post
          title='Книга Благопристойности'
          text='Сказал имам аль-Музани: «Если книгу проверят семьдесят раз, то все равно в ней останутся некоторые ошибки, ибо Аллах отказался от того, чтобы какая-либо книга...'
          urlPage='./adabAkil'
          isNew={true}
        />
        <Post
          title='Десять Норм Благопристойности'
          text='Сказал автор, да окажет ему Аллах содействие: Когда встретишь мусульманина, поприветствуй его словами:«Ас-саляму ‘аляйкум уа рахмату-Ллахи уа баракатух» (Мир вам, милость Аллаха...'
          urlPage='/pages/adabTenNorms'
          isNew={true}
        />
      </div>
    </div>
  )
}
