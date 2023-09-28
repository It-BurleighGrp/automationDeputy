import nodemailer from 'nodemailer'


function handleGetEmail(name){
    switch(name){
        case 'Isadora':
            return 'isadora@burleighgrp.com'
        case 'Giovanna':
            return 'giovanna@flockdgrp.com'
        case 'Asami':
            return 'it@burleighgrp.com'
        case 'Isadora':
            return 'isadora@burleighgrp.com'
        case 'Jackie':
            return 'isadora@burleighgrp.com'
        case 'Jade':
            return 'isadora@burleighgrp.com'
        case 'Karmen':
            return 'isadora@burleighgrp.com'
        case 'Rachel':
            return 'isadora@burleighgrp.com'
        case 'Shiho':
            return 'isadora@burleighgrp.com'
        case 'Ana Carolina':
            return 'isadora@burleighgrp.com'
        case 'Melissa':
            return 'isadora@burleighgrp.com'
        case 'Nathalia':
            return 'isadora@burleighgrp.com'
        case 'Danielle':
            return 'isadora@burleighgrp.com'
        default:
            return 'isadora@burleighgrp.com' 
    }
}

export function sendMail(name){
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
     to: handleGetEmail(name),
     subject: `Total hours - ${name}`,
     text: `Here is the total of hours of this week`,
     attachments: {
        filename: `${name}.csv`,
        path: `./csv/${name}.csv`
     }
   })
   .then(() => console.log('Email enviado com sucesso!'))
   .catch((err) => console.log('Erro ao enviar email: ', err))
}