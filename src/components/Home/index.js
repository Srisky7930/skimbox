import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Bundle & save</h1>
        <div className="card-1">
          <div>
            <input type="radio" />
          </div>
          <div className="inner-card-1">
            <div>
              <h1 className="pair"> 1 pair </h1>
              <p className="promo-code"> DKK 195.00 </p>
            </div>
            <div>
              <p> 50% OFF </p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div>
            <input type="radio" />
          </div>
          <div className="inner-card-1">
            <div>
              <div className="pair-card">
                <div>
                  <h1 className="pair"> 2 pair </h1>
                </div>
                <div>
                  <h1 className="pair-color"> Most Popular </h1>
                </div>
              </div>
              <div className="pair-card">
                <div className="card-2-inner">
                  <h1 className="pair"> DKK 345.00 </h1>
                  <p className="pair-underline"> DKK 195.00 </p>
                </div>
                <div>
                  <h1 className="promo-code"> 40% OFF</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-1">
          <div>
            <input type="radio" />
          </div>
          <div className="inner-card-1">
            <div>
              <h1 className="pair"> 3 pair </h1>
              <p className="promo-code"> DKK 528.00 </p>
            </div>
            <div>
              <p> 60% OFF </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-card-1">
            <div>
              <h1 className="free"> Free 2 Day Shipping </h1>
            </div>
            <div>
              <h1 className="promo-code"> Total: DKK 360.00 </h1>
            </div>
          </div>
        </div>

        <div>
          <button type="button" className="button">
            + Add To Cart
          </button>
          <p className="powered"> C Powered By pumper </p>
        </div>
      </div>
    )
  }
}

export default Home
