import { loginFailure, loginStart, loginSuccess, resetLoginState } from "./userRedux";
import { publicRequest } from "../requestMethod";
import { resetProduct } from "./cartRedux";
// import User from "../../../ECONAPI/models/User";

export const login=async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res=await publicRequest.post("/auth/login",user)
        console.log(user)
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure(err))
}
}
export const register=async (user)=>{

    try{
        const res=await publicRequest.post("/auth/register",user)
         
    }
    catch(err){
       console.error(err);
}
}
export const logout = async (dispatch) => {
    // dispatch(logout());
    dispatch(resetLoginState());
  };
  export const productReset = async (dispatch) => {
    // dispatch(logout());
    dispatch(resetProduct());
  };

// export const logout =async (dispatch,user)=>{

// dispatch(resetLoginState(user));
// try{
//     const res=
// }
// }