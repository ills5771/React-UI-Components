import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  state = {
    retweets: null,
    likes: null
  };

  retweetIncrement = ev => {
    ev.preventDefault();
    this.setState({ retweets: this.state.retweets + 1 });
  };
  likesIncrement = ev => {
    ev.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  };
  render() {
    return (
      <div className="footer-container">
        <i class="large material-icons" style={{ opacity: "0.5" }}>
          chat_bubble_outline
        </i>
        <div>
          <i
            class="large material-icons"
            onClick={this.retweetIncrement}
            style={{ opacity: "0.5" }}
          >
            autorenew
          </i>
          <span className="increment">{this.state.retweets}</span>
        </div>
        <div>
          <i
            class="large material-icons"
            onClick={this.likesIncrement}
            onstyle={{ opacity: "0.5" }}
          >
            favorite_border
          </i>
          <span className="increment">{this.state.likes}</span>
        </div>

        <i class="large material-icons" style={{ opacity: "0.5" }}>
          mail_outline
        </i>
      </div>
    );
  }
}
export default Footer;
