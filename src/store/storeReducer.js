const types = {
  productWallet: 'product - wallet'
}

const initialStore = {
  walletAccount: {address: ""}
}


const storeReducer = (state,action)  => {
  switch(action.type) {
    case (action.type):
      return {
        ...state,
        walletAccount: action.payload
      }
    
    default:
      return state;
  }
}

export { initialStore, types};
export default storeReducer;