import Bcrypt from "bcrypt"

const Helpers={};

Helpers.hashing =(password)=>{
    const Salt_roun=12;
    return Bcrypt.hash(password,Salt_roun)
}


Helpers.desHashing=(passwordLoguin,passwordBD)=>{
    return(
        Bcrypt.compare(passwordLoguin,passwordBD)
    )
}

export default Helpers

