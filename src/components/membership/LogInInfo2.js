import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";

function LogInInfo(props) {
  // console.log("login props" , props)
  const [isLogin, setIsLogin] = useState(false) // login = true 表示有登入
  const [loginAccount , setLoginAccount] = useState(localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount")));  //登入者資訊
  console.log(loginAccount.memberName)
  useEffect(() => {
    // console.log("loginAccount")
    if(loginAccount == null) props.history.push("/signInForm");
    setIsLogin(true);
    props.setMember(loginAccount);
  },[loginAccount]);

  useEffect(() => {
    // console.log("reload")
    if(props.reload != null) setLoginAccount(localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount")));
  }, [props.reload]);

  async function doLogOut() {
    localStorage.removeItem("loginAccount");
    setIsLogin(false);
    props.setMember(null);
    props.history.push("/signInForm");
  }

return(
<>
  <div className="memberStatusGroup">
    <h3 className="memberStatus" id="memberStatusId">
      目前會員狀態：{isLogin ? loginAccount.memberName + "，歡迎回家~" : "登出" }
    </h3>
    {isLogin ? 
      <button className="memberStatusBtn" onClick={() => {
        doLogOut();
        }}>登出</button> :
      <button className="memberStatusBtn"
        onClick={() => {
          props.history.push("/signInForm");
        }}>登入</button>
    }
  </div>
</>
)}

export default LogInInfo