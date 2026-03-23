import React from 'react';

export const metadata = {
  title: 'Política de Privacidade | Conduu',
  description: 'Saiba como a Conduu protege e utiliza os seus dados.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-indigo mb-8 font-display">Política de Privacidade</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Coleta de Informações</h2>
            <p>
              A Conduu coleta informações pessoais que você nos fornece diretamente ao criar uma conta,
              como nome, e-mail, número de telefone e cidade. Também podemos coletar dados de uso e
              navegação na plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso dos Dados</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Prestar, manter e melhorar nossos serviços;</li>
              <li>Processar agendamentos e conectar alunos a instrutores;</li>
              <li>Enviar atualizações, suporte técnico e alertas administrativos;</li>
              <li>Comunicar sobre promoções, novidades e eventos da Conduu.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais a terceiros. Seus dados básicos (como nome e contato)
              são compartilhados apenas com o instrutor ou aluno envolvido no agendamento da aula,
              estritamente para a finalidade de viabilizar o encontro e a prestação do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Segurança</h2>
            <p>
              Adotamos medidas de segurança técnicas e administrativas adequadas para proteger seus
              dados pessoais contra acesso, alteração, divulgação ou destruição não autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Seus Direitos (LGPD)</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de
              solicitar o acesso, a correção, a anonimização ou a exclusão dos seus dados pessoais
              armazenados em nossa plataforma a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como lidamos com seus
              dados, entre em contato conosco através do e-mail privacidade@conduu.com.br.
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