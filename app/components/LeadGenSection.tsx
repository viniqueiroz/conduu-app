'use client';

import { useState } from 'react';

const LeadGenSection = () => {
    const [userType, setUserType] = useState('aluno');
    const [isLoading, setIsLoading] = useState(false);
    const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [whatsapp, setWhatsapp] = useState('');

    const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0, 11); // Limita a 11 dígitos (DDD + número)
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        setWhatsapp(value);
    };


    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setFormStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        // Remove a formatação do WhatsApp antes de enviar
        if (typeof payload.whatsapp === 'string') {
            payload.whatsapp = payload.whatsapp.replace(/\D/g, '');
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                setFormStatus({ message: result.message, type: 'success' });
                setWhatsapp(''); // Limpa o campo de whatsapp no sucesso
                form.reset();
            } else {
                setFormStatus({ message: result.message || 'Ocorreu um erro.', type: 'error' });
            }
        } catch (error) {
            console.log(error);
            
            setFormStatus({ message: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-24 bg-brand-indigo text-white" id="register">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 font-display">Pronto para dar a partida?</h2>
                    <p className="text-blue-100">Preencha os dados abaixo e entraremos em contato para finalizar seu cadastro.</p>
                </div>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-slate-900">
                    <div className="flex border-b border-slate-200 mb-8">
                        <button className={`flex-1 py-4 font-bold text-slate-500 transition-all ${userType === 'aluno' ? 'tab-active' : ''}`} onClick={() => setUserType('aluno')}>
                            Sou Aluno
                        </button>
                        <button className={`flex-1 py-4 font-bold text-slate-500 transition-all ${userType === 'instrutor' ? 'tab-active' : ''}`} onClick={() => setUserType('instrutor')}>
                            Sou Instrutor
                        </button>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input name="userType" type="hidden" value={userType} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">Nome Completo</label>
                                <input id="fullName" name="fullName" className="w-full rounded-xl border-slate-200 focus:border-brand-indigo focus:ring-brand-indigo" placeholder="Seu nome" required type="text" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700">E-mail</label>
                                <input id="email" name="email" className="w-full rounded-xl border-slate-200 focus:border-brand-indigo focus:ring-brand-indigo" placeholder="email@exemplo.com" required type="email" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="whatsapp" className="text-sm font-semibold text-slate-700">WhatsApp</label>
                                <input
                                    id="whatsapp"
                                    name="whatsapp"
                                    className="w-full rounded-xl border-slate-200 focus:border-brand-indigo focus:ring-brand-indigo"
                                    placeholder="(00) 00000-0000"
                                    required
                                    type="tel"
                                    value={whatsapp}
                                    onChange={handleWhatsappChange}
                                    maxLength={15}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="city" className="text-sm font-semibold text-slate-700">Cidade</label>
                                <input id="city" name="city" className="w-full rounded-xl border-slate-200 focus:border-brand-indigo focus:ring-brand-indigo" placeholder="Sua cidade" required type="text" />
                            </div>
                        </div>
                        <div className="pt-4">
                            <button 
                                className="w-full btn-gold py-4 rounded-xl font-bold text-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed" 
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando...' : 'Quero me cadastrar'}
                            </button>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-4">Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
                    </form>
                    {formStatus && (
                        <p className={`text-center mt-4 font-semibold ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{formStatus.message}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadGenSection;