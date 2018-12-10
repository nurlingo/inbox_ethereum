const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'punch fix wonder inner disagree life tent company sense chimney upper defy',
  'https://rinkeby.infura.io/v3/2e965140b3a04e6180399ce3c02184e3'
);

const BEST_GREETING = 'Alsalaamu 3alaikum';
const BEST_FAREWELL = 'Wa 3alaikumussalaam';

const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [BEST_GREETING] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('contract deployed to', result.options.address);
};
deploy();
