import React, { useState } from "react";
import { Modal, message, Select } from "antd";
const { Option } = Select;
import styles from "./admindashboard.module.scss";
import { addTherapists } from "../../../api/base";

// list of specializations for therapist
const children = [
  {
    id: 0,
    title: "Dating",
    rep: "dating",
  },
  {
    id: 1,
    title: "Marriage",
    rep: "marriage",
  },
  {
    id: 2,
    title: "Depression",
    rep: "depression",
  },
  {
    id: 3,
    title: "Divorce",
    rep: "divorce",
  },
  {
    id: 4,
    title: "Child",
    rep: "child",
  },
  {
    id: 5,
    title: "Exercise",
    rep: "exercise",
  },
  {
    id: 6,
    title: "Personality Disorder",
    rep: "personalityDisorder",
  },
  {
    id: 7,
    title: "Suicide",
    rep: "suicide",
  },
];

function AdminDashboardComp({ adminToken }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  // const [specialization, setSpecialization] = useState();
  // const [pseudospecialization, setPseudoSpecialization] = useState([])
  const [loading, setLoading] = useState(false);

  // initailize specialiation array
  let specialization = [];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    setGender(value);
  };

  // creates a new therapist
  const handleAddTherapists = async (e) => {
    e.preventDefault();

    // const data = { email, name, password, image, gender };

    if (specialization[specialization.length - 1]?.length > 4) {
      message.error("Specs above 4!");
    } else {
      try {
        setLoading(true);
        const res = await addTherapists(
          {
            email,
            name,
            password,
            image,
            gender,
            specialization: specialization[specialization.length - 1],
          },
          adminToken
        );

        //  console.log(res.data)

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    }
  };

  // handles selection of specializations
  const handleSpecChange = (value) => {
    specialization.push(value);

    if (specialization[specialization.length - 1]?.length > 4) {
      message.error("check your error in specs");
    }
    // console.log(specialization)
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.createThep}>
        <button type="button" onClick={showModal}>
          Add a Therapist
        </button>
        <Modal
          visible={isModalOpen}
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className={styles.modalContainer}>
            <form onSubmit={handleAddTherapists}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label>Image</label>
                <input
                  type="text"
                  placeholder="Enter Image Url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div>
                <label>Gender</label>
                <Select
                  placeholder="Select gender"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </div>
              <div>
                <label>Specialization</label>
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select a maximum of 4"
                  // disabled={specialization.length >= 4}
                  onChange={handleSpecChange}
                >
                  {children.map((spec, index) => (
                    <Option key={index} value={spec.rep}>
                      {spec.title}
                    </Option>
                  ))}
                </Select>
              </div>
              <button type="submit">
                {loading ? "Creating" : "Create Therapist"}
              </button>
            </form>
          </div>
        </Modal>
      </div>
      <div className={styles.viewThep}>View all therapists</div>
    </div>
  );
}

export default AdminDashboardComp;
