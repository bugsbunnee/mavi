import { AddToCalendarButton } from "add-to-calendar-button-react";

const AddToCalendar = () => {
    return ( 
        <AddToCalendarButton
            name="Title"
            options={['Google', 'Outlook.com']}
            location="World Wide Web"
            startDate="2025-01-25"
            endDate="2025-01-25"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
        />
     );
}
 
export default AddToCalendar;