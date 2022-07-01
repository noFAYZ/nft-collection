import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'WeDontGiveAShit',
  tokenName: "We Don't Give A Shit",
  tokenSymbol: 'YC',
  hiddenMetadataUri: 'ipfs://',
  maxSupply: 7777,
  walletLimit: 2,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0x6A000FC7c9c9C330F57c5ac71E0E7e73298108AE",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
