var CustomERC721Token = artifacts.require('CustomERC721Token');
 
// const BigNumber = web3.BigNumber;
const BigNumber = web3.utils.BN;
  require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .should();
contract('TestERC721Mintable', accounts => {
    const name = 'Non Fungible Token';
    const symbol = 'NFT';
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
    const firstTokenId = 100;
    const secondTokenId = 200;
    const creator = accounts[0];
    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.token = await CustomERC721Token.new(name,   symbol,   baseTokenURI,{from: account_one});

            // TODO: mint multiple tokens
            await this.token.mint(creator, firstTokenId, { from: creator });
            await this.token.mint(creator, secondTokenId, { from: creator });
        })

        it('should return total supply', async function () { 
            const totalSupply = await this.token.totalSupply();
            totalSupply.toNumber().should.be.equal(2);

        })

        it('should get token balance', async function () { 
            const count = await this.token.balanceOf(creator);
            count.toNumber().should.be.equal(2);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const uri = await this.token.baseURI();
            uri.should.eq(baseTokenURI);
        })

        it('should transfer token from one owner to another', async function () { 
            await this.token.transferFrom(creator, account_two, firstTokenId, { from: creator });

        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.token = await CustomERC721Token.new(name,   symbol,   baseTokenURI,{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
                    // 
                    let result;

        // ACT
        try {
            await this.token.mint(account_two, firstTokenId, { from: account_two })
            result=true;

        } catch (e) {
            result=false;

        }

        // ASSERT
        assert.equal(result, false, "should fail when minting when address is not contract owner");


        })

        it('should return contract owner', async function () { 
            const owner = await this.token.owner();
            owner.should.eq(creator);
        })

    });
})