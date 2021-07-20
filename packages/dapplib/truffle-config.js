require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strategy cost situate under grace flower army giggle'; 
let testAccounts = [
"0x627a6bc2a66d8d90a9d505f5a4b95c87b734e57706f952006572eace1d167570",
"0xd0a2a7e222e102d0cc27c7736fa004e60e5b3cc82d55d492adeca31998fa2333",
"0x0cee1329876b411269d44b98b44cd9b5edd1180ea00c20c06b46a29ad1c8a2e9",
"0x08bbe7701db48edf29ab9793a1e5a1925368b35aa7fcd190c5119572c9403ebf",
"0x3134b97286435f8b7dc7cb4dfb35c22c9b9b56f30226c86a64e82de7c94c04a2",
"0xc9c010f844aad8ac070cbb8ee99608c299877e1c523e847e84a43232dd1abb49",
"0x996f130c7fc0c4fb22f8777dffe36b0e35166227b3e5e932d2db606c70e5011c",
"0xecad53338a3525249a92e0f73959bf9735faa496b77ae204df433888912b78ad",
"0x32f821b84a2a9dd67eb6d63add693f78bfa22c1da0efa1e53466575b2b5b50cc",
"0xd02e4e2b4e4a987a15c39b53e338e5d8a9a366f86eba467a3a75c85656694196"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


