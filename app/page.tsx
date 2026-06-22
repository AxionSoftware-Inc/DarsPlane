import Link from 'next/link';
import React from 'react';

// Soxta ma'lumotlar (Samolyotlar floti uchun)
const FLEET = [
  {
    id: 1,
    name: 'Gulfstream G700',
    type: 'Ultra Long Range',
    range: '13,890 km',
    speed: 'Mach 0.925',
    seats: 'Up to 19',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Bombardier Global 7500',
    type: 'Business Jet',
    range: '14,260 km',
    speed: 'Mach 0.94',
    seats: 'Up to 19',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Cessna Citation Longitude',
    type: 'Super-Midsize',
    range: '6,482 km',
    speed: 'Mach 0.84',
    seats: 'Up to 12',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
  },
];

export default function AviationLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. NAV BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-widest text-amber-500 flex items-center gap-2">
            <span className="text-2xl">✈</span> BOEING LUXE
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">Biz haqimizda</a>
            <a href="#fleet" className="hover:text-amber-400 transition-colors">Flotimiz</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Xizmatlar</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Aloqa</a>
          </div>
          <div>
            <button className="border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-400 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300">
              Konsultatsiya
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Orqa fondagi rasm va overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80" 
            alt="Private Jet Hero" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase bg-amber-500/10 px-4 py-2 rounded-full inline-block mb-6">
            Eksklyuziv Aviatsiya Tajribasi
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Yerdan balandda, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Cheksiz Qulaylikda bo'ling
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light mb-10 leading-relaxed">
            Shaxsiy parvozlar, biznes sayohatlar va global yo'nalishlar. Vaqtingizni qadrlaydiganlar uchun mukammal yechim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/boeing'}><button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
              Samolyot Bron Qilish
            </button></Link>
            <button className="border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300">
              Flotni Ko'rish
            </button>
          </div>
        </div>

        {/* Pastga ishora qiluvchi chiziq */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-slate-500 text-sm tracking-widest uppercase">Pastga varoqlang</span>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="py-20 border-y border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400 mb-2">150+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Global Yo'nalishlar</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400 mb-2">12k+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Muvaffaqiyatli Parvozlar</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400 mb-2">45+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Premium Samolyotlar</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400 mb-2">99.9%</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Xavfsizlik Kafolati</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLEET SECTION (SAMOLYOTLAR) */}
      <section id="fleet" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-500 uppercase block mb-3">Bizning Flot</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Mukammallik Ramzlari</h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-slate-400 font-light">
              Har bir samolyot yuqori texnologiya, xavfsizlik va hashamat talablariga to'liq javob beradigan darajada jihozlangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET.map((jet) => (
              <div key={jet.id} className="group bg-slate-900 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <img 
                    src={jet.image} 
                    alt={jet.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-medium text-amber-400 border border-slate-800">
                    {jet.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors">
                    {jet.name}
                  </h3>
                  <div className="space-y-2.5 border-t border-slate-800 pt-4 text-sm text-slate-400">
                    <div className="flex justify-between">
                      <span>Masofa (Range):</span>
                      <span className="text-white font-medium">{jet.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tezlik (Speed):</span>
                      <span className="text-white font-medium">{jet.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>O'rindiqlar:</span>
                      <span className="text-white font-medium">{jet.seats}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-300 font-semibold py-3 rounded-xl text-sm transition-all duration-300">
                    Batafsil Tanishish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA / REZERVATSIYA */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Keyingi Parvozingizni Rejalashtiring</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 font-light">
            Bizning premium menejerlarimiz sizga 15 daqiqa ichida eng maqbul taklifni tayyorlab berishadi.
          </p>
          <div className="bg-slate-950 p-2 rounded-2xl border border-slate-800 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Email manzilingiz" 
              className="bg-transparent px-4 py-3 text-sm focus:outline-none flex-grow text-white placeholder-slate-600"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap transition-colors">
              Aloqaga Chiqish
            </button>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-sm text-slate-600">
        <p>© 2026 BOEING LUXE Aviatsiya Kompaniyasi. Barcha huquqlar himoyalangan.</p>
      </footer>

    </div>
  );
}