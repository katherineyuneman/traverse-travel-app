import React from 'react'

const ItineraryCard = ({itinerary}) => {
    console.log(itinerary)

    const eachItinerary = itinerary.map(event => {
        return (
        <div key={event.id}>
            <h5>{event.description}</h5>
            <p>
                  Type: {event.type}
                  <br />
                  Location: {event.location}
            </p>
        </div> 
        )
    })



  return (
    <div>
        {eachItinerary}
    </div>
  )
}

export default ItineraryCard
