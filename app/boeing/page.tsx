export default async function Home() {
  // Ma'lumotlarni backenddan olamiz
  const response = await fetch('http://127.0.0.1:8000/boeing/mahsulot/', {
    cache: 'no-store', // Ma'lumotlar har doim yangi bo'lishi uchun
  });
  const products = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Sahifa sarlavhasi */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Bizning Mahsulotlar
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Boeing tizimidagi eng so'nggi va sifatli mahsulotlar ro'yxati.
          </p>
        </div>

        {/* Mahsulotlar Gridi */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((item: any) => (
            <div 
              key={item.id} 
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Mahsulot haqida ma'lumotlar bloki */}
              <div className="p-6">
                {/* Mahsulot nomi */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                  {item.name}
                </h3>
                
                {/* Mahsulot tavsifi */}
                <p className="mt-2 text-sm text-gray-500 line-clamp-3 min-h-[60px]">
                  {item.description || "Ushbu mahsulot haqida qo'shimcha ma'lumot mavjud emas."}
                </p>
              </div>

              {/* Narx va tugma bloki */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-semibold tracking-wider">Narxi</span>
                  <span className="text-xl font-extrabold text-blue-600">
                    {Number(item.price).toLocaleString()} so'm
                  </span>
                </div>
                
                {/* Batafsil/Sotib olish tugmasi */}
                <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200 shadow-sm">
                  Batafsil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Agar mahsulot topilmasa */}
        {products.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-gray-500">Hozircha mahsulotlar mavjud emas.</p>
          </div>
        )}

      </div>
    </div>
  );
}