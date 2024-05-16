
//aşağıdakiler iletişim sayfası için

const form = document.querySelector('form');

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("telefon");
const subject = document.getElementById("konu");
const mess = document.getElementById("mesaj");

function sendEmail()
{
    const bodyMessage = `İsim-Soyisim: ${fullName.value}<br> Email adresi: ${email.value}
    <br> Telefon Numarası: ${phone.value}<br> İletiniz: ${mess.value}`;

    Email.send({ 
        SecureToken:"1d0faf33-640c-474c-9570-cc9653807d5f",
        To: 'emmaflaken@gmail.com',
        From: "emmaflaken@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
      message => 
      {

          if(message == "OK") 
            {
                Swal.fire({
                    title: "iletildi",
                    text: "Mesaj iletildi!",
                    icon: "success"
                  });
                  
            }
      }
    );
}

function checkInputs()
{
    const items = document.querySelectorAll(".item");

    for (const item of items)
    {
           if(item.value == "") 
            {
                item.classList.add("error");
                item.parentElement.classList.add("error ");
            }  
            if(items[1].value != "")
            {
                checkEmail()
            } 

            items[1].addEventListener("keyup", () => {

                checkEmail();

            });

            item.addEventListener("keyup" , () => {
                if(item.value != "")
                {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                }
                else 
                {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            })
    }
}

function checkEmail()
{
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex))
    {
       email.classList.add("error");
       email.parentElement.classList.add("error"); 

       if(email.value != "")
        {
            errorTxtEmail.innerText="Lütfen geçerli bir email adresi girin";
        }
        else 
        {
            errorTxtEmail.innerText="bu alanı boş bırakamazsınız!";
        }
    }
    else
    {
       email.classList.remove("error");
       email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    checkInputs(); 

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")
        && !subject.classList.contains("error") && !mess.classList.contains("error")) 
      {
        sendEmail();

        form.reset();
        return false;
      }
    
     
    
});  
 




