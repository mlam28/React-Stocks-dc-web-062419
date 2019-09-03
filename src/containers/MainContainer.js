import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar settings={this.props.settings} onAlphabet={this.props.onAlphabet} onPrice={this.props.onPrice} onFilter={this.props.onFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addStock={this.props.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} removeStock={this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
