import * as React from 'react';
import { Box } from '@mui/material';
import InfiniteScroll from "react-infinite-scroll-component";
import OrganizerEventCard from '../cards/OrganizerEventCard';
import events from './eventsArray';

const Events = ({ type }) => {
    console.log("type inner -> ", type);

    // Filter events based on the type
    const [filteredEvents, setFilteredEvents] = React.useState([]);
    const [visibleEvents, setVisibleEvents] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(true);

    React.useEffect(() => {
        const filtered = events.filter(event => {
            if (type === "all-events") return true;
            return event.status === type;
        });
        setFilteredEvents(filtered);
        setVisibleEvents(filtered.slice(0, 9));
        setHasMore(filtered.length > 9);
    }, [type]);

    const loadMoreEvents = () => {
        if (visibleEvents.length >= filteredEvents.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setVisibleEvents((prev) => [
                ...prev,
                ...filteredEvents.slice(prev.length, prev.length + 9),
            ]);
        }, 1500);
    };

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
                {visibleEvents.map((event) => (
                    <OrganizerEventCard key={event.id} event={event} />
                ))}
            </Box>
        </InfiniteScroll>
    );
}

export default Events;
