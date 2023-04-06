import React, { useState } from "react";

const 

UserNameAndPasswordValidation  = () => {
  const [UserNames, SetUserNames] = useState([
    { Username: "James" },
    { Username: "Rock" },
    { Username: "Robert" },
    { Username: "Thomas" },
    { Username: "Galga" },
    { Username: "Angelina" },
    { Username: "Rebecca" },
    { Username: "Lara" },
    { Username: "Sara" },
    { Username: "Kiara" },
    { Username: "Elizebeth" },
  ]);
  const [NewUserGivenName, SetNewUserGivenName] = useState("");
  const [NewUserNameMesg, SetNewUserNameMesg] = useState("");
  const [ErrorMessage, SetErrorMessage] = useState([
    {PassStr : "Password length should be 4-16 Characters"},
    { UpperC: "Password doesn't have any UpperCase Letter " },
    { LowerC: "Password doesn't have any Lowercase Letter" },
    { Numbers: "Password doesn't have any Number" },
    { Symbols: "Password doesn't have any Special Characters like @ $ -" },
    {AllOkPass: "Password Strength- Strong"}
  ]);

  const [Passwordstr, SetPasswordStr ]= useState({display:"",color:"red", fontSize : "100%"})
  const [NumberPasswordStyle, SetNumberPasswordStyle ]= useState({display:"",color:"red", fontSize : "100%"})
  const [UpperPasswordStyle, SetUpperPasswordStyle ]= useState({display:"",color:"red", fontSize : "100%"})
  const [LowerPasswordStyle, SetLowerPasswordStyle ]= useState({display:"",color:"red", fontSize : "100%"})
  const [SymbolPasswordStyle, SetSymbolPasswordStyle ]= useState({display:"",color:"red", fontSize : "100%"})
  const [AllOkPassStyle, SetAllOkPassStyle ]= useState({display:"none",color:"green", fontSize : "100%"})

  const SetNewUserUSERNameHandle = (event) => {
    SetNewUserGivenName(event.target.value);
    console.log(event.target.value);
  };

  const NewUserGivenNameCheckHandle = () => {
    for (var userName of UserNames) {
      if (NewUserGivenName == userName.Username) {
        SetNewUserNameMesg("UserName Already Taken");
        break;
      } else {
        SetNewUserNameMesg("UserName Available");
      }
    }
  };

  const OnSubmitClickHandle = (event) => {
    event.preventDefault();
    SetUserNames((preval) => [...preval, { Username: NewUserGivenName }]);
  };


  const PasswordVerification = (event) =>{
    console.log(event.target.value)
    let Passwords = event.target.value;
    let Upperregex = /[A-Z]/
    let Lowerregex = /[a-z]/
    let Numberregex = /[0-9]/
    let Symbolregex = /[@\.\$\-_]/
   
    if(Passwords.length>=4 && Passwords.length<=16){}
    if(Passwords.match(Upperregex)){
      console.log("uppermatch")
      SetNumberPasswordStyle({display:"none",color:"red", fontSize : "100%"})
    }
    else{
      SetNumberPasswordStyle({display:"",color:"red", fontSize : "100%"})
    }
    if(Passwords.match(Lowerregex)){
      console.log("lowerMatch");
      SetUpperPasswordStyle({display:"none",color:"red", fontSize : "100%"})
    }
    else{
      SetUpperPasswordStyle({display:"",color:"red", fontSize : "100%"})
    }
    if(Passwords.match(Numberregex)){
      console.log("Numbermatch");
      SetLowerPasswordStyle({display:"none",color:"red", fontSize : "100%"})
    }
    else{
      SetLowerPasswordStyle({display:"",color:"red", fontSize : "100%"})
    }
    if(Passwords.match(Symbolregex)){
      console.log("symbolMatch");
      SetSymbolPasswordStyle({display:"none",color:"red", fontSize : "100%"})
    }
    else{
      SetSymbolPasswordStyle({display:"",color:"red", fontSize : "100%"})
    }
    if(Passwords.match(Upperregex)&&Passwords.match(Lowerregex)&&Passwords.match(Numberregex)&&Passwords.match(Symbolregex)){
      SetAllOkPassStyle({display:"",color:"green", fontSize : "100%"})
    }
  }

  return (
    <div className="container-fluid text-center">
      <h1>forms</h1>
      <form action="">
        <label>Enter Name:</label>
        <br />
        <input type="text" name="" id="" />
        <br />
        <br />
        <label>Enter UserName:</label>
        <br />
        <input
          type="text"
          name=""
          id=""
          onBlur={NewUserGivenNameCheckHandle}
          value={NewUserGivenName}
          onChange={SetNewUserUSERNameHandle}
        />
        <br />
        <br />
        <dt>{NewUserNameMesg}</dt>
        <label>Enter Password:</label>
        <br />
        <input type="text" onChange={PasswordVerification} name="" id="" />
        <dl className="col-md-4 mx-auto mt-4" >
          <dt><li style={NumberPasswordStyle} className="p-1 ">{ErrorMessage[0].PassStr}</li></dt>
          <dt><li style={NumberPasswordStyle} className="p-1 ">{ErrorMessage[1].UpperC}</li></dt>
          <dt><li style={UpperPasswordStyle} className="p-1 ">{ErrorMessage[2].LowerC}</li></dt>
          <dt><li style={LowerPasswordStyle} className="p-1 ">{ErrorMessage[3].Numbers}</li></dt>
          <dt><li style={SymbolPasswordStyle} className="p-1 ">{ErrorMessage[4].Symbols}</li></dt>
          <dt><li style={AllOkPassStyle} className="p-1 ">{ErrorMessage[5].AllOkPass}</li></dt>
        </dl>
        <br />
        <button onClick={OnSubmitClickHandle}>Submit </button>
      </form>
    </div>
  );
};

export default UserNameAndPasswordValidation;