import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";

function LogInInfo(props) {
  const [isLogin, setIsLogin] = useState(false) // login = true 表示有登入

  const [loginAccount , setLoginAccount] = useState({});  //登入者資訊
  useEffect(() => {
    let innerMember = localStorage.getItem("loginAccount") == null? null : JSON.parse(localStorage.getItem("loginAccount"));
    if(innerMember == null) {
      props.history.push("/signInForm");
    }else {
      setIsLogin(true);
      setLoginAccount(innerMember);
      props.setMember(innerMember);
    }
  } , [props.reload])

  async function doLogOut() {
    localStorage.removeItem("loginAccount");
    setIsLogin(false);
    setLoginAccount(null);
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