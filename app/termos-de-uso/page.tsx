import React from 'react';

export const metadata = {
  title: 'Termos de Uso | Conduu',
  description: 'Termos de uso e condições da plataforma Conduu.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-indigo mb-8 font-display">Termos de Uso</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a plataforma Conduu, você concorda em cumprir e ser legalmente
              vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos,
              não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Descrição do Serviço</h2>
            <p>
              A Conduu atua como um intermediador tecnológico, conectando alunos interessados em
              obter a Carteira Nacional de Habilitação (CNH) a instrutores de trânsito e autoescolas
              parceiras. Não somos uma instituição de ensino ou prestadora direta de serviços de
              instrução veicular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cadastro e Segurança</h2>
            <p>
              Para utilizar a plataforma, é necessário criar uma conta fornecendo informações precisas,
              atualizadas e completas. Você é responsável por manter a confidencialidade das suas
              credenciais de acesso e por todas as atividades que ocorrerem em sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Responsabilidades dos Usuários</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Alunos:</strong> Comprometem-se a comparecer nos horários agendados, seguir as orientações do instrutor e respeitar as normas de trânsito.</li>
              <li><strong>Instrutores:</strong> Comprometem-se a manter as credenciais e veículos regularizados, oferecendo um serviço seguro e profissional.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cancelamentos e Reembolsos</h2>
            <p>
              As políticas de cancelamento e reagendamento variam conforme as regras estabelecidas
              por cada instrutor ou autoescola parceira, devendo ser consultadas no momento do
              agendamento pela plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Modificações dos Termos</h2>
            <p>
              A Conduu reserva-se o direito de modificar estes Termos de Uso a qualquer momento.
              Notificaremos os usuários sobre alterações significativas através da plataforma ou por e-mail.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-8 border-t border-slate-100">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
}