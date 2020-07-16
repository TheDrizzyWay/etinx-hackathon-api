import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pusher from 'pusher-js';
import pushid from 'pushid';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

class List extends Component {
    
    state = {
        isLoading: true,
        buses: []
    };

    componentDidMount(){
        axios.get(`${backendUrl}/api/buses`)
                .then(res => {
                    this.setState({ 
                        buses: [...this.state.buses, ...res.data],
                        isLoading: false
                    });
                })
                .catch(err => console.log(err));
                
    // const pusher = new Pusher(`${backendUrl}`, {
    //     cluster:'ap4',
    //     encrypted:true
    // });
    // const channel = pusher.subscribe('buses-channel')
    // channel.bind('update-bus', data => {
    //     this.setState({buses:[...data.buses, ...this.state.buses]});
    // });
    }
    
    render(){
        const { isLoading } = this.state;
        const spinner =  (
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-info mx-auto" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );

        return(
            <div className="container p-4">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search by location" aria-label="your location" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary">Search</button>
                    </div>
                </div>
                { isLoading && spinner}
                <ul class="list-group">
               {
                   this.state.buses.map(bus => (
                       <div key={bus.bus_number}>
                           <li key={bus._id} class="list-group-item list-group-item-action bg-light d-flex flex-column flex-md-row justify-content-between align-items-center m-1">
                            <span class="text-success  mr-0"><b>From:</b> {bus.from}</span><span class="text-primary ml-0"><b>To :</b> {bus.to}</span>
                            <span class="text-info"><b>Bus number :</b> {bus.bus_number}</span>
                            <span class="text-muted"><b>Leaves:</b> 16:00</span>
                            <Link to={{ pathname: `/purchase/${bus._id}`, state: bus }}>
                              <button type="button" class="btn btn-outline-primary">Book Ride</button>
                            </Link>

                           </li>
                       </div>
                   ))
               }
               </ul>
            </div>
        )
    }
}
export default List