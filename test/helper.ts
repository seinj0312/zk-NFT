export enum revertMessages {
  INVALID_PROOF = "Proof is not valid",
  INVALID_HASH = "Invalid hash",
  SAME_OWNER = "Same owner",
}

// mint NFT
export const initMintProofsArgs = [
  ["0x2064b57fe95dfcd4d1f6c3ea8011186b59caa3f9f32f4a06595d9314ea2cc731", "0x29176fa442f88c66f0cac76fe4dddf72e6a2e2adbe07b0771d2215db107a22fe"],
  [
    ["0x1d15808fa90e5972fe5fb14ac0c07641f3db307e2a870c198d57a906b4a96301", "0x25fb9616bc7c87ba9b106baf1639de15f223d1243e5e6d0962b717a50cd72e48"],
    ["0x12ec7367f789f5406f728b59cbcd01d762f7a386923e6d6be1714e33889b82ca", "0x1af89ae48017910d697bae160745cc25f7f26a6497022441b0aa63883ded6866"],
  ],
  ["0x1b8ee0c831efe0fc8fe7b375b391f9b0fd2caa0f520b62518891c00ccb2bb84f", "0x026365777c95fa187300e92695e89a69d573e73b7f3b416ba47ec9c1d0704676"],
  ["0x1d824407e6b579a4052dc76880c041ae440e4dafd5c7f6ea262336c417de4692"],
];

export const initMintWrongProofArgs = [
  ["0x2064b57fe95dfcd4d1f6c3ea8011186b59caa3f9f32f4a06595d9314ea2cc731", "0x29176fa442f88c66f0cac76fe4dddf72e6a2e2adbe07b0771d2215db107a22fe"],
  [
    ["0x1d15808fa90e5972fe5fb14ac0c07641f3db307e2a870c198d57a906b4a96301", "0x25fb9616bc7c87ba9b106baf1639de15f223d1243e5e6d0962b717a50cd72e48"],
    ["0x12ec7367f789f5406f728b59cbcd01d762f7a386923e6d6be1714e33889b82ca", "0x1af89ae48017910d697bae160745cc25f7f26a6497022441b0aa63883ded6866"],
  ],
  ["0x1b8ee0c831efe0fc8fe7b375b391f9b0fd2caa0f520b62518891c00ccb2bb84f", "0x026365777c95fa187300e92695e89a69d573e73b7f3b416ba47ec9c1d0704676"],
  ["0x1d824407e6b579a4052dc76880c041ae440e4dafd5c7f6ea262336c417de4693"],
];

// partial reveal NFT
export const partialRevealNFTArgs = [
  ["0x1de76fae8108ead8a151422392ed118dbf0b2e5c3fa145b3d517c90cf1a101a1", "0x2e6aba781ddcce6fbb65f0889d46b3581fa561a559e37bca6ade729b2fa29ea3"],
  [
    ["0x0ea981db45953641303abf315a5a94f9dd6f0b75f74b18758e1bb8f40937f229", "0x0f7484ea1d7255f97befcca614c9c022c3e66f7cd307f029a27f10079d06a8e7"],
    ["0x0be340b77377e522f60c0d20621e77decac14ee5626eaec6acaef9173a082703", "0x0ca7d58f36eb662d1b8eb903a3f650602a3a4d859b8ad2b0acad573150e3eca3"],
  ],
  ["0x2ef2e3d465199ad35e79c6e2207f5173699e2335cfd4c03e781483b47e26f134", "0x062a9199a0e8b7f088a82880e06b14de47ef5e1180eba0552724b4700b241e1a"],
  ["0x1d824407e6b579a4052dc76880c041ae440e4dafd5c7f6ea262336c417de4692"],
];

// fully reveal NFT
export const fullyRevealNFTArgs = [
  ["0x0a7bce43cb0ba363df464dd1f02127dd0ea7e29f71bdb572b084004e4f2751f2", "0x1a6a7f155950a1f11ebce205f7a7ea817c39cb4ed7bc1f25048ba06fa7da5dfe"],
  [
    ["0x126aa1dc42c60a8315e908f7bd4ac975835a1e22e9e8618954c80764b27683c1", "0x2d4e122debbcb5cda42e58c36f825fc79f89770c4798cfbee15d12ccf693c7a7"],
    ["0x2a06c62e36a644df4ffccd1c8f8992f4dc4ab1ce481a526ce42807022828b18e", "0x1446b1381e523b6d7b3b2f1ea31c09368bee30e644b78efb9bd36b5ca1cc99e8"],
  ],
  ["0x28140d221253f4a22f85c3cd9e37b18aa1f1a40ce2b870c4cc25bf2b2860168c", "0x146e89a804a6965c832cd92f2ae66e02a1ae2cb3fd1f25414852e10eb4ffbffa"],
  ["0x1d824407e6b579a4052dc76880c041ae440e4dafd5c7f6ea262336c417de4692", "0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000002", "0x0000000000000000000000000000000000000000000000000000000000000003"],
];
