import * as nodemailer from "nodemailer";

class EmailSender {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      service: "outlook",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
  }

  async sendEmail(
    from: string,
    to: string | string[],
    subject: string,
    text: string,
    html: string
  ): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
      });
      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  }
}

export default EmailSender;
