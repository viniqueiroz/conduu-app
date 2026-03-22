const values = [
  {
    name: 'Segurança em Primeiro Lugar',
    description: 'Promovemos uma cultura de direção defensiva e responsável desde a primeira aula.',
    icon: 'shield',
  },
  {
    name: 'Transparência',
    description: 'Conexões claras e honestas entre alunos e instrutores, com feedbacks e acompanhamento de progresso.',
    icon: 'eye',
  },
  {
    name: 'Inovação',
    description: 'Usamos a tecnologia para simplificar processos, otimizar o tempo e melhorar a experiência de todos.',
    icon: 'lightbulb',
  },
  {
    name: 'Empoderamento',
    description: 'Damos as ferramentas para que alunos conquistem sua independência e instrutores gerenciem suas carreiras.',
    icon: 'user-group',
  },
];

const Icon = ({ type }: { type: string }) => {
  if (type === 'shield') return <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>;
  if (type === 'eye') return <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>;
  if (type === 'lightbulb') return <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-6.364-1.636l.707-.707m12.728 0l.707-.707M12 19a7 7 0 110-14 7 7 0 010 14z"></path></svg>;
  if (type === 'user-group') return <svg className="w-8 h-8 text-brand-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
  return null;
}

const ValuesSection = () => {
  return (
    <section className="py-24 bg-brand-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-indigo mb-4 font-display">Nossos Valores</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Os pilares que guiam cada decisão, funcionalidade e interação na Conduu.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.name} className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Icon type={value.icon} />
              </div>
              <h3 className="text-xl font-bold text-brand-indigo mb-3 font-display">{value.name}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;