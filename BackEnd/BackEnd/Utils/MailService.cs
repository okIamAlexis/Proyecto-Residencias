using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;
using Microsoft.Extensions.Configuration;
using MimeKit;

namespace BackEnd.Utils
{
    public class MailService
    {
        IConfiguration _configuration;

        public MailService(IConfiguration configuration)
        {
            this._configuration = configuration;
        }


        public void EmailGmail()
        {
            String userOrigen = this._configuration["usuariogmail"];
            String passwordmail = this._configuration["passwordmail"];
            String UserDestino = this._configuration["usuariogmail"];

            MailMessage oMailMessage = new MailMessage(userOrigen, UserDestino, "Hola Mensaje de prueba", "<p>Prueba de Correo<p>");

            oMailMessage.IsBodyHtml = true;

            SmtpClient oSmtpClient = new SmtpClient("smtp.gmail.com");
            oSmtpClient.EnableSsl = true;
            oSmtpClient.UseDefaultCredentials = false;
            //oSmtpClient.Host = "smtp.gmail.com";
            oSmtpClient.Port = 587;
            oSmtpClient.Credentials = new System.Net.NetworkCredential(userOrigen, passwordmail);

            oSmtpClient.Send(oMailMessage);

            oSmtpClient.Dispose();

        }

        public void SendEmailGmail(String receptor)
        {
            MailMessage mail = new MailMessage();

            String body =
                    "<body>" +
                    "<h1> Bienvenido a la Escuela PRO</h1>" +
                    "<h4>Querido alumno,</h4>" +
                    "<span> Le deseamos exito en eta etapa de su formación academica brindandole todo el apaoyo que requiere.</span>" +
                    "<span>Ofrecemos todo el contenido de manera digital.</span>" +
                    "<br/><br/><span>Saludos Cordiales.</span>" +
                    "</body";

            String usermail = this._configuration["usuariogmail"];
            String passwordmail = this._configuration["passwordmail"];

            mail.From = new MailAddress(usermail);
            mail.To.Add(new MailAddress(receptor));
            mail.Subject = "Prueba de Envio de email";
            mail.Body = body;
            mail.IsBodyHtml = true;
            mail.Priority = MailPriority.Normal;


            String smtpserver = this._configuration["hostGmail"];
            int port = int.Parse(this._configuration["portGmail"]);
            bool ssl = bool.Parse(this._configuration["sslGmail"]);
            bool defaultcredentials = bool.Parse(this._configuration["defaultcredentialsGmail"]);

            SmtpClient smtpClient = new SmtpClient();

            smtpClient.Host = smtpserver;
            smtpClient.Port = port;
            smtpClient.EnableSsl = ssl;
            smtpClient.UseDefaultCredentials = defaultcredentials;

            NetworkCredential usercredential = new NetworkCredential(usermail, passwordmail);

            smtpClient.Credentials = usercredential;
            smtpClient.Send(mail);
        }

        public void SendEmailOutlook(String receptor, string asunto, string mensaje)
        {
            MailMessage mail = new MailMessage();

            String usermail = this._configuration["usuariooutlook"];
            String passwordmail = this._configuration["passwordoutlook"];

            mail.From = new MailAddress(usermail);
            mail.To.Add(new MailAddress(receptor));
            mail.Subject = asunto;
            mail.Body = mensaje;
            mail.IsBodyHtml = true;
            mail.Priority = MailPriority.Normal;

            String smtpserver = this._configuration["host"];
            int port = int.Parse(this._configuration["port"]);
            bool ssl = bool.Parse(this._configuration["ssl"]);
            bool defaultcredentials = bool.Parse(this._configuration["defaultcredentials"]);

            SmtpClient smtpClient = new SmtpClient();

            smtpClient.Host = smtpserver;
            smtpClient.Port = port;
            smtpClient.EnableSsl = ssl;
            smtpClient.UseDefaultCredentials = defaultcredentials;

            NetworkCredential usercredential = new NetworkCredential(usermail, passwordmail);

            smtpClient.Credentials = usercredential;
            smtpClient.Send(mail);
        }
    }
}
