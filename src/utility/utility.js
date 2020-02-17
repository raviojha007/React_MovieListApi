 validation=(Username,Email,Password)=>{
    var pattern= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    var Pass= /^[a-zA-Z]\w{3,14}$/;
    if(Username.length<5){
        alert("username should be min 5 chars ")
        return false;
      }else if(pattern.test(Email)){
        alert("plz enter vails email pattern")
        return false;
      } else if(Password.test(Pass)){
        alert("plz enter alphabet and atlest one number ")
        return false;
      }
      else{
        alert("plz insert all felids");
        return false;
      }
      
};
