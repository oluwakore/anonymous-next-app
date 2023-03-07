import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from "./therapistdetails.module.scss";
import { DatePicker, Modal, message } from "antd";
// import moment from 'moment';
import { postAppointmentDate, postAppointmentTitle } from "../../api/base";

// const Availability = {
//   monday: "02:00pm to 08:00pm",
//   tuesday: "02:00pm to 08:00pm",
//   wednesday: "02:00pm to 08:00pm",
//   thursday: "02:00pm to 08:00pm",
//   friday: "02:00pm to 08:00pm",
//   saturday: "02:00pm to 08:00pm",
//   sunday: "02:00pm to 08:00pm",
// }

const format = "DD-MM-YYYY hh:mm A";

function TherapistDetails({
  therapistName,
  therapistImg,
  therapistRating,
  sessionStatus,
  availableTimes,
}) {
  const [loading, setLoading] = useState(false);
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [displayedSelectedTime, setDisplayedSelectedTime] = useState();
  const [viewTime, setViewTime] = useState(false);
  const [hourFormat, setHourFormat] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [realDateObject, setRealDateObject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [showWhiteBody, setShowWhiteBody] = useState(false);
  const router = useRouter();

  // gets the userlogin redux state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // the id for the logged in user
  const loggedUserId = userInfo?.user?.id;

  // the token for the logged in user
  const loggedUserToken = userInfo?.token;

  // redux state for therapist booking details
  const therapId = useSelector((state) => state.therapistBooking);

  const { sessionData } = therapId;

  // books an appointment with the therapist
  const handleConfirmAppointmentDetails = async () => {
    try {
      const res = await postAppointmentDate(
        loggedUserId,
        sessionData.sessionID,
        { time: realDateObject, title: appointmentTitle },
        loggedUserToken
      );

      if (res.data.status === "success") {
        message.success(
          "Appointment confirmed, view details in upcoming appointments tab and on calendar",
          [10]
        );
        router.push("/dashboard");
      }

      console.log(res.data);
      // setLoading(false)
    } catch (error) {
      // setLoading(false)

      console.error(error);
      message.error(error?.response.data.msg);
    }
  };

  // show time modal
  const showTimeModal = () => {
    setIsTimeModalOpen(true);
    setShowWhiteBody(true);
  };

  // close time modal
  const handleTimeModalCancel = () => {
    setIsTimeModalOpen(false);
    setShowWhiteBody(false);
  };

  // when ok button of time modal is clicked
  const handleTimeOk = () => {
    setIsTimeModalOpen(false);
    setShowWhiteBody(false);
  };

  // open date and time selection modal
  const showModal = () => {
    if (selectedTime === undefined) {
      message.error("Please select a date and time");
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
      setDisplayedSelectedTime(
        selectedTime?.slice(0, 15) +
          " " +
          hourFormat +
          " " +
          selectedTime?.substr(25)
      );
      // console.log('clicked')
    }
    // setIsModalOpen(true);
  };

  // runs when ok button is clicked
  const handleOk = () => {
    handleConfirmAppointmentDetails();
    setIsModalOpen(false);
  };

  // closes modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // checks if time and date are already selected
  const showViewTime = () => {
    if (viewTime === false) {
      return "Select date and time";
    } else {
      return "Change date and time";
    }
  };

  // display selected time
  const showViewTimeDisplayText = () => {
    if (viewTime === false) {
      return "No time selected yet";
    } else {
      return selectedTime?.slice(0, 15) + " " + hourFormat;
    }
  };

  // runs when date is changed
  const onChange = (value, dateString) => {
    setHourFormat(dateString.substr(11));
    // console.log(hourFormat)
  };

  // runs when date is selected
  const onOk = (value) => {
    const actualDate = value?._d;
    setRealDateObject(actualDate);
    // console.log(realDateObject)
    const str = String(value?._d);
    // console.log(str)
    setSelectedTime(str);
    setIsTimeModalOpen(false);
    setShowWhiteBody(false);
    setViewTime(true);
  };

  return (
    <div
      className={[
        styles.mainCover,
        showWhiteBody ? styles.displayWhite : "",
      ].join(" ")}
    >
      <div className={styles.imageDesc}>
        <img
          src={therapistImg === "" ? "default.jpg" : therapistImg}
          alt={therapistName}
        />
        <p> {therapistName} </p>
        <small>Rating: {therapistRating} </small>
      </div>
      <div className={styles.availabledays}>
        <h1>Availability times</h1>
        <div className={styles.availabledaysList}>
          <p>
            monday: <span> {availableTimes?.monday} </span>{" "}
          </p>
          <p>
            tuesday: <span> {availableTimes?.tuesday} </span>{" "}
          </p>
          <p>
            wednesday: <span> {availableTimes?.wednesday} </span>{" "}
          </p>
          <p>
            thursday: <span> {availableTimes?.thursday} </span>{" "}
          </p>
          <p>
            friday: <span>{availableTimes?.friday} </span>{" "}
          </p>
          <p>
            saturday: <span> {availableTimes?.saturday} </span>{" "}
          </p>
          <p>
            sunday: <span>{availableTimes?.sunday} </span>{" "}
          </p>
        </div>
      </div>

      <div className={styles.apptTitleHeader}>
        <h4>Appointment Title </h4>
        <div className={styles.apptTitle}>
          <input
            type="text"
            placeholder="e.g. dating therapy session"
            value={appointmentTitle}
            onChange={(e) => setAppointmentTitle(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.dateAndtime}>
        <button onClick={showTimeModal}> {showViewTime()} </button>
        <small>Selected Time: {showViewTimeDisplayText()} </small>
        <Modal
          visible={isTimeModalOpen}
          open={isTimeModalOpen}
          onCancel={handleTimeModalCancel}
          onOk={handleTimeOk}
          footer={null}
        >
          <div className={styles.timeDateModal}>
            <DatePicker
              placeholder="Select date and time"
              showTime
              use12Hours
              format={format}
              onChange={onChange}
              onOk={onOk}
            />
          </div>
        </Modal>
      </div>
      <div className={styles.status}>
        <p>
          {" "}
          Session payment status: <span>{sessionStatus}</span>{" "}
        </p>
      </div>
      <div className={styles.buttonCover}>
        <>
          <button onClick={showModal}>Confirm details</button>
          <Modal
            visible={isModalOpen}
            open={isModalOpen}
            onOk={() => handleOk()}
            onCancel={handleCancel}
            className={styles.modalCover}
          >
            <h2>
              {" "}
              <ExclamationCircleOutlined
                className={styles.modalIcon}
                style={{ color: "#FC6A03", fontSize: "1.5rem" }}
              />{" "}
              <span>
                {" "}
                Are you sure about the following appointment title and time?{" "}
              </span>
            </h2>
            <p> {appointmentTitle} </p>
            <p> {displayedSelectedTime} </p>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default TherapistDetails;
