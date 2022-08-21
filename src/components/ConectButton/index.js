import { useState, useEffect, useContext } from "react";
// import ErrorMessage from "./ErrorMessage";
import truncateEthAddress from 'truncate-eth-address'
import { StoreContext } from "../../store/StoreProvider";
import { types } from "../../store/storeReducer";
import "./button.css";

const networks = {
  rinkeby: {
    chainId: '0x4',
    chainName: "Rinkeby",
    nativeCurrency: {
      name: "rETH",
      symbol: "rETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_rinkeby"],
    blockExplorerUrls: ["https://rinkeby.etherscan.io/"]
  },
  goerli: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: "Goerli",
    nativeCurrency: {
      name: "gETH",
      symbol: "gETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/"],
    blockExplorerUrls: ["https://goerli.etherscan.io"]
  },
  mumbai:{
    chainId: 0x5,
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
      method: "wallet_switchEthereumChain",
      params: [{ chainId: '0x5' }],
    });
  } catch (err) {
    setError(err.message);
  }
};


const ConectButton = () => {
  const [store, dispatch] = useContext(StoreContext);
  const {walletAccount} = store;
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
    if(!(chainId === 5)){
      handleNetworkSwitch("goerli"); 
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
      console.log(ethChainId);
      if((ethChainId != 0x5)){
        handleNetworkSwitch("goerli"); 
      }else {
        try{

          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
         
          dispatch({
            type: types.productWallet,
            payload: {address: accounts[0] }
          })
          
          
        }catch(error){
          console.log('Error connecting...');
        }

      }
      
    }else {
      window.alert('Please install metamask!');
    }
  }
  

  return(
    <>
    { walletAccount.address == ""
      ? <button
          onClick={conectWallet}
          className="conectButton"
        >
          Connect Wallet
        </button>
      : <div className="div-button-wallet"><p className="p-button-wallet"> {truncateEthAddress(walletAccount.address)} </p></div>
    }
    </>
  )
}

export  { ConectButton };

//NEW TAB 
/*
https://bobbyhadz.com/blog/react-open-link-in-new-tab#:~:text=To%20open%20a%20link%20in,loaded%20into%20a%20new%20tab.
*/