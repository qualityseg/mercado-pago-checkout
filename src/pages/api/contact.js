import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";

const email = process.env.MAILADRESS;
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { senderMail, name, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return res.status(403).send("");
    }

    const message = {
      from: 'vendas01@eletrosantaclara.com.br',
      to: 'vendas@eletrosantaclara.com.br',
      subject: `[Site] Nova Mensagem - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br /><b>Enviado Por: </b>${name} <br /><br /><b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail,
    };

    transporter.sendMail(message);

    return res.send("");
  } catch (err) {
    return res.json({
      error: true,
      message: err.message,
    });
  }
};
