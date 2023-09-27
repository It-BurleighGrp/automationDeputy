import nodemailer from 'nodemailer'


export async function sendMail(){
    const transport = nodemailer.createTransport({
        host: '',
        port: 0,
        secure: false,
        auth: {
            user: '',
            pass:'',
        }
    })
    
   transport.sendMail({
     from: '',
     to: '',
     subject: '',
   }) 
}