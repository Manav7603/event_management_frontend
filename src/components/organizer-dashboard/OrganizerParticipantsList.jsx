import * as React from 'react';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ParticipantsTable from '../tables/ParticipantsTable';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetParticipantsQuery } from '../../services/backendAPI';
import { setParticipants } from '../../store/participantsSlice';

// const Root = styled('div')(({ theme }) => ({
//     width: '100%',
//     ...theme.typography.body2,
//     color: theme.palette.text.secondary,
//     '& > :not(style) ~ :not(style)': {
//         marginTop: theme.spacing(2),
//     },
// }));


const OrganizerParticipantsList = () => {

    const dispatch = useDispatch();
    const participants = useSelector( state => state.participants.participants );

    const { data, error, isLoading } = useGetParticipantsQuery();

    useEffect(() => {
        if(!participants.length && data){
            dispatch(setParticipants({ participants: data }));
        }
    }, [data, participants, dispatch]);

    if(isLoading) return <h4>Loading participants...</h4>
    if(error) return <h4>Error loading events...</h4>

    return (
        <>
            <Box>
                {/* <Root> */}
                    {
                        participants.map((participant) => {
                            return (
                                <>
                                    <Divider>
                                        <Chip label={participant.title} size="large" sx={{ width: "auto", paddingX: "5rem", paddingY: "1rem" }} />
                                    </Divider>
                                    <ParticipantsTable data={participant.participants} />
                                </>
                            )
                        })
                    }

                {/* </Root> */}
            </Box>
        </>
    )
};

export default OrganizerParticipantsList;
