import { Component } from "react";

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pesan: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }



  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    this.props.add(this.state.username, this.state.pesan)
    this.setState({ username: '', pesan: '' })

  }

  render() {
    return (
      <div>
        <div className="icon-chat">
          <i className="fa-solid fa-circle-plus fa-4x icon-size teal-color border-circle"></i>
        </div>
        <div className="box sb2">
          <form onSubmit={this.handleSubmit}>
            <div className="container text-wrap">
              <input name="username" value={this.state.username} className="form-control input-form" style={{ width: 950 }} type="text" onChange={this.handleChange} placeholder='Tulis Username' />
              <textarea name="pesan" value={this.state.pesan} className="form-control" onChange={this.handleChange} placeholder='Tulis pesan disini..' style={{ width: 950 }}>
              </textarea>
              <input type="submit" className="btn btn-primary button-submit" value="Post" />
            </div>
          </form>
        </div>
      </div>

    );
  }
}