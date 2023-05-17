// import nodemailer from "nodemailer";

// const transport = nodemailer.createTransport({
//   service: "Gmail",
//   auth: { user: process.env.SUPPORT_EMAIL, pass: process.env.SUPPORT_PASS },
// });

// export const sendEmail = async (
//   name: string = "Noname",
//   email: string = "user@gmail.com",
//   code: string
// ) => {
//   const info = await transport.sendMail({
//     from: process.env.SUPPORT_EMAIL,
//     to: email,
//     subject: "Email Confirmation Link",
//     html: `<h1>Email Confirmation</h1>
//         <h2>Sain baina uu?, ${name}</h2>
//         <p>Manai web huudsand burtguulsend bayarlalaa. Ta doorh holboosoor batalgaajuulna uu!</p>
//         <a href=http://localhost:8888/confirm/${code}?email=${email}>Batalgaajuulah holboos</a>`,
//   });
// };