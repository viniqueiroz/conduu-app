import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Conduu Logo" width={40} height={40} />
            <span className="text-2xl font-display font-extrabold text-brand-indigo">Conduu</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-slate-600 hover:text-brand-indigo font-medium transition-colors" href="#students">Para Alunos</a>
            <a className="text-slate-600 hover:text-brand-indigo font-medium transition-colors" href="#instructors">Para Instrutores</a>
            <a className="bg-brand-indigo text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all" href="/#register">Começar Agora</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;