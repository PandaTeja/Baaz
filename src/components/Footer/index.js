import {Component} from 'react'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="images">
          <div>
            <img
              className="home"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644988112/Vector_178_vgmtn7.png"
            />
          </div>
          <div>
            <img
              className="store"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644988112/Vector_179_pdpkrc.png"
            />
          </div>
          <div>
            <img
              className="cart"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644988112/Vector_180_nodtll.png"
            />
          </div>
          <div>
            <img
              className="profile"
              src="https://res.cloudinary.com/teja5180/image/upload/v1644988112/Vector_181_qcogts.png"
            />
          </div>
        </div>
        <div className="line-con">
          <hr className="line" />
        </div>
      </div>
    )
  }
}

export default Footer
