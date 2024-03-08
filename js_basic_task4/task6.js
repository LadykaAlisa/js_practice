let email = "daniel.abrams@gmail.com";

let emailParts = email.split('@');

emailParts.splice(1, 1, 'changed.com');

let  modifiedEmail = emailParts.join('@');

console.log(modifiedEmail);





