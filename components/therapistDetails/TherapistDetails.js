import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ExclamationCircleOutlined } from '@ant-design/icons'
import styles from './therapistdetails.module.scss'
import { DatePicker,  Modal } from 'antd';
import moment from 'moment';
import { postAppointmentDate } from '../../api/base';

const Availability = {
  monday: "02:00pm to 08:00pm",
  tuesday: "02:00pm to 08:00pm",
  wednesday: "02:00pm to 08:00pm",
  thursday: "02:00pm to 08:00pm",
  friday: "02:00pm to 08:00pm",
  saturday: "02:00pm to 08:00pm",
  sunday: "02:00pm to 08:00pm",
}

const format = 'DD-MM-YYYY hh:mm A';


function TherapistDetails({ therapistName, therapistImg,  therapistRating, sessionStatus }) {

 const [loading, setLoading] = useState(false)
  const [displayedSelectedTime, setDisplayedSelectedTime] = useState()
  const [hourFormat, setHourFormat] = useState()
  const [selectedTime, setSelectedTime] = useState()
  const [realDateObject, setRealDateObject] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const loggedUserId = userInfo?.user?.id;

  const loggedUserToken = userInfo?.token;

  const therapId = useSelector((state) => state.therapistBooking);

  const { sessionData } = therapId;

 const handleConfirmAppointmentDetails = async () => {
  try {

    var dext = Date();
    // var dext = Object(Date())
    console.log(dext)
      setLoading(true)

      const res = await postAppointmentDate(loggedUserId, sessionData.sessionID, {time: dext.toString()}, loggedUserToken)

      console.log(res.data)
      setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error(error)
  }
 }


  const showModal = () => {
    setIsModalOpen(true);


    setDisplayedSelectedTime(selectedTime.slice(0, 15) + " " +  hourFormat  + " " + selectedTime.substr(25))
    console.log('clicked')
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleConfirmAppointmentDetails()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let dateAvail = []

  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ',  dateString);
    setHourFormat(dateString.substr(11))
    console.log(hourFormat)
  };
  const onOk = (value) => {
    const actualDate = value?._d
    setRealDateObject(actualDate)
    console.log(realDateObject)
    const str = String(value?._d)
    console.log(str)
    setSelectedTime(str)
    // console.log(str.slice(0, 21) + " " + str.substr(25));
    // setSelectedTime(str.slice(0, 15) + " " +  hourFormat  + " " + str.substr(25))
    // setSelectedTime(str)
    

  //  const firstpart = str.slice(0, 4)
    // const secondpart = str.substring(25)

    // const formattedForDisplay = firstpart
    // setSelectedTime(formattedForDisplay)
    console.log(selectedTime)
    // console.log('Formatted Selected Time: ', dateString);
    // dateAvail.push(str)
    // console.log(dateAvail[0].slice(0, 4))
  };




  return (
    <div className={styles.mainCover}>
      <div className={styles.imageDesc}>
      <img src={therapistImg} alt={therapistName}  />
      <p> {therapistName} </p>
      <small>Rating: {therapistRating} </small>
      </div>
      <div className={styles.availabledays}>
        <h1>Availability times</h1>
        <div className={styles.availabledaysList}>
          <p>monday: {" "} <span> {Availability.monday} </span> </p>
          <p>tuesday:{" "} <span> {Availability.tuesday} </span> </p>
          <p>wednesday:{" "}<span> {Availability.wednesday} </span> </p>
          <p>thursday:{" "}<span> {Availability.thursday} </span> </p>
          <p>friday:{" "} <span>{Availability.friday} </span> </p>
          <p>saturday:{" "}<span> {Availability.saturday} </span> </p>
          <p>sunday:{" "} <span>{Availability.sunday} </span> </p>
        </div>
      </div>
      <div  className={styles.dateAndtime} >
     <h2> Select date and time </h2> 
     <div>
     <DatePicker showTime  use12Hours format={format} onChange={onChange} onOk={onOk} />
     </div>
      </div>
      <div  className={styles.status} >
       <p> Session payment status: <span>{sessionStatus}</span> </p></div>
      <div  className={styles.buttonCover}  >
        <>
      <button onClick={showModal}>Confirm details</button>
      <Modal visible={isModalOpen} open={isModalOpen} onOk={handleOk} onCancel=  { handleCancel} className={styles.modalCover}  >
        <h2> <ExclamationCircleOutlined className={styles.modalIcon}  style={{ color: "#FC6A03", fontSize: "1.5rem"}} /> <span> Are you sure about the following appointment time? </span></h2>
        <p>{displayedSelectedTime}</p>
        
      </Modal>
      </> 
      </div>
      
    </div>
  )
}

export default TherapistDetails