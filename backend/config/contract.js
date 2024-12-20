const { ethers } = require('ethers');
require('dotenv').config();

const provider = new ethers.providers.InfuraProvider('mainnet', process.env.INFURA_PROJECT_ID);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = require('../../ABI.json'); // ABI of your contract
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, wallet);