import { Component } from "react";

export default class ChatForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    PlaceholderText: 'your name',
                    PlaceholderTextarea: 'write your chat here..'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.add(this.state.value)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
            <div className="container">
            <input className="form-control" style={{width: 500}} type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.PlaceholderText}/>
            <br></br>
            <br></br>
            <textarea placeholder={this.state.PlaceholderTextarea}>
            </textarea>
            <br></br>
          <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      );
    }
  }