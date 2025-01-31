import * as React from 'react';
import { 
    Box, Pagination, Typography, CircularProgress, MenuItem, 
    Select, FormControl, InputLabel, Card, CardContent
} from '@mui/material';
import OrganizerEventCard from '../cards/OrganizerEventCard';
import { useSelector, useDispatch } from 'react-redux';
import { useGetEventsQuery } from '../../services/backendAPI';
import { setEvents } from '../../store/slices/eventsSlice';

const Events = ({ type }) => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);
    const { data, error, isLoading } = useGetEventsQuery();

    const [filteredEvents, setFilteredEvents] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(6);

    React.useEffect(() => {
        if (!events?.length && data) {
            dispatch(setEvents({ events: data }));
        }
    }, [data, events, dispatch]);

    React.useEffect(() => {
        if (events?.length > 0) {
            const filtered = events.filter(event => 
                type === "all-events" ? true : event.status === type
            );
            setFilteredEvents(filtered);
            setCurrentPage(1); // Reset to first page when filter changes
        }
    }, [events, type]);

    // Calculate paginated events
    const indexOfLastEvent = currentPage * itemsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    if (isLoading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
        </Box>
    );

    if (error) return (
        <Typography variant="h6" color="error" sx={{ p: 3, textAlign: 'center' }}>
            Error loading events. Please try again later.
        </Typography>
    );

    return (
        <Box sx={{ minHeight: 400, p: 3 }}>
            {/* Items per Page Selector - Stylish Box */}
            <Card sx={{ mb: 3, p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: 'background.paper' }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        Display Items:
                    </Typography>
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel>Items per Page</InputLabel>
                        <Select
                            value={itemsPerPage}
                            onChange={(e) => { setItemsPerPage(e.target.value); setCurrentPage(1); }}
                            label="Items per Page"
                            sx={{
                                backgroundColor: 'background.default',
                                borderRadius: 2,
                                '&:hover': { backgroundColor: 'action.hover' },
                                '& .MuiSelect-select': { padding: '10px 14px' }
                            }}
                        >
                            {[3, 6, 9, 12].map(num => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>

            {filteredEvents.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                    No events found matching your criteria
                </Typography>
            ) : (
                <>
                    {/* Event Grid */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(3, 1fr)",
                            },
                            gap: 3,
                        }}
                    >
                        {currentEvents.map(event => (
                            <OrganizerEventCard 
                                key={event.id} 
                                event={event} 
                                sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}
                            />
                        ))}
                    </Box>

                    {/* Pagination */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Pagination
                            count={Math.ceil(filteredEvents.length / itemsPerPage)}
                            page={currentPage}
                            onChange={(e, page) => setCurrentPage(page)}
                            color="primary"
                            size="large"
                            showFirstButton
                            showLastButton
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    fontSize: '1.1rem',
                                },
                                '& .Mui-selected': {
                                    boxShadow: 2,
                                }
                            }}
                        />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Events;
