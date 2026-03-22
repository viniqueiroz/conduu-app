import Image from 'next/image';

const teamMembers = [
  {
    name: 'Vinicius Moura',
    role: 'CEO & Co-Fundador',
    imageUrl: '/vinicius.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-indigo mb-4 font-display">Nosso Time</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">As pessoas que trabalham todos os dias para tornar a Conduu uma realidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">
          {teamMembers.map((person) => (
            <div key={person.name} className="text-center">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4">
                <Image className="rounded-full object-cover" src={person.imageUrl} alt={`Foto de ${person.name}`} fill />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
              <p className="text-brand-indigo font-semibold">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;