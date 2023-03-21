import React from 'react';
import ItineraryCard from "../components/itineraries/ItineraryCard";

const ItineraryContainer = () => {

    const itinerary = [
        {
            id: 1,
            description:'Breakfast at Tiffanys',
            event_type:'meal',
            type: 'breakfast',
            location: 'Tiffanys',
            address:'123 Fifth Avenue',
            date:'2023-04-01',
            time: '5:00 PM',
            confirmation: 'ABCDEFG123'
        },
        {
            id: 2,
            description:'Flight to Miami',
            event_type:'transportation',
            type: 'plane',
            location: 'JFK',
            address:'123 Airplane Drive',
            date:'2023-04-01',
            time: '5:00 PM',
            confirmation: 'HIJKLM456',
        },
        {
            id: 2,
            description:'Flight Home to NYC',
            event_type:'transportation',
            type: 'plane',
            location: 'MIA',
            address:'456 Airplane Drive',
            date:'2023-04-05',
            time: '11:00 AM',
            confirmation: 'NOPQR789',
        }
    ]


  return (
    <div>
      <h1> Itinerary</h1>
      <ItineraryCard itinerary={itinerary}/>
    </div>
  )
}

export default ItineraryContainer
