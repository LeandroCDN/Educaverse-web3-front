import { useContext, useState } from "react";
// import ERC20 from "../../../contractAbi/ERC20.json";
import AXONabi from "../../../contractAbi/axonAbi.json";
import AXONSALEabi from "../../../contractAbi/axonSaleAbi.json";
import abi from "../../../contractAbi/abi.json";
import "./buyform.css";
import { types } from "../../../store/storeReducer";
import { StoreContext } from "../../../store/StoreProvider";

var Web3 = require('web3');

const dai = "0x47e3d6A52293ecF9158a06C2499A17BeC58aFAeD"; //Goerli
const axon = "0x171dcf9101deA340646aF7C854f9Dc4A05B141f1"; //Goerli
const axonSale = "0xCb97e5EE30485f96Bb2f17113077b5B803b56248"; //Goerli

export default function BuyForm(){
  const [store, dispatch] = useContext(StoreContext);
  const {walletAccount} = store;

  const [walletAddress, setWalletAddress] = useState("");
  const [tokenBalance, settokenBalance] = useState("");
  const [axonPrice, setaxonPrice] = useState("");
  const [daiCost, setdaiCost] = useState("");
  
  let daiContract = "";
  let axonContract = "";
  let axonSaleContract = "";
  

  // console.log(daiContract.methods);
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
      setaxonPrice(price);
    }
  }

  async function aproveAndBuy() {
    console.log(daiContract.methods);
    const cantOfAxon = (daiCost.toString() / axonPrice.toString());
    const cantOfAxonInWei = Web3.utils.toWei(cantOfAxon.toString(), 'ether');
    await initContracts();
    const alloawance = await daiContract.methods.allowance(walletAddress, axonSale).call();
    console.log(alloawance);
    if(alloawance.toString()<"10000000000"){
      approve().then(()=> {buy(cantOfAxonInWei)});
    }else{
      buy(cantOfAxonInWei);
    }
  }

  

  async function approve(){
    await daiContract.methods.approve(axonSale, "5000000000000000000000000000000").send({from: walletAddress })
  }
  async function buy(cantOfAxonInWei){
    await axonSaleContract.methods.buyTokens(cantOfAxonInWei.toString()).send({from: walletAddress });
  }

  function calculateCostInDai(tokensToBuy){
    return (tokensToBuy.toString() * axonPrice.toString());
  }
  
  
  const handleChange = event => {
    const cost = calculateCostInDai(event.target.value.toString());
   
    setdaiCost(cost);
  };

  function toEther(num){
    return Web3.utils.fromWei(num.toString(), 'ether');
  }

  ethEnabled().then( res=> {getTokenBalance();});
  
  return(
    <>
    {walletAddress != ""
     ? <div className="buyForm">
        <p >Your dai balance: {toEther(tokenBalance)}</p>        
        <p> Axon price: {toEther(axonPrice)} dais</p>          
        <form>
          <input type="number" onChange={handleChange} id="message" placeholder="Cant of Axon" className="inputForm"/>
          {/* <br /><br /> */}
          {/* <button type="button" onClick={aproveAndBuy} className="invertButton">↑ ↓</button> */}
        
          <input type="text" placeholder="cost in dai" value={'Cost: '+toEther(daiCost) + " dais"} className="inputForm"/>
          
          <button type="button" onClick={aproveAndBuy} className="buyFormButton">BUY AXON</button>
          {/* <p> 1 axon : {toEther(axonPrice)} dai</p> */}
          
        </form>
      </div>
     : <p> Please conect your wallet first </p>
    }
    
    </>
  )

}