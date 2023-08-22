export const options = [
    { value: 'etheruim', label: "Etheruim", imgSrc: 'assets/images/tokens/eth-icon.png' },
    { value: 'polygon', label: "Polygon", imgSrc: 'assets/images/tokens/polygon.svg' },
    { value: 'arbitrum', label: "Arbitrum", imgSrc: './assets/images/tokens/arbitrum.svg', label: 'Arbitrum' },
    { value: 'optimistic', label: "Optimistic", imgSrc: './assets/images/tokens/optimistic.svg', label: 'Optimistic' },
    { value: 'celo', label: "Celo", imgSrc: './assets/images/tokens/celo.svg', label: 'Celo' },
    { value: 'bnbchain', label: "BNB Chain", imgSrc: './assets/images/tokens/bnb.svg', label: 'BNB Chain' },
    { value: 'avalanche', label: "Avalanche", imgSrc: './assets/images/tokens/avax.svg', label: 'Avalanche' },
    { value: 'base', label: "Base", imgSrc: './assets/images/tokens/base.svg', label: 'Base' },
];

//Search Options
export const searchOptions = [
    //Popular Tokens
    {
        id: 1,
        value: 'etheruim',
        label: "Ether",
        symbol: "ETH",
        imgSrc: 'assets/images/tokens/eth-icon.png',
        price: 1676.75,
        oldPrice: 1576.50,
    },
    {
        id: 2,
        value: 'usdCoin',
        label: "USD Coin",
        symbol: "USDC",
        imgSrc: 'assets/images/usdt-icon.png',
        price: 1.00,
        oldPrice: 1.30
    },

    //Popular NFTs
    {
        id: 1,
        value: 'degods',
        label: "DeGods",
        items: "8999",
        imgSrc: 'assets/images/degodsicon.png',
        floor: 24.40,
        items: 9998
    },
    {
        id: 2,
        value: 'bored',
        label: "Bored Ape Yacht Club",
        items: "9999",
        imgSrc: 'assets/images/bored.png',
        floor: 4.55,
        items: 19480
    },
];
