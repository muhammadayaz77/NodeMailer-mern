import { transporter } from "./Email.config.mjs";
import { Verification_Email_Template, Welcome_Email_Template } from "./EmailTemplate.mjs";




export const sendVerficationCode = async(email,verficationCode) => {
  try {
    const info = await transporter.sendMail({
      from: '"GeOOOO 👻" <muhammadayaz22757@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Verify your email", // Subject line
      text: "Verify your email", // plain text body
      html: Verification_Email_Template.replace('{verificationCode}',verficationCode), // html body
    }); 
    console.log("Message sent: %s", info);
  } catch (error) {
    console.log("Email Error : ",error)
  }
}
export const wellcomeEmail = async(email,name) => {
  try {
    const info = await transporter.sendMail({
      from: '"Muhammad Ayaz Company 👻" <muhammadayaz22757@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Welcome to community!", // Subject line
      text: "Welcome to community", // plain text body
      html: Welcome_Email_Template.replace('{name}',name), // html body
    });
    console.log("Message sent: %s", info);
  } catch (error) {
    console.log("Email Error : ",error)
  }
}