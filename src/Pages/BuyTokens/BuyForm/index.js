import { useContext, useState } from "react";
// import ERC20 from "../../../contractAbi/ERC20.json";
import AXONabi from "../../../contractAbi/axonAbi.json";
import AXONSALEabi from "../../../contractAbi/axonSaleAbi.json";
import abi from "../../../contractAbi/abi.json";
import "./buyform.css";
import { types } from "../../../store/storeReducer";
import { StoreContext } from "../../../store/StoreProvider";
import swal from 'sweetalert';

var Web3 = require('web3');

const dai = "0x47e3d6A52293ecF9158a06C2499A17BeC58aFAeD"; //Goerli main
const axon = "0xE9e78a448a67d913A8f8d2A8627f26Ece4093c34"; //Goerli main
const axonSale = "0xD6Eb81a7235FEB620F60BC4508E80Fa0edf2F90E"; //Goerli main
// const axon = "0x7c453f2Bf6A3A95687a07B6404a89CACd594936E"; //Goerli mio
// const axonSale = "0x60AD202a0Edc3133c9B4c0c4406CabF05578BB81"; //Goerli mio

export default function BuyForm(){
  const [store, dispatch] = useContext(StoreContext);
  const {walletAccount} = store;

  const [walletAddress, setWalletAddress] = useState("");
  const [tokenBalance, settokenBalance] = useState("");
  const [axonPrice, setaxonPrice] = useState("");
  const [daiCost, setdaiCost] = useState("");
  const [canBuybool, setcanbuybool] = useState(false);
  const [buyText, setbuyText]  = useState("BUY")
 
  
  let daiContract = "";
  let axonContract = "";
  let axonSaleContract = "";
  
  const ethEnabled = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      window.web3 = new Web3(window.ethereum);
      await initContracts();
      setWalletAddress(accounts[0]);
      dispatch({
        type: types.productWallet,
        payload: {address: accounts[0] }
      })
      return true;
    }    
    
    return false;
  } 
  
  async function initContracts(){
    
    daiContract = new window.web3.eth.Contract(abi, dai);    
    axonSaleContract = new window.web3.eth.Contract(AXONSALEabi, axonSale);
    axonContract = new window.web3.eth.Contract(AXONabi, axon);
    
  }


  async function getTokenBalance() {     
    if(walletAddress != ""){
      const balance = await daiContract.methods.balanceOf(walletAddress).call();
      const price = await axonSaleContract.methods.getPrice().call();
      settokenBalance(balance);
      setaxonPrice(toEther(price));
    }
  }

  async function aproveAndBuy() {
    const cantOfAxon = (daiCost.toString() / axonPrice.toString());
    const cantOfAxonInWei = Web3.utils.toWei(cantOfAxon.toString(), 'ether');
    await initContracts();
    const alloawance = await daiContract.methods.allowance(walletAddress, axonSale).call();
   
    if(alloawance.toString()<"10000000000"){
      setbuyText('APPROVING...')
      await approve().then(()=> {setbuyText('BUYING...')})
      await buy(cantOfAxonInWei).then(() => {getTokenBalance()});
    }else{
      buy(cantOfAxonInWei).then(() => {
        getTokenBalance();
        setbuyText("BUY");
      });
    }
  }

  async function approve(){
    // setbuyText('BUYING...')
    await daiContract.methods.approve(axonSale, "5000000000000000000000000000000").send({from: walletAddress })
  }

  async function buy(cantOfAxonInWei){
    const onSale = await axonSaleContract.methods.getAmountOnSale().call()
    
    if(parseInt(toEther(onSale)) >= parseInt(toEther(cantOfAxonInWei))){
      await axonSaleContract.methods.buyTokens(cantOfAxonInWei.toString()).send({from: walletAddress });
    }else{
      swal('Not enough tokens to sell ')
    }
        
  }


  //New Functions
  async function getAmountprice(amount){
    await axonSaleContract.methods.getAmountprice(amount).call();
  }
  async function canBuy(){
    // await initContracts();
    let canBuy = await axonSaleContract.methods.canBuy().call();
    setcanbuybool(canBuy);
  }

  // useEffect(() => {
  //   canBuy();
  // }, [])
  // if(!canBuybool ){
  //   canBuy();
  // }

  async function calculateCostInDaiWhitContract(tokensToBuy){
    let amount = await axonSaleContract.methods.getAmountprice(tokensToBuy).call();
    return (amount);
  }
  function calculateCostInDai(tokensToBuy){
    return (tokensToBuy * axonPrice).toString();
  }
  
  const handleChange = event => {
    const cost =  calculateCostInDai(event.target.value.toString());  
    setdaiCost(cost);
  };

  function toEther(num){
    return Web3.utils.fromWei(num.toString(), 'ether');
  }

  if(tokenBalance == ""){
    ethEnabled().then( res=> {canBuy().then( res=> {getTokenBalance()})});
  }

  return(
    <>
    {walletAddress != ""
     ? <div className="buyForm">
      {canBuybool
      ? <>
        <p> Balance: {toEther(tokenBalance)} DAIs</p>        
        <p className="p-buyForm"> Axon price: {axonPrice} dais</p>          
        <form>          
          <input type="number" disabled={toEther(tokenBalance) < axonPrice}  onChange={handleChange} id="message" placeholder="Cant of Axon" className="inputForm"/>
          <input 
            type="text"  
            disabled="true" 
            placeholder="cost in dai" 
            value={'Cost: '+daiCost + " dais"} 
            className={(parseInt(toEther(tokenBalance)) < parseInt(axonPrice) ? "inputForm" : "inputForm2")}/>
          <button 
            type="button" 
            disabled={toEther(tokenBalance) < axonPrice} 
            onClick={aproveAndBuy} 
            className={(toEther(tokenBalance) <axonPrice ? "buyFormButton" : "buyFormButtonPointer")}
          >
            {buyText} 
          </button>
        </form>
        </>
      : <p> There are no tokens for sale</p>
      }
      </div>
     : <p> Please conect your wallet first </p>
    }
    
    </>
  )

}