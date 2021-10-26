import { expect } from "chai";
import { ethers as Ethers } from "ethers";
import { ethers } from "hardhat";
import { initMintProofsArgs, initMintWrongProofArgs, revealNftProofArgs, revertMessages } from "./helper";

describe("ZK-NFT", function () {
  let nftContract: Ethers.Contract;
  let owner: any;
  let addr1;
  let addr2;

  before(async () => {
    const _ZKNFT = await ethers.getContractFactory("ZKNFT");
    nftContract = await _ZKNFT.deploy();
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("Mint ", async () => {
    await nftContract.mint(...initMintProofsArgs);
    expect(nftContract.mint(...initMintWrongProofArgs)).to.be.revertedWith(revertMessages.INVALID_PROOF);

    expect(await nftContract.balanceOf(owner.address)).to.be.equal(1); // mint NFT

    const character = await nftContract.characters(0);
    expect(character.cHash).equal(initMintProofsArgs[3][0]);
    expect(character.isRevealed).equal(false);
  });

  it("Reveal", async () => {
    await nftContract.reveal(...revealNftProofArgs, 0);

    const character = await nftContract.characters(0); // verify character attribute reveal
    expect(character.isRevealed).equal(true);
    expect(character.attribute1).equal(revealNftProofArgs[3][1]);
    expect(character.attribute2).equal(revealNftProofArgs[3][2]);
    expect(character.attribute3).equal(revealNftProofArgs[3][3]);
  });
});