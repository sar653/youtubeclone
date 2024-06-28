export default function validate(values){
    let errors={}
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

    if(!values.firstname.trim()){

        errors.firstname="username required"
    }
    if(!values.firstname.trim().length<2){

        errors.firstname="atleast 2 character"
    }



    if (phoneRegex.test(values.inputvalue)) {
        errors.inputvalue='Valid phone number';
      } else if (emailRegex.test(values.inputvalue)) {
        errors.inputvalue='Valid email';
      } else {
       errors.inputvalue="invalid username or number"
      }
    
    if(!values.surname.trim()){

        errors.surname="username required"
    }
    if(!values.surname.trim().length<2){

        errors.surname="atleast 2 character"
    }




return errors




}