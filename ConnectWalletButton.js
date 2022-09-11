const ConnectWalletButton = ({connectWallet}) =>
  <div className='mt-40'>
  <h1 className='text-4xl bolder text-black mb-3'>
    🔐 ETHKeys 
  </h1>
  <h2 className='text-xl bolder text-black'>
    a password manager powered by etherium blockchain 
  </h2>
  <button
    className='h-[5rem] text-2xl text-white font-bold py-3 px-12 bg-[#000000] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out mt-10'
  // Add an onClick functionality
    onClick={connectWallet}
  >
    Connect Wallet
  </button>
  </div>


export default ConnectWalletButton