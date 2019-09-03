import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      settings: {alphabetically: null,
      price: null,
      filter: ''
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks').then(resp => resp.json()).then(stocks => {console.log(stocks); this.setState({...this.state, stocks: stocks})})
  }

  onAlphabet = () => {
    let toggle = null
    this.state.settings.alphabetically ? toggle = false : toggle = true
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        alphabetically: toggle
      }
    })
  }

  onPrice = () => {
    let toggle = null
    this.state.settings.price ? toggle = false : toggle = true
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        price: toggle
      }
    })
  }

  sortStocks = () => {
    let copy = [...this.state.stocks]
    if (this.state.settings.alphabetically === true) {
      debugger
      copy = copy.sort((a, b) => {
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()
        if (nameA < nameB){
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
          return 0
      })
    }

    return this.sortStockPrice(copy)

  }

  sortStockPrice = (copy) => {
    if (this.state.settings.price === true){
      debugger
     copy = copy.sort((a, b) => a.price - b.price)
   }
   return copy
  }


  onFilter = (e) => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        filter: e.target.value
      }
    })
  }

  filterCat = (copy) => {
    switch(this.state.settings.filter){
      case 'Tech':
        return copy.filter((stock) => stock.type === "Tech")
        

      case 'Finance':
        return copy.filter((stock) => stock.type === "Finance")
        

      case 'Sportswear':
        return copy.filter((stock) => stock.type === "Sportswear")
        
      default:
        return copy
    }
  }

  addStock = (e, stock) => {
    console.log('add stock')
    this.setState({
      ...this.state,
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStock = (e, stock) => {
    let copy = this.state.portfolio
    let index = copy.findIndex(element => element === stock)
    copy.splice(index, 1)
    this.setState({
      ...this.state,
      portfolio: [...copy]
    })
  }


  render() {
    return (
      <div>
        <Header />
        <MainContainer stocks={this.filterCat(this.sortStocks())} settings={this.state.settings} onAlphabet={this.onAlphabet} onPrice={this.onPrice} onFilter={this.onFilter} portfolio={this.state.portfolio} addStock={this.addStock} removeStock={this.removeStock}/>
      </div>
    );
  }
}

export default App;
