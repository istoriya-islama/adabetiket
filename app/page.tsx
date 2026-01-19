import Cover from "./Components/js/Cover";
import Post from "./Components/js/Post";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <Cover inText="#text" title="Этикет"/>
      
      {/* Текстовый блок */}
      <div
        className="border w-full rounded-xl sm:rounded-2xl mt-3 sm:mt-4 p-3 sm:p-4 md:p-5 text-sm sm:text-base md:text-lg"
        id="text"
      >
        Адаб — этикет и моральные принципы, переданные пророком Мухаммадом
        (салалаху алейхим уа Салям). Он учил, как вести себя с людьми, как
        уважать старших, заботиться о младших и соблюдать справедливость. Адаб
        охватывает как внешнее поведение, так и внутренние качества, такие как
        добросердечность и искренность. Эти нормы помогают мусульманам быть
        лучшими в обществе и стремиться к духовному совершенству.
      </div>

      {/* Сетка с постами - 1 колонка на мобильных, 2 на планшетах+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 sm:gap-5 mt-4 sm:mt-5">
        <Post
          title="Книга Благопристойности"
          text="Сказал имам аль-Музани: «Если книгу проверят семьдесят раз, то все равно в ней останутся некоторые ошибки, ибо Аллах отказался от того, чтобы какая-либо книга..."
          urlPage="/pages/adabAkil"
          isNew={true}
        />
        <Post
          title="Десять Норм Благопристойности"
          text="Сказал автор, да окажет ему Аллах содействие: Когда встретишь мусульманина, поприветствуй его словами:«Ас-саляму ‘аляйкум уа рахмату-Ллахи уа баракатух» (Мир вам, милость Аллаха..."
          urlPage="/pages/adabTenNorms"
          isNew={true}
        />
      </div>

      {/* Telegram блок */}
      <div className='min-h-[300px] sm:min-h-[350px] md:min-h-[400px] w-full mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 md:p-8 bg-telegram bg-cover bg-center rounded-xl sm:rounded-2xl flex flex-col items-center justify-center'>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-shadow mb-6 sm:mb-8 md:mb-10">
          Зайди к нам
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 px-4">
          Там моного че-го полезного
        </p>
        <a
          href="https://t.me/adab_etiket"
          className='border px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 border-solid border-white bg-amber-900/50 animate-pulse rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg text-center hover:bg-amber-900/70 transition-colors'
        >
          Давай заходи, мы тебя ждем!
        </a>
      </div>
    </div>
  );
}