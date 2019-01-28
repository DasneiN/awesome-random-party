import React, { Component } from 'react';

import '../../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container container">
          <span className="footer__creator">awesome-random-party</span>
          <span className="footer_corypight">copyright &copy; 2019</span>
        </div>
      </footer>
    );
  }
}
export default Footer;
