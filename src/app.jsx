var React = require('react');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
      nameChangeState: 'Victor'
    };
  }
  render() {
    var { name, age, bio, pic } = this.props;
    var { height, nameChangeState } = this.state;
    return (
      <div className="profile-box">
        <h1>{nameChangeState}</h1>
        <h2>{name}</h2>
        <h4>Age: {age}</h4>
        <h4>Bio: {bio}</h4>
        <img src={pic} height={height} />
        <br />
        <button onClick={this.zoomPicOut.bind(this)}>-</button>
        <button onClick={this.zoomPicIn.bind(this)}>+</button>
      </div>
    );
  }
  zoomPicIn() {
    this.setState({height: this.state.height + 100, nameChangeState: 'Gustavo'});

  }
  zoomPicOut() {
    console.log(this)
    this.setState({height: this.state.height - 100, nameChangeState: 'Victor'});
  }
}
// props
// state
React.render(<Profile name="Chris Pena" age={24} bio="I like puppies." pic="http://goo.gl/qnbcXi" />, document.getElementById('app'));
