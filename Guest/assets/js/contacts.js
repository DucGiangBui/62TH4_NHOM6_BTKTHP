function checkName() {
    let Name = document.getElementById("Name");
    let NameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    if (NameRegex.test(Name.value)) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkEmail() {
    let email = document.getElementById("Email");
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email.value)) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkMessage() {
    let message = document.getElementById("Message");
    let messRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    if (messRegex.test(message.value)) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkSubject() {
  let subject = document.getElementById("Subject");
    let subRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    if (subRegex.test(subject.value)) {
      return true;
    } else {
      return false;
    }
  }
  
  let register = document.getElementById("button");
  
  register.addEventListener("click", function (e) {
    e.preventDefault();
  
    let statusOfName = document.getElementById("statusOfName");
    let statusOfEmail = document.getElementById("statusOfEmail");
    let statusOfMess = document.getElementById("statusOfMessage");
    let statusOfSub = document.getElementById("statusOfSubject");
    
  
    if (checkName()==false) {
      statusOfName.textContent = "Invalid name !";
      statusOfName.style.color = "grey";
      statusOfName.style.fontWeight = "500"; 
      statusOfName.style.fontSize = "17px"; 
      statusOfName.style.marginLeft = "10px"; 
    } else{
      statusOfName.textContent = " ";
      statusOfName.style.color = "green"; 
    }
  
    if (checkEmail()==false) {
      statusOfEmail.textContent = "Invalid email !";
      statusOfEmail.style.color = "grey";
      statusOfEmail.style.fontWeight = "500"; 
      statusOfEmail.style.fontSize = "17px"; 
      statusOfEmail.style.marginLeft = "10px";
    } else{
      statusOfEmail.textContent = " ";
      statusOfEmail.style.color = "green"; 
    }
  
    if (checkMessage()==false) {
      statusOfMess.textContent = "Please enter a message before sending !";
      statusOfMess.style.color = "grey"; 
      statusOfMess.style.fontWeight = "500"; 
      statusOfMess.style.fontSize = "17px"; 
      statusOfMess.style.marginLeft = "10px"; 
    } else{
      statusOfMess.textContent = " ";
      statusOfMess.style.color = "green"; 
    }
    
    if (checkSubject()==false) {
        statusOfSub.textContent = "Please enter a subject before sending !";
        statusOfSub.style.color = "grey"; 
        statusOfSub.style.fontWeight = "500"; 
        statusOfSub.style.fontSize = "17px"; 
        statusOfSub.style.marginLeft = "10px"; 
      } else{
        statusOfSub.textContent = " ";
        statusOfSub.style.color = "green"; 
      }
  });