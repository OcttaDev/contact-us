import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
    },
  });

  try {
    const task = await req.json();

    let info = await transporter.sendMail({
      from: task.email,
      to: process.env.NEXT_PUBLIC_GMAIL_USER,
      subject: `Novo freela agendado`,
      text: `Solicitação feita por ${task.email}: \n\n tarefa: ${task.task} \n\n número para contato: ${task.contact} - ${task.client}`,
    });

    return NextResponse.json(
      { message: "E-mail enviado com sucesso", info },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Falha ao enviar o e-mail" },
      { status: 501 }
    );
  }
}
