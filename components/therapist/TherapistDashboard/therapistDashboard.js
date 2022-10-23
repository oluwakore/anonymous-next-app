import React, { useState } from "react";

import { Modal, message, Select } from "antd";
import { updateTherapist } from "../../../api/base";

const { Option } = Select;




function TherapistDashboardComp({ therapistToken, therapistInfo }) {

// const { monday, tuesday, wednesday, thursday, friday, saturday, sunday }  = therapistInfo?.availableTimes

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [monStartdate, setMonStartdate] = useState(therapistInfo?.availableTimes?.monday.split(" ")[0])
  const [monEndDate, setMonEnddate] = useState(therapistInfo?.availableTimes?.monday.split(" ")[2])
  const [reverted, setReverted] = useState(false);
  const [none, setNone] = useState(false);



  console.log(monStartdate)
  console.log(monEndDate)

  const createRange = (first, last) => {
   return `${first} - ${last}`
  }

  const handleUpdateTime = async() => {

    const newTime = {
      monday: createRange(monStartdate, monEndDate)
    }

    // const availableTimes = {
    //   monday: newTime.monday
    // }

    try {

      const res = await updateTherapist(therapistInfo?.id, {availableTimes: {monday: newTime.monday}} ,therapistToken)
      

      console.log(res.data)

    } catch (error) {
      console.error(error)
    }

    

    console.log(newTime)
  }

  const setToNone = () => {
    setNone(true)
    setMonEnddate("00:00")
    setMonStartdate("00:00")
  }

  const setToSetTime = () => {
    setNone(false)
  }


  const handleMonStartChange = (value) => {
    setMonStartdate(value);
  };
  const handleMonEndChange = (value) => {
    setMonEnddate(value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(therapistInfo);

  return (
    <div>
      <div>
        <img
          src={therapistInfo?.image}
          alt={therapistInfo?.about}
          style={{ width: "30rem", aspectRatio: "2/1.5" }}
        />
        <h3> {therapistInfo?.name} </h3>
        <div>
          <h2>Specialization</h2>
          {therapistInfo?.specialization?.map((item, index) => (
            <>
              <p key={index}> {item} </p>
            </>
          ))}
        </div>
        <div>
          <h4> monday: {therapistInfo?.availableTimes.monday} </h4>
          <h4> tuesday: {therapistInfo?.availableTimes.tuesday} </h4>
          <h4> wednesday: {therapistInfo?.availableTimes.wednesday} </h4>
          <h4> thursday: {therapistInfo?.availableTimes.thursday} </h4>
          <h4> friday: {therapistInfo?.availableTimes.friday} </h4>
          <h4> saturday: {therapistInfo?.availableTimes.saturday} </h4>
          <h4> sunday: {therapistInfo?.availableTimes.sunday} </h4>

          <div>
            <button type="button" onClick={showModal}>
              Edit availability Times
            </button>
            <Modal
              visible={isModalOpen}
              footer={null}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                List of Availability Times
                <div>
                  <small>monday:</small>
                  {
                    none ? <h3>No time added for this day of the week</h3> :
                  <div>
                  <Select
                  // defaultValue={monStartdate}
                    placeholder="Select start time"
                    style={{
                      width: 200,
                    }}
                    onChange={handleMonStartChange}
                  >
                    <Option value="08:00am">08:00 am</Option>
                    <Option value="09:00am">09:00 am</Option>
                    <Option value="10:00am">10:00 am</Option>
                    <Option value="11:00am">11:00 am</Option>
                    <Option value="12:00pm">12:00 pm</Option>
                    <Option value="01:00pm">01:00 pm</Option>
                    <Option value="02:00pm">02:00 pm</Option>
                    <Option value="03:00pm">03:00 pm</Option>
                    <Option value="04:00pm">04:00 pm</Option>
                    <Option value="05:00pm">05:00 pm</Option>
                    <Option value="06:00pm">06:00 pm</Option>
                    <Option value="07:00pm">07:00 pm</Option>
                    <Option value="08:00pm">08:00 pm</Option>
                    <Option value="09:00pm">09:00 pm</Option>
                  </Select>
                  <small>to</small>
                  <Select
                  // defaultValue={monEndDate}
                    placeholder="Select end time"
                    style={{
                      width: 200,
                    }}
                    onChange={handleMonEndChange}
                  >
                    <Option value="08:00am">08:00 am</Option>
                    <Option value="09:00am">09:00 am</Option>
                    <Option value="10:00am">10:00 am</Option>
                    <Option value="11:00am">11:00 am</Option>
                    <Option value="12:00pm">12:00 pm</Option>
                    <Option value="01:00pm">01:00 pm</Option>
                    <Option value="02:00pm">02:00 pm</Option>
                    <Option value="03:00pm">03:00 pm</Option>
                    <Option value="04:00pm">04:00 pm</Option>
                    <Option value="05:00pm">05:00 pm</Option>
                    <Option value="06:00pm">06:00 pm</Option>
                    <Option value="07:00pm">07:00 pm</Option>
                    <Option value="08:00pm">08:00 pm</Option>
                    <Option value="09:00pm">09:00 pm</Option>
                  </Select>
                  </div>
                  }
                  {
                    none ?  <button type="button" onClick={setToSetTime}>Set time range</button> :  <button type="button" onClick={setToNone}>Set to None</button>
                  }
                 
                </div>

                <div>
                  <button type="button" onClick={handleUpdateTime}>
                    Update
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherapistDashboardComp;
