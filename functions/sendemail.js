import emailjs from '@emailjs/browser';

export async function sendMail(from_name,from_email,message){
    const mail = await emailjs.send("service_xqb96om","template_1jv63nj",{
        from_name: from_name,
        to_name: "Akash",
        from_email: from_email,
        message: message,
        },"DGqdZSCg9-_aPTJVH")
    if(mail.status===200) return true
    return false
}