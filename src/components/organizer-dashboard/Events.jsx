import * as React from 'react';
import { Box } from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component";
import OrganizerEventCard from '../cards/OrganizerEventCard';
import { useSelector, useDispatch } from 'react-redux';
import { useGetEventsQuery } from '../../services/backendAPI';
import { setEvents } from '../../store/slices/eventsSlice';

const Events = ({ type }) => {
    console.log("type inner -> ", type);

    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);

    const { data, error, isLoading } = useGetEventsQuery();

    const [filteredEvents, setFilteredEvents] = React.useState([]);
    const [visibleEvents, setVisibleEvents] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(true);

    React.useEffect(() => {
        if (!events?.length && data) {
            dispatch(setEvents({events: data}));
        }
        console.log(data)
    }, [data, events, dispatch]);

    React.useEffect(() => {
        if (events && events.length > 0) {
            const filtered = events.filter(event => (type === "all-events" ? true : event.status === type));
            setFilteredEvents(filtered);
            console.log(filtered)
            setVisibleEvents(filtered.slice(0, 9));
            setHasMore(filtered.length > 9);
        }
    }, [events, type]);

    const loadMoreEvents = () => {
        if (visibleEvents.length >= filteredEvents.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setVisibleEvents(prev => [...prev, ...filteredEvents.slice(prev.length, prev.length + 9)]);
        }, 1500);
    };

    if (isLoading) return <h4>Loading events...</h4>;
    if (error) return <p>Error loading events. </p>;

    return (
        <InfiniteScroll
            dataLength={visibleEvents.length}
            next={loadMoreEvents}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more events to display</p>}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(3, 1fr)",
                    },
                    gap: 2,
                    p: 2,
                }}
            >
                {visibleEvents.map(event => (
                    <OrganizerEventCard key={event.id} event={event} />
                ))}
            </Box>
        </InfiniteScroll>
    );
};

export default Events;
