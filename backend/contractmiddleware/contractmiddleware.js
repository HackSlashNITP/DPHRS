// const {ethers}=require('ethers');
// const contractABI=require('../../frontend1/src/ABI.json');
// const contractaddress='0x5FbDB2315678afecb367f032d93F642f64180aa3';
// const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');

// async function getNetwork() {
//   const network = await provider.getNetwork();
//   console.log('Network:', network);
// }

// getNetwork();
// const contractmid=async(req,res,next)=>{
//     try{   
//         const provider=new ethers.JsonRpcProvider('http://127.0.0.1:8545');
//         const signer=provider.getSigner();
//         const contract=new ethers.Contract(contractaddress,contractABI,signer);
//         console.log(contract);
//         req.contract=contract;
//         next();
//     }catch(error){
//         console.log("heloerror",error);
//     }
// }

// // module.exports=contractmid;