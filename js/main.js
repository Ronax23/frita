function creator(sub_body, errors)
{
    let old=sub_body.querySelector("ul")
        if (old)
        {
            old.remove()
        }
   if(errors.length>0)
   {
      let disc=document.createElement("ul")
            disc.style.width="100%"
            disc.style.padding="100px"
            disc.style.marginTop="80px"
            disc.style.boxShadow="5px 5px 10px  #f5f5f5"
            sub_body.append(disc)
            errors.forEach(ele=>{
                let self=document.createElement("li")
                self.innerHTML=ele
                disc.append(self)
            })
   }
}


let subs=document.querySelector("#sec8 #forms")
let sub_bodyy=document.querySelector("#sec8 .container")
let confrom=document.querySelector("#contact")
let uname,email
if(subs)
{
    uname=subs.querySelector("#form_name")
    email=subs.querySelector("#Email")
    subs.addEventListener("submit",(e)=>{
        e.preventDefault()
        let errors=[]
        if(uname.value.length<4)
        {
            errors.push("Name Too Short");
        }
        if(email.value.length<4|| !email.value.includes("@"))
        {
            errors.push("Not Proper Email")
        }
       
        
           creator(sub_bodyy,errors)
        
         if(errors.length===0){
            alert("Done")
            subs.reset();
        }
    })
}

if(confrom)
{
    let form=confrom.querySelector("#contact_form")
    let Fname=form.querySelector("#Fname")
    let Lname=form.querySelector("#Lname")
    let emails=form.querySelector("#Email")
    let message=form.querySelector("#tex_ar")

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let error=[]
        if(Fname.value.length<4)
        {
            error.push("First Name Too Short")
        }
        if(Lname.value.length<4)
        {
            error.push("Last Name Too Short")
        }
        if(emails.value.length<4 || !emails.value.includes("@"))
        {
            error.push("Wrong Email")
        }
        if(message.value.length<4)
        {
            error.push("Message Too Short")
        }
       
             creator(confrom,error) 
    
        if(error.length===0){
            alert("Done")
            form.reset();
        }
      
    
           
        
    })
}

