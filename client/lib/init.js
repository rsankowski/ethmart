// create global `app` namespace
window.app = window.app || {}
// es6 import - notice the capitalized Web3
import Web3 from 'web3'

// initialize web3
window.web3 = new Web3() //web3.currentProvider

// set the provider to our local dev node
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545')) //ganache

// connect to ipfs (local ipfs daemon)
import ipfs from 'ipfs-js'
window.ipfs = ipfs
ipfs.setProvider()

//set coinbase to defaultAccount
Meteor.startup(function () {
  EthAccounts.init()
})
