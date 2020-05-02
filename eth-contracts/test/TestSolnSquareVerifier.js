// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');

// const BigNumber = web3.BigNumber;
const BigNumber = web3.utils.BN;
require('chai')
    .use(require('chai-bignumber')(BigNumber))
    .should();
contract('SolnSquareVerifier', accounts => {
    const name = 'Non Fungible Token';
    const symbol = 'NFT';
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
    const firstTokenId = 100;
    const secondTokenId = 200;
    const creator = accounts[0];
    const account_two = accounts[1];
    let validproof = {
        "a": ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"],
        "b": [
            ["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"],
            ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]
        ],
        "c": ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"]
    }
    let inputs = ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]

    describe('match erc721 spec', function () {
        beforeEach(async function () {

            this.token = await SolnSquareVerifier.deployed()

        })

        it('should mint new NFT only after the solution has been verified', async function () {
            let status;
            try {
                await this.token.mintNFT(validproof.a,
                    validproof.b,
                    validproof.c,
                    inputs, creator, firstTokenId, {
                        from: account_two
                    })
                status = true;

            } catch (error) {
                status = false
            }

            status.should.be.equal(true);



        })

        it('should get token balance', async function () {
            const count = await this.token.balanceOf(creator);
            count.toNumber().should.be.equal(1);
        })

        it('should return total supply', async function () {
            const totalSupply = await this.token.totalSupply();
            totalSupply.toNumber().should.be.equal(1);

        })
        it('should not mint new NFT if the proff has  been used before', async function () {
            let status;
            try {
                status = await this.token.mintNFT.call(validproof.a,
                    validproof.b,
                    validproof.c,
                    inputs, creator, firstTokenId, {
                        from: creator
                    })

            } catch (error) {
                status = true
            }

            status.should.be.equal(true);

        })

    });
})