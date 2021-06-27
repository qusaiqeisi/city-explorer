import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super();
    this.state={
      displayName:' ',
      latitude:' ', 
      longitude: ' ' ,
      imgMap: ' ' 
    }
  }
  HandleDisplayName=(e)=>{
    this.setState({
      displayName:e.target.value
    })
  }
  SubmitForm=async (e)=>{
    e.preventDefault();// to not relode the page
    let axiResponse=await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.026b4205f25fc66edc3ea21cf7c30c05
&city=${this.state.displayName}&fomat=json`)

  

    // console.log(axiResponse)
    this.setState({ //to change the state of the propertes ,and change them with 
      displayName:axiResponse.data[0].display_name,
      latitude:axiResponse.data[0].lat,
      longitude : axiResponse.data[0].lon
      


    })
    


  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{this.SubmitForm(e)}}>
          <input type='text' onChange={(e)=>{this.HandleDisplayName(e)}} required/> 
          <button >Explore!</button>
        </form>
        


              {/* <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          
          <Card.Title>{this.state.displayName}</Card.Title>
          <Card.Text>
           latitude:   {this.state.latitude}<br/>
          longitude:  {this.state.longitude }
          </Card.Text>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.026b4205f25fc66edc3ea21cf7c30c05
&center=${this.state.latitude},${this.state.longitude}&zoom=12&format=png`} width='300px' height='300px' />
        </Card.Body>
      </Card>
      
          
           */}

        
      </div>
    )
  }
}

export default App