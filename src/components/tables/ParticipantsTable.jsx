import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Popover from '@mui/material/Popover';
import UserInfoCard from '../cards/UserInfoCard';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'age', label: 'Age', minWidth: 100 },
    { id: 'gender', label: 'Gender', minWidth: 100 },
    { id: 'attended', label: 'Attended Event (Yes/No)', minWidth: 170 },
];

function createData(name, age, gender, attended) {
    return { name, age, gender, attended };
}

export default function ParticipantsTable({ data }) {
    const rows = data.map((entry) => createData(entry.name, entry.age, entry.gender, entry.attended));

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedEvent, setSelectedEvent] = React.useState(null);

    const handleClick = (event, eventData) => {
        setAnchorEl(event.currentTarget); // Set the anchor element
        setSelectedEvent(eventData); // Set the event data for Popover
    };

    const handleClose = () => {
        setAnchorEl(null); // Reset the anchor element
        setSelectedEvent(null); // Reset selected event
    };

    const open = Boolean(anchorEl);
    const popoverId = open ? 'participant-popover' : undefined;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const sampleEvent = {
        id: 1,
        title: 'Tech Fest 2025',
        status: 'upcoming',
        description: 'A grand celebration of technology and innovation.',
        date: 'March 10, 2025',
        location: 'Bangalore',
        numberOfParticipants: 5000,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=286',
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440, width: '100%', height: '50%' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.name}
                                    onClick={(event) => handleClick(event, sampleEvent)}
                                    sx={{
                                        cursor: "pointer"
                                    }}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Popover
                id={popoverId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {selectedEvent && <UserInfoCard  />}
            </Popover>
        </Paper>
    );
}
