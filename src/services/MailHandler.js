import emailjs from '@emailjs/browser';

export const sendMail = async (contactForm) => {

    let email = contactForm.email.value
    let name = contactForm.name.value
    let subject = contactForm.subject.value
    let message = contactForm.message.value
    
    
    console.log(name,email,subject,message)

    return {
        message: 'Your message has been successfully sent!'
    }
}