import Image from 'next/image';

const ForInstructorsSection = () => {
  return (
    <section className="py-24" id="instructors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <Image
              alt="Interface do aplicativo para instrutores"
              className="rounded-3xl shadow-2xl border-8 border-white"
              src="/instructor-profile.jpg"
              width={576}
              height={720}
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-indigo mb-6 font-display">Torne-se um instrutor de destaque</h2>
            <p className="text-lg text-slate-600 mb-8">Digitalize sua rotina e foque no ensino, enquanto nossa plataforma cuida da gestão para você.</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-indigo font-bold" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Perfil Profissional</h4>
                  <p className="text-slate-600">Exiba suas certificações, avaliações e conquiste novos alunos diariamente.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-indigo font-bold" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Gestão de Agenda</h4>
                  <p className="text-slate-600">Controle total sobre seus horários, cancelamentos e reagendamentos de forma automatizada.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-indigo font-bold" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Aumente sua Renda</h4>
                  <p className="text-slate-600">Reduza horários vagos e aumente sua base de alunos através da nossa vitrine qualificada.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInstructorsSection;