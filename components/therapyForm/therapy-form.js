import React, { useState } from "react";
import { useRouter  } from 'next/router'
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
const { Option } = Select;
import styles from "./therapy-form.module.scss";
import Radio from "./Radio";
import { countiresRawData } from "./countriesData";
import { getPotentialTherapist } from "../../api/base";
import { getTherapList } from "../../core/actions/therapistListActions/therapistListactions";

const TherapyFormComp = ({ userToken }) => {


  const [step, setStep] = useState(0);
  const [stateList, setStateList] = useState([]);


  const router = useRouter()

  const dispatch = useDispatch()

 

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [status, setStatus] = useState("");
  const [religion, setReligion] = useState("");
  const [medication, setMedication] = useState("");
  const  [suicide, setSuicide] = useState("");
  const  [health, setHealth] = useState("");
  const  [sleeping, setSleeping] = useState("");
  const  [finance, setFinance] = useState("");
  const [story, setStory] = useState("")

  
  let problem = []

  // console.log(stateList[0]?.states);
  // console.log(state);

  const handleProblemStates = () => {

    if(suicide === "Yes") {
      problem.push('suicide', 'depression')
    }
    if (status === "married") {
      problem.push('marriage', 'child')
    }
    if (status === "dating") {
      problem.push('dating')
    }
    if (status === "divorced") {
      problem.push('divorce')
    }
    if (health === "fair" || "poor") {
      problem.push('exercise')
    }
    if (suicide === "Yes" && finance === "fair" || "poor") {
      problem.push('depression')
    }
    if (sleeping === "fair" || "poor" || medication === "Yes") {
      problem.push('personalityDisorder', 'depression')
    }
    return problem
  }

  const filterStates = (county) => {
    const result = countiresRawData.filter(
      (item) => item.name === county

      // setStateList(item.states)
      // console.log(stateList)
      // console.log(item.states)
    );

    return result;
    // console.log(result)
  };

  const therapResults = useSelector((state) => state.therapistList)


  const { therapArray } = therapResults
  console.log(therapResults)

  const handleSetProblemArray = async() => {
    handleProblemStates()
    console.log(problem)

    dispatch(getTherapList({profile: {
      age,
      gender,
      country,
      state,
      status,
      religion,
      medication,
      suicide,
      health,
      sleeping,
      finance,
      story,
      problem
    },
  }, userToken))


  if (therapArray.status === 'success') {
     router.push('/therapist-checkout')
  }

    // try {
    //     const res = await getPotentialTherapist({profile: {
    //       age,
    //       gender,
    //       country,
    //       state,
    //       status,
    //       religion,
    //       medication,
    //       suicide,
    //       health,
    //       sleeping,
    //       finance,
    //       story,
    //       problem
    //     },
    //   }, userToken)

    //   const {data} = res

    //   if(data.status === "success") {
        
    //   }

    //     console.log(data.status)
    // } catch(err) {
    //   console.error(err)
    // }

  } 

 

  const handleChange = (value) => {
    setCountry(value);
    const result = countiresRawData.filter((item) => item.name === value);


    const rel = filterStates(value);

    setStateList(rel);
  };

  const handleStateChange = (value) => {
    setState(value);
    // console.log(state);
  };

  // console.log(age)
  return (
    <div className={styles.therapyFormContainerCover}>
      <div className={styles.therapyFormContainer}>
        <div className={styles.therapyFormContainerTitle}>
          <h1>GET MATCHED WITH OUR THERAPIST</h1>
          <p>
            To get matched with a therapist, you&apos;ll need to kindly answer
            these questions.{" "}
          </p>
        </div>
        <form>


          {step === 0 && (
            <div className={styles.therapyForm1Container}>
              <div className={styles.therapyForm1Cover}>
                <div className={styles.therapyForm1Fields}>
                  <h2>
                    All fields marked as important{" "}
                    <span style={{ color: "red" }}>*</span>
                  </h2>
                  <div className={styles.therapyForm1Field}>
                    <h4>
                      <span style={{ color: "red" }}>*</span>Age
                    </h4>
                    <Radio
                      value="12"
                      selected={age}
                      text="6-12"
                      onChange={setAge}
                    />
                    <Radio
                      value="18"
                      selected={age}
                      text="12-18"
                      onChange={setAge}
                    />
                    <Radio
                      value="30"
                      selected={age}
                      text="19-30"
                      onChange={setAge}
                    />
                    <Radio
                      value="45"
                      selected={age}
                      text="31-45"
                      onChange={setAge}
                    />
                    <Radio
                      value="above"
                      selected={age}
                      text="46-above"
                      onChange={setAge}
                    />
                  </div>

                  <div>
                    <h4>
                      {" "}
                      <span style={{ color: "red" }}>*</span>Gender
                    </h4>
                    <Radio
                      value="male"
                      selected={gender}
                      text="Male"
                      onChange={setGender}
                    />
                    <Radio
                      value="female"
                      selected={gender}
                      text="Female"
                      onChange={setGender}
                    />
                    <Radio
                      value="other"
                      selected={gender}
                      text="I prefer not to say"
                      onChange={setGender}
                    />
                  </div>

                  <div>
                    <h4>
                      <span style={{ color: "red" }}>*</span>Location
                    </h4>
                    <div className={styles.optionSelect}>
                      <Select
                        showSearch
                        style={{
                          width: 200,
                        }}
                        placeholder="Select Country"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase())
                        }
                        onChange={handleChange}
                      >
                        {countiresRawData.map((cont, index) => (
                          <Option key={index} value={cont.name}>
                            {cont.name}
                          </Option>
                        ))}
                      </Select>

                      <Select
                        showSearch
                        style={{
                          width: 200,
                        }}
                        placeholder="Select State"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.includes(input)
                        }
                        filterSort={(optionA, optionB) =>
                          optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase())
                        }
                        onChange={handleStateChange}
                      >
                        {stateList[0]?.states?.map((sat, index) => (
                          <Option key={index} value={sat.name}>
                            {sat.name}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div>
                    <h4>
                      <span style={{ color: "red" }}>*</span>Status
                    </h4>
                    <Radio
                      value="single"
                      selected={status}
                      text="Single"
                      onChange={setStatus}
                    />
                    <Radio
                      value="married"
                      selected={status}
                      text="Married"
                      onChange={setStatus}
                    />

                    <Radio
                      value="divorced"
                      selected={status}
                      text="Divorced"
                      onChange={setStatus}
                    />
                    <Radio
                      value="dating"
                      selected={status}
                      text="Dating"
                      onChange={setStatus}
                    />
                    <Radio
                      value="other"
                      selected={status}
                      text="Other"
                      onChange={setStatus}
                    />
                  </div>

                  <div>
                    <h4>
                      {" "}
                      <span style={{ color: "red" }}>*</span>Religion
                    </h4>

                    <Radio
                      value="christianity"
                      selected={religion}
                      text="Christianity"
                      onChange={setReligion}
                    />

                    <Radio
                      value="islam"
                      selected={religion}
                      text="Islam"
                      onChange={setReligion}
                    />

                    <Radio
                      value="other"
                      selected={religion}
                      text="Other"
                      onChange={setReligion}
                    />
                  </div>
                </div>
                <div className={styles.therapyButton}>
                  <button onClick={() => setStep(1)}>Next</button>
                </div>
              </div>
            </div>
          )}




















          {step === 1 && (


<div className={styles.therapyForm1Container}>
<div className={styles.therapyForm1Cover}>
  <div className={styles.therapyForm1Fields}>
    <h2>
      All fields marked as important{" "}
      <span style={{ color: "red" }}>*</span>
    </h2>
    <div className={styles.therapyForm1Field}>
      <h4>
        <span style={{ color: "red" }}>*</span>Are you on Medication?
      </h4>
      <Radio
        value="yes"
        selected={medication}
        text="Yes"
        onChange={setMedication}
      />
      <Radio
        value="no"
        selected={medication}
        text="No"
        onChange={setMedication}
      />
    </div>

    <div>
      <h4>
        {" "}
        <span style={{ color: "red" }}>*</span>Suicide Thoughts?
      </h4>
      <Radio
        value="yes"
        selected={suicide}   
        text="Yes"
        onChange={setSuicide}
      />
      <Radio
        value="no"
        selected={suicide}
        text="No"
        onChange={setSuicide}
      />
    </div>

 

    <div>
      <h4>
        <span style={{ color: "red" }}>*</span>Physical Health
      </h4>
      <Radio
        value="good"
        selected={health}
        text="Good"
        onChange={setHealth}
      />
      <Radio
        value="fair"
        selected={health}  
        text="Fair"
        onChange={setHealth}
      />

      <Radio
        value="poor"
        selected={health}
        text="Poor"
        onChange={setHealth}
      />

    </div>

    <div>
      <h4>
        {" "}
        <span style={{ color: "red" }}>*</span>  Sleeping Habit
      </h4>

      <Radio
        value="good"
        selected={sleeping} 
        text="Good"
        onChange={setSleeping}
      />
      <Radio
        value="fair"
        selected={sleeping}
        text="Fair"
        onChange={setSleeping}
      />

      <Radio
        value="poor"
        selected={sleeping}
        text="Poor"
        onChange={setSleeping}
      />
    </div>

    <div>
      <h4>
        {" "}
        <span style={{ color: "red" }}>*</span>  Financial Status
      </h4>

      <Radio
        value="good"
        selected={finance}  
        text="Good"
        onChange={setFinance}
      />
      <Radio
        value="fair"
        selected={finance}
        text="Fair"
        onChange={setFinance}
      />

      <Radio
        value="poor"
        selected={finance}
        text="Poor"
        onChange={setFinance}
      />
    </div>
  </div>
  <div className={styles.therapyButton01}>
   <button onClick={() => setStep(0)}>Back</button>
   <button onClick={() => setStep(2)}>Next</button>  </div>
</div>
</div>
 )}

          {step === 2 && (
            <div className={styles.therapyForm1Container}>
              <div className={styles.therapyNotesContainer}>
                <div className={styles.therapyNotesTextarea}>
                  <h1>Kindly Discuss your Issue</h1>
                  <div className={styles.therapyNotesTextareaPart}>
                    <textarea placeholder='Tell your story...'
              value={story}  onChange={(e) => setStory(e.target.value)} ></textarea>
                  </div>
                </div>
                {/* <div className={styles.therapyNotesDivider}>
                  <h1>Or</h1>
                </div> */}
                {/* <div className={styles.therapyNotesVoicenote}>
                  <h1>Kindly Record your Issue</h1>
                  <div className={styles.therapyNotesVoicenoteMain}>
                    <div className={styles.therapyNotesVoicenoteMicrophone}>
                      <img src="images/therapyForm/microphone.svg" alt="" />
                    </div>
                  </div>
                </div> */}
                <div className={styles.therapyButton02}>
                  <button onClick={() => setStep(1)}>Back</button>
                  <button type="button" onClick={handleSetProblemArray}>Complete</button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TherapyFormComp;
