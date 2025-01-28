import * as React from 'react';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ParticipantsTable from '../tables/ParticipantsTable';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));


const OrganizerParticipantsList = () => {

    const allEventsData = [
        {
            title: "Art & Culture Expo",
            participants: [
                { name: "Uday", age: 20, gender: "Male", attended: "Yes" },
                { name: "Riya", age: 22, gender: "Female", attended: "No" },
                { name: "Aman", age: 21, gender: "Male", attended: "Yes" },
                { name: "Meera", age: 24, gender: "Female", attended: "Yes" },
                { name: "Arjun", age: 23, gender: "Male", attended: "No" },
                { name: "Sonal", age: 22, gender: "Female", attended: "Yes" },
                { name: "Karthik", age: 25, gender: "Male", attended: "Yes" },
                { name: "Neha", age: 20, gender: "Female", attended: "No" },
                { name: "Rohit", age: 21, gender: "Male", attended: "Yes" },
                { name: "Simran", age: 23, gender: "Female", attended: "Yes" }
            ]
        },
        {
            title: "Event 2",
            participants: [
                { name: "Sara", age: 25, gender: "Female", attended: "Yes" },
                { name: "Rahul", age: 23, gender: "Male", attended: "No" },
                { name: "Nisha", age: 22, gender: "Female", attended: "Yes" },
                { name: "Vikram", age: 26, gender: "Male", attended: "Yes" },
                { name: "Pooja", age: 24, gender: "Female", attended: "No" },
                { name: "Aditya", age: 27, gender: "Male", attended: "Yes" },
                { name: "Anjali", age: 22, gender: "Female", attended: "Yes" },
                { name: "Amit", age: 28, gender: "Male", attended: "No" },
                { name: "Shivani", age: 25, gender: "Female", attended: "Yes" },
                { name: "Manoj", age: 23, gender: "Male", attended: "Yes" }
            ]
        },
        {
            title: "Event 3",
            participants: [
                { name: "Priya", age: 24, gender: "Female", attended: "Yes" },
                { name: "Karan", age: 27, gender: "Male", attended: "Yes" },
                { name: "Neha", age: 26, gender: "Female", attended: "No" },
                { name: "Rakesh", age: 28, gender: "Male", attended: "Yes" },
                { name: "Anita", age: 23, gender: "Female", attended: "Yes" },
                { name: "Vishal", age: 29, gender: "Male", attended: "No" },
                { name: "Sneha", age: 22, gender: "Female", attended: "Yes" },
                { name: "Ajay", age: 24, gender: "Male", attended: "Yes" },
                { name: "Pallavi", age: 25, gender: "Female", attended: "No" },
                { name: "Kabir", age: 26, gender: "Male", attended: "Yes" }
            ]
        }
    ];



    return (
        <>
            <Box>
                <Root>
                    {
                        allEventsData.map((event) => {
                            return (
                                <>
                                    <Divider>
                                        <Chip label={event.title} size="large" sx={{ width: "auto", paddingX: "5rem", paddingY: "1rem" }} />
                                    </Divider>
                                    <ParticipantsTable data={event.participants} />
                                </>
                            )
                        })
                    }

                </Root>
            </Box>
        </>
    )
};

export default OrganizerParticipantsList;