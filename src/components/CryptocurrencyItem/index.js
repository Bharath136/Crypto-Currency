import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props
  const {currencyName, euroValue, usdValue, currencyLogo} = eachCrypto
  return (
    <li className="crypto-item">
      <div className="container">
        <img src={currencyLogo} alt={currencyName} className="image" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="container">
        <p className="usd val">{usdValue}</p>
        <p className="euro val">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
