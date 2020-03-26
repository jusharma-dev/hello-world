import React from "react";
import CustomComponent from "../components/CustomComponent";
import Fetch from "../util/Fetch";

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "Welcome" };
  }

  componentDidMount() {
    let params = { headers : {}, method :  "POST", payload : "This  is test", isCors : false}
    const response = Fetch.post("https://postman-echo.com/post", params);
    response.then(result => {
      if(!result.error){
      this.setState({ text: result.data });
      }else{
        this.setState({ text: result.error.message });
      }
    });
  }

  render() {
    return <CustomComponent content={this.state.text} />;
  }
}

export default App;
