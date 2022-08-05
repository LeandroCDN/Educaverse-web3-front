import { useState, useEffect } from "react";
// import ErrorMessage from "./ErrorMessage";
import truncateEthAddress from 'truncate-eth-address'
import "./button.css";

const networks = {
  rinkeby: {
    chainId: '0x4',
    chainName: "Rinkeby",
    nativeCurrency: {
      name: "rETH",
      symbol: "rETH",
      decimals: 18
    },
    rpcUrls: ["https://rpc.ankr.com/eth_rinkeby"],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/"]
  },
  mumbai:{
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Mumbai",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.matic.today"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  }
}

const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName]
        }
      ]
    });
  } catch (err) {
    setError(err.message);
  }
};



const ConectButton = () => {

  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState();

  const handleNetworkSwitch = async (networkName) => {
    if(typeof window.ethereum !== 'undefined'){
      setError();
      await changeNetwork({ networkName, setError });
    }else{
      console.log('No wallet');
    }
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
    if(!(chainId === 80001)){
      handleNetworkSwitch("mumbai"); 
    }
  };

  useEffect(() => {
    if(typeof window.ethereum !== 'undefined'){
      window.ethereum.on("chainChanged", networkChanged);

      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }else{
      console.log('No wallet');
    }
    
  }, []);


  async function conectWallet() {
    if(typeof window.ethereum !== 'undefined'){
      const ethChainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
      // console.log(ethChainId);
      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        if((ethChainId != `0x${Number(80001).toString(16)}`)){
          handleNetworkSwitch("mumbai"); 
        }
      }catch(error){
        console.log('Error connecting...');
      }
    }else {
      window.alert('Please isntall metamask!');
    }
  }
  

  return(
    <>
    { walletAddress == ""
      ? <button
          onClick={conectWallet}
          className="conectButton"
        >
          Connect Wallet
        </button>
      : <p>{truncateEthAddress(walletAddress)}</p>
    }
    </>
  )
}

export  { ConectButton };