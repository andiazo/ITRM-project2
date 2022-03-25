import React from 'react'
import Hero from '../components/hero'
import ItemList from '../components/itemList'

const Lista = [
    {
        'key': '1',
        'title': 'Bitcoin',
        'description': 'Bitcoin (BTC) is a digital currency and worldwide payment system.',
        'image': 'https://cdn.worldvectorlogo.com/logos/bitcoin-1.svg',
        'price': '$12,000.00'
    },
    {
        'key': '2',
        'title': 'Ethereum',
        'description': 'Ethereum (ETH) is a decentralized platform that runs smart contracts.',
        'image': 'https://cdn.worldvectorlogo.com/logos/ethereum-1.svg',
        'price': '$12,000.00'
    },
    {
        'key': '3',
        'title': 'Litecoin',
        'description': 'Litecoin (LTC) is a peer-to-peer cryptocurrency.',
        'image': 'https://cdn.worldvectorlogo.com/logos/litecoin-1.svg',
        'price': '$12,000.00'
    },
    {
        'key': '4',
        'title': 'Solana',
        'description': 'Solana (SOL) is a decentralized platform that runs smart contracts.',
        'image': 'https://cdn.worldvectorlogo.com/logos/solana-1.svg',
        'price': '$12,000.00'
    }
]

export default class ListView extends React.Component {
  render() {
        return (
            <>
                <Hero />
                <div className='container'>
                    <ItemList>{Lista}</ItemList>
                </div>
            </>
        )
    }
}
