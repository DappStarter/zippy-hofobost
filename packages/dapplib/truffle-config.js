require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture story dash often unable hunt option army gas'; 
let testAccounts = [
"0x64a2082d21950424304e506930921ae9da35a6189d69f06a35aec1330a83121e",
"0x22935da606ed2f8fe9db8ca08ce7f407e00bf20ee717f661006c8b8d856c27c7",
"0xdb98c64feebd8b95180481eeb76ebd6c82e7836a967003692f9279f239831b51",
"0xd4fbcd3136e45c089ead650d95b7d7d0d2ddcd61008da9204636ea64cf018675",
"0x3c9c87d5b3f6dab061cadf7059ed6b40d4178d1109941ea53dbfe5d63e668fef",
"0xda6f174307059d3b710fc58ee1774b34816dab3590a5c8ee94fb862fbaf01c1a",
"0x63a82dd7ba4202b9691a8fe37c29c760ea3fbe1e4eb63acb44d95b0d29d3ddf2",
"0x2f33c3dcb820e683790937e9956fdf4b5a16faeceb2fd4ccc81365811f5ede4f",
"0x66ce73c58c54ed3285f4f7876cf8a5616cd0804935bc8861d53650127c037a8d",
"0x06b41b62e3eca30509dfabc7d949bf08a93452d03c93332284d9ac31b5af93e6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

