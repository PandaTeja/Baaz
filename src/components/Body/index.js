import {Component} from 'react'
import './index.css'
import Footer from '../Footer'

class Body extends Component {
  render() {
    return (
      <div className="phone">
        <div className="container">
          <p className="heading">Popular</p>
          <div className="image-containerw">
            <img
              className="dis-imagew"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644951570/image_98_erkqqt.png"
            />
            <br />
            <div className="img-footerw">
              <h1 className="image-headingw">Wooden table lamp</h1>
              <p className="pricew">$2380</p>
            </div>
          </div>
          <div className="image-containers">
            <img
              className="dis-images"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644951570/image_89_n8lyp7.png"
            />
            <br />
            <div className="img-footers">
              <h1 className="image-headings">Shaped sofa</h1>
              <p className="prices">$2899</p>
            </div>
          </div>
          <div className="image-containerl">
            <img
              className="dis-imagel"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644951570/image_95_yrmdre.png"
            />
            <br />
            <div className="img-footerl">
              <h1 className="image-headingl">Long Single Stool</h1>
              <p className="pricel">3499</p>
            </div>
          </div>
          <div className="image-container">
            <img
              className="dis-image"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644951570/Frame_8458_1_yn1k5n.png"
            />
            <br />
            <div className="img-footer">
              <h1 className="image-heading">European style sofa</h1>
              <p className="price">$4890</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Body
