import nodemailer from 'nodemailer'


export function sendMail(){
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'it@burleighgrp.com',
            pass:'ItBurleighGrp2023*#',
        }
    })
    
   transport.sendMail({
     from: 'it@burleighgrp.com',
     to: 'isadora@burleighgrp.com',
     subject: 'testezinho da massa',
     text: 'O testezinho da massa chegou trazendo pasta',
     attachments: {
        filename: 'Isadora.csv',
        path: './csv/Isadora.csv'
     }
   })
   .then(() => console.log('Email enviado com sucesso!'))
   .catch((err) => console.log('Erro ao enviar email: ', err))
}