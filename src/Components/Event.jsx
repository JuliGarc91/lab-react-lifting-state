
import Attendees from './Attendees';
export default function Event({ events,  updateEventAttendance, showAttendees }) {
  

  
  return (

  <ul>

          
            {events.map((event) => {
              const { people: attendees } = event;

              return (
                <>
                  <li key={event.id}>
                    <img src={event.eventImage} alt={event.name} />
                    <h5>
                      {event.name} {event.eventType}
                    </h5>
                    <br />
                    <span>Organized by: {event.organizer} </span>
                    <br />
                    <Attendees events={events} showAttendees={showAttendees} updateEventAttendance={updateEventAttendance} attendees={attendees}/>
                  </li>
                </>
              );
            })}
  
          
        
        </ul>
        
  )
}


// attendees is nested inside events so add html for attendees to Attendees.jsx
//might have to import useStates or functions
// <Attendees  showAttendees={showAttendees} attendees={event.people} eventId={event.id} updateEventAttendance={updateEventAttendance} />
//