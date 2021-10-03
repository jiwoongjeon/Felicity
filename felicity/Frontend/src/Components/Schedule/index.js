import { useState } from "react";
import { IconContext } from "react-icons";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const { ScheduleContainer, Header, AppointmentContainer, FstColumn, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail } = require("./styles");

const DATA = [
    {
        id: 1,
        date: "9/3",
        time: "8:00 AM",
        doctor: "Dr. Oliver",
        email: "oliver@burrito.com"
    }
    ,
    {
        id: 2,
        date: "9/3",
        time: "8:00 AM",
        doctor: "Dr. Oliver",
        email: "oliver@burrito.com"
    }
];

export const Schedule = () => {
    // const [data, setData] = useState([]);
    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            {DATA.map((data) => (
                <AppointmentContainer>
                    <FstColumn>
                        <Group>
                            <IconContext.Provider value={ { style: { verticalAlign: 'middle', marginRight: 10, marginBottom: 3 }, size: '15px'  }}>
                                <Date><FaRegCalendarAlt />{data.date}</Date>
                                <TimeEmail>{data.time}</TimeEmail>
                            </IconContext.Provider>
                        </Group>
                        <Group>
                            <IconContext.Provider value={ { style: { marginRight: 5 }, size: '12px'  }}>
                                <DeleteIcon><FaTrash />DELETE</DeleteIcon>
                                <EditIcon><FaPen />EDIT</EditIcon>
                            </IconContext.Provider>
                        </Group>
                    </FstColumn>
                    <Column>
                        <DoctorEmail>{data.doctor}</DoctorEmail>
                    </Column>
                    <Column>
                        <DoctorEmail>Email:</DoctorEmail>
                        <TimeEmail>{data.email}</TimeEmail>
                    </Column>
                </AppointmentContainer>

            ))}
        </ScheduleContainer>
    );
}

export default Schedule;