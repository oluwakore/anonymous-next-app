import React, {useEffect} from "react";
import { Tooltip } from "antd";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
// import './calender.scss'

const text = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h3>Title</h3>
    <h4>2001-01-01</h4>
    <p>lorem ipsum lorem ipsum</p>
  </div>
);

const Calender = ({ calendarSessions }) => {
  console.log(calendarSessions);

  // let newData = [];

  // const calDetr = () => {
  //   calendarSessions?.forEach((item) => {
  //     newData.push(`${item.therapist.name}`)
  //   })
  // }


  // console.log(newData)
  // const calendarData = () => {
  //   calendarSessions?.map((item, index) => 
  //       {item?.appointments
  //         .filter((list) => list.status === "pending")
  //         .forEach((subcard) => {
  //           newData.push({
  //             date: moment(subcard.start_time).format("L"),
  //             title: subcard.title,
  //             timeRange: `${moment(subcard.start_time).format("LT")} - ${moment(
  //               subcard.end_time
  //             ).format("LT")}`,
  //             therapist_name: `Dr. ${item.therapist.name}`,
  //           });

  //           return newData
  //         })}
  //   );
  // };


  // useEffect(() => {
  //   calDetr()
  // }, [])

  // console.log(newData)

  const data = [
    {
      date: "2022-07-02",
      title: "some title",
      desc: "some description",
      status: "today",
    },
    {
      date: "2022-07-20",
      title: "some title",
      desc: "some description",
      status: "next week",
    },
    {
      date: "2022-07-12",
      title: "some title",
      desc: "some description",
      status: "tomorrow",
    },
  ];

  /**
   * Gets the object of the date that was clicked
   * @param e Object
   */
  const selectedEvent = (e) => {
    const { extendedProps, title } = e.event._def;
    let clicked = {
      title,
      ...extendedProps,
    };
    console.log(clicked);
  };

  /**
   * Customize whats being rendered on the date
   * @param info Object
   */
  const eventContent = (info) => {
    const { extendedProps, title } = info.event._def;
    let clicked = {
      title,
      ...extendedProps,
    };

    // return (
    //   <Tooltip placement="left"  title={text} color={`blue`}>
    //     <div className='calend-events'>
    //     <div  className='calend-events-main'>
    //     anonymous
    //     </div>
    //   </div>
    //   </Tooltip>
    // )
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "dayGridMonth",
          center: "title",
          right: "prev,next",
        }}
        selectable={true}
        dayMaxEvents={1}
        eventClick={(e) => selectedEvent(e)}
        events={data}
        // in case you want to custmize whats being rendered on the date
        eventContent={(info) => eventContent(info)}
      />
    </div>
  );
};

export default Calender;
