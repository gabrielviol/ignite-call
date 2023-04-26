import dayjs from 'dayjs'
import { Calendar } from "@/components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { api } from '@/lib/axios';

export function CalendarStep() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [availability, setAvailability] = useState(null)

    const router = useRouter()

    const isDateSelected = !!selectedDate
    const username = String(router.query.username)

    const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
    const describeDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null

    useEffect(() => {
        if (!selectedDate) {
            return
        }

        api.get(`/users/${username}/availability`, {
            params: {
                date: dayjs(selectedDate).format('YYYY-MM-DD')
            }
        }).then(response => {
            console.log(response.data)
        })
    }, [selectedDate, username])

    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
            {isDateSelected && (
                <TimePicker>
                    <TimePickerHeader>
                        {weekDay} <span>{describeDate}</span>
                    </TimePickerHeader>
                    <TimePickerList>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>09:00h</TimePickerItem>
                        <TimePickerItem>10:00h</TimePickerItem>
                        <TimePickerItem>12:00h</TimePickerItem>
                        <TimePickerItem>14:00h</TimePickerItem>
                        <TimePickerItem>16:00h</TimePickerItem>
                        <TimePickerItem>18:00h</TimePickerItem>
                        <TimePickerItem>19:00h</TimePickerItem>
                        <TimePickerItem>20:00h</TimePickerItem>
                        <TimePickerItem>21:00h</TimePickerItem>
                        <TimePickerItem>22:00h</TimePickerItem>
                        <TimePickerItem>23:00h</TimePickerItem>
                        <TimePickerItem>24:00h</TimePickerItem>
                    </TimePickerList>
                </TimePicker>
            )}
        </Container>
    )
}