import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoDataList: []}

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({cryptoDataList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoDataList} = this.state
    return (
      <div className="cryptocurrnecy-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#fff" height={50} width={50} with />
          </div>
        ) : (
          <CryptocurrenciesList cryptoDataList={cryptoDataList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
