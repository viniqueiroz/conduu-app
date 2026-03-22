import Image from 'next/image';

const OurStorySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-indigo mb-6 font-display">Nossa História</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A Conduu nasceu da experiência de um de nossos fundadores ao tirar sua CNH. A dificuldade em encontrar instrutores disponíveis, agendar aulas e acompanhar o progresso de forma clara mostrou uma oportunidade: usar a tecnologia para simplificar e modernizar o processo de formação de condutores.
              </p>
              <p>
                O que começou como uma ideia para resolver um problema pessoal, rapidamente se tornou uma paixão por transformar um setor tradicional. Reunimos um time de apaixonados por tecnologia, educação e mobilidade para criar uma solução que realmente fizesse a diferença na vida de alunos e instrutores.
              </p>
              <p>
                Hoje, a Conduu é a ponte que conecta milhares de pessoas ao sonho da habilitação, com mais segurança, conveniência e confiança.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/about-hero-image.jpg"
              alt="Time da Conduu em uma reunião"
              width={576}
              height={384}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;