const ForStudentsSection = () => {
  return (
    <section className="py-24 bg-brand-lightGray" id="students">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-indigo mb-4 font-display">A jornada para sua habilitação começa aqui</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tecnologia e confiança para você focar no que importa: aprender a dirigir com segurança.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-brand-indigo mb-3 font-display">Encontre por proximidade</h3>
            <p className="text-slate-600">Localize os melhores instrutores perto de você ou da sua autoescola através do nosso mapa interativo.</p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-brand-indigo mb-3 font-display">Agendamento Fácil</h3>
            <p className="text-slate-600">Esqueça ligações infinitas. Marque suas aulas práticas em segundos direto pela agenda do instrutor.</p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-brand-indigo mb-3 font-display">Evolução em Tempo Real</h3>
            <p className="text-slate-600">Acompanhe seu progresso, veja o feedback das aulas e saiba exatamente quando estará pronto para o exame.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudentsSection;