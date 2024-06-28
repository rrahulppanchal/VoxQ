import EmailSender from "./send_mail";

interface IMail {
  email: string;
}
class MailTemplate {
  emailSender = new EmailSender();

  public async sendWelcomeMail({ email }: IMail) {
    console.log(email);
    try {
      await this.emailSender.sendEmail(
        '"Welcome" <vox-q@outlook.com>',
        ["rahulpanchaloff@gmail.com"],
        "Welcome to [Organization Name]",
        "Hello world?",
        `<!doctype html>
              <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                  <title></title>
                  <!--[if !mso]><!-->
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <!--<![endif]-->
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style type="text/css">
                    #outlook a { padding:0; }
                    body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
                    table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
                    img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
                    p { display:block;margin:13px 0; }
                  </style>
                  <!--[if mso]>
                  <noscript>
                  <xml>
                  <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                  </xml>
                  </noscript>
                  <![endif]-->
                  <!--[if lte mso 11]>
                  <style type="text/css">
                    .mj-outlook-group-fix { width:100% !important; }
                  </style>
                  <![endif]-->
                  
                    <!--[if !mso]><!-->
                      <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet" type="text/css">
                      <style type="text/css">
                        @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);
                      </style>
                    <!--<![endif]-->
    
                  
                  
                  <style type="text/css">
                    @media only screen and (min-width:480px) {
                      .mj-column-per-100 { width:100% !important; max-width: 100%; }
                    }
                  </style>
                  <style media="screen and (min-width:480px)">
                    .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
                  </style>
                  
                
                  <style type="text/css">
                  
                  
                  </style>
                  <style type="text/css">
                  .hide_on_mobile { display: none !important;} 
                      @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
                      .hide_section_on_mobile { display: none !important;} 
                      @media only screen and (min-width: 480px) { 
                          .hide_section_on_mobile { 
                              display: table !important;
                          } 
    
                          div.hide_section_on_mobile { 
                              display: block !important;
                          }
                      }
                      .hide_on_desktop { display: block !important;} 
                      @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
                      .hide_section_on_desktop { 
                          display: table !important;
                          width: 100%;
                      } 
                      @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
                      
                        p, h1, h2, h3 {
                            margin: 0px;
                        }
    
                        ul, li, ol {
                          font-size: 11px;
                          font-family: Ubuntu, Helvetica, Arial;
                        }
    
                        a {
                            text-decoration: none;
                            color: inherit;
                        }
    
                      @media only screen and (max-width:480px) {
                          .mj-column-per-100 { width:100%!important; max-width:100%!important; }.mj-column-per-100 > .mj-column-per-100 { width:100%!important; max-width:100%!important; }
                      }
                  </style>
                  
                </head>
      <body style="word-spacing:normal;background-color:#FFFFFF;">
        
        
          <div style="background-color:#FFFFFF;">
            
          
          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        
          
          <div style="margin:0px auto;max-width:600px;">
            
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:10px 0px 10px 0px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                
          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
            
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tbody>
              
                  <tr>
                    <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                      
          <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;"><strong>Subject: </strong>Welcome to [Organization Name]!</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif;"><span style="font-size: 13px;">Dear [New User's Name],</span></span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;">We are excited to welcome you to the [Organization Name] family! We are thrilled to have you on board and look forward to the valuable contributions you will make to our team.</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;">Here are your login credentials to get started:</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;"><strong>Username:</strong> [Username]</span><br><span style="font-family: Arial, sans-serif; font-size: 13px;"><strong>Temporary Password:</strong> [Temporary Password]</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><br><span style="font-family: Arial, sans-serif; font-size: 13px;">To ensure the security of your account, please log in and change your password at your earliest convenience. You can access your account here: <a href="https://nodemailer.com/about/" target="_blank" rel="noopener" style="color: #0000EE;">click</a>.</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif;"><strong><span style="font-size: 13px;">Getting Started</span></strong></span><br><span style="font-family: Arial, sans-serif; font-size: 13px;">To help you get up to speed, we have prepared some resources and documentation that you may find useful:</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;">[Link to Onboarding Guide]</span><br><span style="font-family: Arial, sans-serif; font-size: 13px;">[Link to Company Policies]</span><br><span style="font-family: Arial, sans-serif; font-size: 13px;">[Link to Team Directory]</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><br><span style="font-family: Arial, sans-serif; font-size: 13px;">If you have any questions or need assistance, please do not hesitate to reach out to your manager, [Manager's Name], or our IT support team at [IT Support Email/Phone].</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;">Once again, welcome to [Organization Name]. We are confident that you will find your time with us both challenging and rewarding. We look forward to seeing the great things you will accomplish!</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;">Best regards,</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Arial, sans-serif; font-size: 13px;">[Your Full Name]</span><br><span style="font-family: Arial, sans-serif; font-size: 13px;">[Your Job Title]</span><br><span style="font-family: Arial, sans-serif; font-size: 13px;">[Organization Name]</span><br><span style="font-family: Arial, sans-serif; font-size: 13px;">[Contact Information]</span></p>
    <p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p></div>
        
                    </td>
                  </tr>
                
            </tbody>
          </table>
        
          </div>
        
              <!--[if mso | IE]></td></tr></table><![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        
          
          <!--[if mso | IE]></td></tr></table><![endif]-->
        
        
          </div>
        
      </body>
              </html>`
      );
    } catch (error) {}
  }
}

export default MailTemplate;
