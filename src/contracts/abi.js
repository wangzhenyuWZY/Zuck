import zuckToken from './zuckToken_abi.json'
import zuckNft from './zuckNft_abi.json'
export const abi = {
  zuckToken,
  zuckNft
}
const addrKey = [
  'zuckToken',
  'zuckNft'
]
export const prodAddrs = fillZeroAddr({
  zuckToken: '0xC426b448f5F23C801E4aBb6FE264428E7A169aF6',
  zuckNft:'0xC99ABeF3e868c918043084Ee853513e6fEfBA567'
})

export const testAddrs = fillZeroAddr({
  zuckToken: '0xC426b448f5F23C801E4aBb6FE264428E7A169aF6',
  zuckNft:'0xC99ABeF3e868c918043084Ee853513e6fEfBA567'
})
function fillZeroAddr (addrs) {
  addrKey.forEach(item => {
      if (!addrs[item]) {
          addrs[item] = '0x0000000000000000000000000000000000000000'
      }
  })
  return addrs
}