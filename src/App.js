

import React, { Component } from 'react'
import axios from 'axios';
import {Form,Button,Image} from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image'
import Alertmsg from './Alerttext';

export class Forms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      cityData: {},
      display: false,
      error: "",
      alert: false
    }
  }

  updateCity = (e) => {
    console.log(e.target.value);
    this.setState({
      displayName: e.target.value,
    });
    console.log(this.state);
  }

  getData = async (e) => {
    e.preventDefault();
    try {
      const axiosData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.026b4205f25fc66edc3ea21cf7c30c05&city=${this.state.displayName}&format=json`)
      console.log(axiosData);
      this.setState({
        cityData: axiosData.data[0],
        display: true,
        alert:false
      })
    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
  }


  render() {
    return (
      <div>

        <Alertmsg
          alert={this.state.alert}
        />

        <Form onSubmit={this.getData}>
          <Form.Group className="mb-3" controlId="formBasicEmail" 	 >
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="EX: AMMAN" onChange={this.updateCity} size={'sm'}  required/>
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>
        {this.state.display &&
          <div>
            <p>
              {this.state.cityData.display_name}
            </p>
            <p>
              {`latitude: ${this.state.cityData.lat}, longitude: ${this.state.cityData.lon}`}
            </p>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.026b4205f25fc66edc3ea21cf7c30c05&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} rounded/>
          </div>
        }
      </div>
    )
  }
}

export default Forms;

//         <Card style={{ width: '18rem' }}>

//           <Card.Body>

//             <Card.Title>{this.state.displayName}</Card.Title>
//             <Card.Text>
//               latitude:   {this.state.latitude}<br />
//               longitude:  {this.state.longitude}
//             </Card.Text>
//             <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.026b4205f25fc66edc3ea21cf7c30c05
// &center=${this.state.latitude},${this.state.longitude}&zoom=12&format=png`} width='300px' height='300px' />
//           </Card.Body>
//         </Card>
// import React, { Component } from 'react'
// import axios from 'axios'
// import { Card } from 'react-bootstrap';

// class App extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       displayName: ' ',
//       latitude: ' ',
//       longitude: ' ',
//       imgMap: ' '
//     }
//   }
//   HandleDisplayName = (e) => {
//     this.setState({
//       displayName: e.target.value
//     })
//   }
//   SubmitForm = async (e) => {
//     e.preventDefault();// to not relode the page
//     let axiResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.026b4205f25fc66edc3ea21cf7c30c05&city=${this.state.displayName}&format=json`)



//     // console.log(axiResponse)
//     this.setState({ //to change the state of the propertes ,and change them with 
//       displayName: axiResponse.data[0].display_name,
//       latitude: axiResponse.data[0].lat,
//       longitude: axiResponse.data[0].lon



//     })



//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={(e) => { this.SubmitForm(e) }}>
//           <input type='text' onChange={(e) => { this.HandleDisplayName(e) }} required />
//           <button >Explore!</button>
//         </form>



//         <Card style={{ width: '18rem' }}>

//           <Card.Body>

//             <Card.Title>{this.state.displayName}</Card.Title>
//             <Card.Text>
//               latitude:   {this.state.latitude}<br />
//               longitude:  {this.state.longitude}
//             </Card.Text>
//             <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.026b4205f25fc66edc3ea21cf7c30c05
// &center=${this.state.latitude},${this.state.longitude}&zoom=12&format=png`} width='300px' height='300px' />
//           </Card.Body>
//         </Card>





//       </div>
//     )
//   }
// }

// export default App