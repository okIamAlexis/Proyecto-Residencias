using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;
using MimeKit;
using MimeKit.Text;
using MailKit.Security;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class UsuarioEgrController : ControllerBase
    {

        private readonly MailService _MailService;
        //public MailController(MailService MailService)
        //{
        //    this.MailService = MailService;
        //}
        MailService _mailService;

        private readonly IUsuarioEgrService _usuarioEgrService;
        public UsuarioEgrController(IUsuarioEgrService usuarioEgrService, MailService mailService)
        {
            this._mailService = mailService;
            _usuarioEgrService = usuarioEgrService;
        }

        //protected void btnCorreo_Click(object sender, EventArgs e)
        //{
        //    string body =
        //        "<body>" +
        //        "<h1> Bienvenido a la Escuela PRO</h1>" +
        //        "<h4>Querido alumno,</h4>" +
        //        "<span> Le deseamos exito en eta etapa de su formación academica brindandole todo el apaoyo que requiere.</span>" +
        //        "<span>Ofrecemos todo el contenido de manera digital.</span>" +
        //        "<br/><br/><span>Saludos Cordiales.</span>" +
        //        "</body";
        //    SmtpClient smtp = new SmtpClient("smtp.gamil.com", 587);
        //    smtp.Credentials = new NetworkCredential("173107108@tesci.edu.mx", "TESCI2019");
        //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
        //    smtp.EnableSsl = true;
        //    smtp.UseDefaultCredentials = false;

        //    MailMessage mail = new MailMessage();
        //    mail.From = new MailAddress("173107108@tesci.edu.mx", "Titulo en bandeja de entrada");
        //    mail.To.Add(new MailAddress("173107108@tesci.edu.mx"));
        //    mail.Subject = "Mensaje de Bienvenida";
        //    mail.IsBodyHtml = true;
        //    mail.Body = body;

        //    smtp.Send(mail);
        //}

        //public void Send(string from, string to, string subject, string html)
        //{
        //    // create email message
        //    var email = new MimeMessage();
        //    email.From.Add(MailboxAddress.Parse("from_address@example.com"));
        //    email.To.Add(MailboxAddress.Parse("to_address@example.com"));
        //    email.Subject = "Test Email Subject";
        //    email.Body = new TextPart(TextFormat.Plain) { Text = "Example Plain Text Message Body" };

        //    // send email
        //    using var smtp = new SmtpClient();
        //    smtp.Connect("smtp.ethereal.email",
        //                 587,
        //                 SecureSocketOptions.StartTls);
        //    smtp.Authenticate("[USERNAME]", "[PASSWORD]");
        //    smtp.Send(email);
        //    smtp.Disconnect(true);
        //}


        [HttpPost]
        public async Task<IActionResult> Post([FromBody]UsuarioEgr usuarioEgr)
        {
            try
            {
                //var direccionEnvio = usuarioEgr.egr_correo;
                var validateExistence = await _usuarioEgrService.ValidateExistence(usuarioEgr);

                if (validateExistence)
                {
                    return BadRequest(new { message = "El numero de control " + usuarioEgr.EgrUsuario + " ya esxites!" });
                }

                //this._mailService.SendEmailGmail(direccionEnvio);
                this._mailService.EmailGmail();

                usuarioEgr.PasswordControl = Encriptar.EncriptarPassword(usuarioEgr.PasswordControl);
                 await _usuarioEgrService.SaveUser(usuarioEgr);
                return Ok(new { message = "El usuario se registrado con exito" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
