import React from 'react';
import { randomIntFromInterval } from '../utils/randomGenerator';
import busImage from '../images/bus-one.png';

const BusCard = ({ busInfo }) => (
    <div className="bus-card">
        <header className="bus-card__header">
            <img className="bus-card__icon" src={busImage} alt="bus Logo" />
        </header>
        <section className="bus-card__body">
            <h2 className="bus-card__title">BUS {busInfo.bus_number}</h2>
            <ul className="bus-card__knowledge">
                <li>{busInfo.from} to {busInfo.to}</li>
                <li>One way Ticket</li>
                <li> <span class="text-primary font-weight-bold">$10</span> per ride</li>
                <li>This bus is currently{" "}
                    <span class="text-primary font-weight-bold">{randomIntFromInterval(1, 2)} minute(s)</span> 
                    {" "}away from your location
                </li>
            </ul>
        </section>
    </div>
);

export default BusCard;
