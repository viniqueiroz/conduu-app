import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 font-display">
              Conquiste sua CNH com os <span className="text-brand-gold">melhores instrutores</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Encontre instrutores homologados, agende suas aulas práticas pelo celular e acompanhe sua evolução até a aprovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="btn-gold px-8 py-4 rounded-xl font-bold text-lg text-center shadow-lg shadow-black/10" href="#register">Quero aprender</a>
              <a className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl font-bold text-lg text-center backdrop-blur-sm transition-all" href="#register">Sou instrutor</a>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="Aluno feliz conquitando sua CNH"
              className="rounded-3xl shadow-2xl"
              src="/hero-image.jpg"
              width={576}
              height={384}
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl items-center gap-4 text-slate-900 hidden md:flex">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="font-bold text-sm">Instrutores Verificados</p>
                <p className="text-xs text-slate-500">100% homologados pelo DETRAN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;