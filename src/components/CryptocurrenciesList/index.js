import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {}

  render() {
    const {cryptoDataList} = this.props
    console.log(cryptoDataList)
    return (
      <div className="cryptocurrency-list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="container1">
          <div className="header">
            <h1 className="head">Coin Type</h1>
            <div className="values">
              <h1 className="head-val usd">USD</h1>
              <h1 className="head-val">EURO</h1>
            </div>
          </div>
          <ul className="crypto-list">
            {cryptoDataList.map(eachCrypto => (
              <CryptocurrencyItem eachCrypto={eachCrypto} key={eachCrypto.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
