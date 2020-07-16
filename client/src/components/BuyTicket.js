import React, { Component } from 'react';
import axios from 'axios';
import BusCard from './BusCard';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
class BuyTicket extends Component {
    state = { 
        bus: {}
    };

    componentDidMount() {
        if(this.props.location.state) {
            this.setState({ bus: this.props.location.state });
            return;
        } else {
            axios.get(`${backendUrl}/api/buses/${this.props.match.params.id}`)
                .then(res => {
                    this.setState({ 
                        buses: [...this.state.buses, ...res.data],
                        isLoading: false
                    });
                })
                .catch(err => console.log(err));
        }
    }

    render(){
        const { bus } = this.state;

        return(
            <section class="container d-flex flex-column align-items-center mt-5">
                <BusCard busInfo={bus}/>
                <form class="mt-4 ml-1 col-12 col-md-10 col-lg-8 col-xl-6">
                    <div class="form-group">
                        <label htmlFor="exampleInput">Full Name</label>
                        <input type="email" class="form-control" id="exampleInput" placeholder="Enter your full name" required/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="dateofbirth">Date of Birth</label>
                        <input type="date" class="form-control" id="dateofbirth" placeholder="date" required/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-center">Purchase</button>
                </form>
            </section>
        );
    }
}
export default BuyTicket;