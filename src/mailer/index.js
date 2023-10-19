import nodemailer from 'nodemailer'
import 'dotenv/config'

function handleGetEmail(name){
    switch(name){
        case 'Isadora':
            return 'isadora@flockdgrp.com.au'
        case 'Giovanna':
            return 'giovanna@flockdgrp.com'
        case 'Asami':
            return 'asha.bgrp@gmail.com'
        case 'Isadora':
            return 'isadora@flockdgrp.com.au'
        case 'Jackie':
            return 'jade.bgrp@gmail.com'
        case 'Jade':
            return 'jaen.bgrp@gmail.com'
        case 'Karmen':
            return 'kawa.bgrp@gmail.com'
        case 'Rachel':
            return 'racu.bgrp@gmail.com'
        case 'Shiho':
            return 'shko.bgrp@gmail.com'
        case 'Ana Carolina':
            return 'anca.bgrp@gmail.com'
        case 'Melissa':
            return 'meco.bgrp@gmail.com'
        case 'Nathalia':
            return 'nasa.bgrp@gmail.com'
        case 'Danielle':
            return 'damo.bgrp@gmail.com'
        case 'Dalila':
            return 'daro.bgrp@gmail.com'
        case 'allEmployees':
            return 'fay@flockdgrp.com.au'
    }
}

export function sendMail(name){
    console.log('bateu aqui>>>', name)
    const transport = nodemailer.createTransport({
        host: `${process.env.EMAIL_HOST}`,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: `${process.env.AUTH_USER}`,
            pass:`${process.env.AUTH_PASSWORD}`,
        }
    })
    
   transport.sendMail({
     from: `${process.env.EMAIL_FROM}`,
     to: handleGetEmail(name),
     subject: `Total hours - ${name}`,
     text: `Here is the total of hours of this week`,
     attachments: {
        filename: `${name}.csv`,
        path: `./reports/${name}.csv`
     }
   })
   .then(() => console.log('Email enviado com sucesso!'))
   .catch((err) => console.log(`Erro ao enviar email:${name}`, err))
}