import React, { Component } from 'react';

class Footer extends Component {


  render() {
    return (
      <div className="footerWrapper">
        <div className="footerContent">

          <div>
            <p><a href="tel:+46702673920">+46 702 673 920</a></p>
            <p><a href="mailto:cjcmattsson@gmail.com">cjcmattsson@gmail.com</a></p>
          </div>
            <div>
              <p>Gothenburg</p>
              <p>Sweden</p>
            </div>
            <div>
              <p><a href="https://github.com/cjcmattsson">GitHub</a></p>
            </div>

        </div>
      </div>
    );
  }
}

export default Footer;
