import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsRemaining: this.props.maxChars
    };
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value,
      charsRemaining: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeHandler}/>
        <h2>{this.state.charsRemaining}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
