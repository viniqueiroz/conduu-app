import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Como Funciona | Conduu',
  description: 'Descubra como a Conduu facilita a jornada da sua habilitação para alunos e instrutores.',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-lightGray py-20 text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-indigo mb-6 font-display">Como a Conduu Funciona</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Nossa plataforma foi desenhada para ser simples, rápida e transparente, conectando quem quer aprender com quem sabe ensinar.
          </p>
        </div>
      </section>

      {/* Para Alunos */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-indigo font-display">Para Alunos</h2>
            <p className="text-lg text-slate-600 mt-4">A sua CNH a poucos cliques de distância.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-indigo">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Encontre Instrutores</h3>
              <p className="text-slate-600 leading-relaxed">Busque por instrutores credenciados próximos a você e avalie perfis baseados na experiência de outros alunos.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-indigo">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Agende suas Aulas</h3>
              <p className="text-slate-600 leading-relaxed">Escolha os melhores horários disponíveis e marque tudo diretamente pelo aplicativo, sem ligações burocráticas.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-indigo">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Acompanhe sua Evolução</h3>
              <p className="text-slate-600 leading-relaxed">Receba um relatório após cada aula prática e saiba exatamente as áreas que precisa melhorar antes do exame.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Para Instrutores */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-indigo font-display">Para Instrutores</h2>
            <p className="text-lg text-slate-600 mt-4">Mais alunos e controle total da sua rotina profissional.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-indigo">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Crie sua Vitrine</h3>
              <p className="text-slate-600 leading-relaxed">Cadastre-se na plataforma, envie suas credenciais e crie um perfil profissional que atrai novos alunos todos os dias.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-indigo">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gerencie a Agenda</h3>
              <p className="text-slate-600 leading-relaxed">Disponibilize seus horários livres. Os alunos agendam sozinhos e você recebe notificações automáticas.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-indigo">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Foque no Ensino</h3>
              <p className="text-slate-600 leading-relaxed">Deixe os avisos de pagamento e controle de presença com a gente. Use seu tempo para formar ótimos condutores.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
