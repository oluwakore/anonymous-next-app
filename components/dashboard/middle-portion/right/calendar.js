import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import { storeApptDatesArray } from "../../../../core/actions/useractions/useractions";
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


const Calender = ({ apptDates }) => {
 
  

  const dispatch = useDispatch()

  // const userLogin = useSelector((state) => state.userLogin)
  // const  { userInfo } = userLogin 

  // const loggedUserId = userInfo?.user?.id

  // const loggedUserToken = userInfo?.token


  const userDetails = useSelector((state) => state.userDetails)
  const {  user }  = userDetails

  

  // console.log(user?.data?.activeSessions);

  




  // const removeDupli = () => {
  //  const final =  arrayCal.filter((c, index) => {
  //     return arrayCal.indexOf(c) === index;
  // });
  
  //  arrayCal2.push(final)

  // }
  

  


  
  // useEffect(() => {
  //   // setMainSessionStuff(user?.data?.activeSessions)

  //   if (user?.data?.activeSessions !== undefined) {
  //     dispatch(storeApptDatesArray(calDetr()))
  //     // console.log('yeah!!!')
  //     //  calDetr();
  //     //  removeDupli()
  //   }
    
   
  // }, [dispatch]);



  // const appointmentDetails = useSelector((state) => state.storeApptDetails)
  // const { appt }  = appointmentDetails


  // console.log(appt)

 

  const data = [
    {
      date: "2022-11-02",
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
    const { extendedProps, title} = e.event._def;

    let clicked = {
      title,
      ...extendedProps,
    };

    
    // console.log(clicked);
    // console.log(extendedProps)
    
  
   message.info(`You have an appointment by: ${extendedProps.appt_day} with ${extendedProps.therapist_name}. Do keep this in mind...`, [5])
   
    // return (
    //   <Tooltip placement="top" title={title}  trigger={["click"]} >
    //     <div class="fc-event-title fc-sticky"> {title} </div>
    //   </Tooltip>
    // )
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
    //     {title}
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
        events={apptDates}
        // in case you want to custmize whats being rendered on the date
        eventContent={(info) => eventContent(info)}
      />
    </div>
  );
};

export default Calender;
