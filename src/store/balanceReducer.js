const initialState = {
  balance: 0,
  loading:false
};

function balanceReducer(state = initialState, action) {
  //NOTE: DO NOT MODIFY STATE DIRECTLY
  switch (action.type){
    case "DEPOSIT": return {
      balance: state.balance + action.payload, //return recreated object
      loading:false
    }
    case "WITHDRAW": return {
      balance: state.balance - action.payload,
      loading:false

    }
    case "LOADING": return{
      ...state, loading:true
    }
    default:
      return state;
  }
}

export default balanceReducer;
