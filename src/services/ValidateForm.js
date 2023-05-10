
export const ValidateForm = (contactForm) => {
  const errors = []

    if(contactForm.name.value.length < 1 || contactForm.name.value.length > 64){
        errors.push("Name must be a value less than 64 characters")
    }
    if(contactForm.subject.value.length < 1 || contactForm.name.value.length > 32){
        errors.push("Subject must be a value less than 32 characters")
    }
    if(contactForm.message.value.length < 1 || contactForm.name.value.length > 400){
        errors.push("Message must be a value less than 400 characters")
    }

    const errorString = errors.reduce((final,error)=> final + `\n>>> ${error}`,'')
    return errorString
}
