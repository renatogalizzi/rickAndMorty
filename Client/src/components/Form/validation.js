

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/;

export default function validation (inputs) {
  const errors = {};
  
if (!regexEmail.test(inputs.email) && inputs.email.length < 35) {
    errors.email="Debe ser un correo electrónico"}
    else if (inputs.email.length > 35) errors.email="menor a 35 caracteres";
if (inputs.email === "" ) errors.email="no puede estar vacio";
    
if (inputs.password.length < 6 || inputs.password.length > 10 ) errors.password="debe tener mas de 6 y menos de 10 caracteres"
else if (!inputs.password.match(regexPassword)) errors.password="debe tener 1 numero";

return errors;
}