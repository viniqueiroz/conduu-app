import { NextResponse } from 'next/server';
import db from '../../../lib/firebase-admin';
import { ok } from 'assert';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, whatsapp, city, userType } = body;
    console.log(body);

    // Validação básica no servidor
    if (!fullName || !email || !whatsapp || !city || !userType) {
      return NextResponse.json({ message: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Adiciona um novo documento com um ID gerado automaticamente à coleção 'leads'
    const leadRef = await db.collection('site-leads').add({
      fullName,
      email,
      whatsapp,
      city,
      userType,
      createdAt: new Date().toISOString(), // Adiciona um timestamp
    });

    console.log('Novo lead adicionado com o ID:', leadRef.id);

    // Retorna uma resposta de sucesso para o frontend
    return NextResponse.json({ message: `Obrigado, ${fullName}! Seu cadastro foi recebido com sucesso.`}, { status: 200 });

  } catch (error) {
    console.error('Erro no cadastro:', error);
    return NextResponse.json({ message: 'Ocorreu um erro ao processar seu cadastro. Tente novamente.'}, { status: 500 });
  }
}