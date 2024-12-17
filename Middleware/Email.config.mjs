import nodemailer from 'nodemailer'


export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "muhammadayaz22757@gmail.com",
    pass: process.env.pass,
  },
});

// const sendEmail = async() => {
//   try {
//     const info = await transporter.sendMail({
//       from: '"GeOOOO 👻" <muhammadayaz22757@gmail.com>', // sender address
//       to: "yasir450.kk@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info);
//   } catch (error) {
//     console.log(error)
//   }
// }
// sendEmail()