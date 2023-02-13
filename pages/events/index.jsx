import { getAllEvents } from '@/Dummy-Data'
import React from 'react'
import EventList from '@/components/Event/EventList';

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  
  return (
    <EventList items={allEvents} />
  )
}

export default AllEventsPage