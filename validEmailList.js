function validEmailList(emailList) {
  let correctAddress = [];

  function isValidEmail(email) {
    let atIndex = email.indexOf("@");
    let domain = email.substring(atIndex + 1, email.length);
    if (
      atIndex != 0 &&
      email.indexOf(" ") == -1 &&
      domain.indexOf("@") == -1 &&
      domain.indexOf(".") != -1
    )
      return true;
    else return false;
  }

  for (let i = 0; i < emailList.length; i++) {
    if (isValidEmail(emailList[i]) == true) {
      correctAddress.push(emailList[i]);
    }
  }
  return correctAddress;
}
