import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons' 
import styles from './therapy-form.module.scss'

const TherapyFormComp = () => {

  
  const [step, setStep] = useState(0)
  return (
    <div className={styles.therapyFormContainerCover}>
    <div className={styles.therapyFormContainer}>
      <div className={styles.therapyFormContainerTitle}>
        <h1>GET MATCHED WITH OUR THERAPIST</h1>
        <p>To get matched with a  therapist, you&apos;ll need to kindly answer these questions. </p>
      </div>
      <form>
      {
        step === 0 && (
          <div className={styles.formContainer1}>
          <div className={styles.therapyForm1Container} >
            <div className={styles.therapyForm1Headers}>
              <h2>Age</h2>
              <h2>Gender</h2>
              <h2>Location</h2>
              <h2>Status</h2>
              <h2>Religion</h2>
            </div>
            <div className={styles.therapyForm1RadioGroups}>
              <div className={styles.therapyForm1RadioGroups1} >
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <span>6-12</span>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <span>12-18</span>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <span>19-30</span>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <span>31-45</span>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <span>46-above</span>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups2}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Male</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Female</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Other</h2>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups3}>
              <div className={styles.therapyFormInputText}> 
              <input type="input" placeholder='Country' />
              <SearchOutlined style={{ fontSize: "40px" }} />
              </div>
              <div className={styles.therapyFormInputText} > 
              <input type="input" placeholder='State'  />
              <SearchOutlined style={{ fontSize: "40px" }} />
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups4}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Single</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Married</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Divorced</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Dating</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Other</h2>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups5}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Christianity</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Islam</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Other</h2>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.therapyButton}  >
          <button  onClick={() => setStep(1)} >Next</button>
          </div>
          </div>
        )
      }
      {
        step === 1 &&  (
          <div className={styles.formContainer1}>
          <div className={styles.therapyForm3Container} >
            <div className={styles.therapyForm1Headers}>
              <h2>Are you on <br/> Medication?</h2>
              <h2>Sucide <br/> thoughts?</h2>
              <h2>Physical <br/> Health</h2>
              <h2>Sleeping <br/> Habit</h2>
              <h2>Financial <br/> Status</h2>
            </div>
            <div className={styles.therapyForm1RadioGroups02}>
              <div className={styles.therapyForm1RadioGroups01} >
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Yes</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>No</h2>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups002}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Yes</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>No</h2>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups03}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Good</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Fair</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Poor</h2>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups04}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Good</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Fair</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Poor</h2>
              </div>
              </div>

              <div className={styles.therapyForm1RadioGroups05}>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Good</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Fair</h2>
              </div>
              <div className={styles.therapyColumns}> 
              <input type="radio" />
              <h2>Poor</h2>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.therapyButton01}  >
          <button  onClick={() => setStep(0)} >Back</button>
          <button  onClick={() => setStep(2)} >Next</button>
          </div>
          </div>
        )
      }

      { step === 2 &&
         (
          <div className={styles.formContainer1}>
          <div className={styles.therapyNotesContainer}>
            <div className={styles.therapyNotesTextarea}>
            <h1>Kindly Discuss your Issue</h1>
            <div className={styles.therapyNotesTextareaPart}>
              <textarea></textarea>
            </div>
            </div>
            <div className={styles.therapyNotesDivider}>
            <h1>Or</h1>
            </div>
            <div className={styles.therapyNotesVoicenote}>
            <h1>Kindly Record your Issue</h1>
            <div className={styles.therapyNotesVoicenoteMain}>
              <div className={styles.therapyNotesVoicenoteMicrophone}>
                <img src="images/therapyForm/microphone.svg"  alt="" />
              </div>
            </div>
            </div>
            <div className={styles.therapyButton02}>
          <button  onClick={() => setStep(1)} >Back</button>
          <button>Complete</button>
          </div>
          </div>
          </div>
          )
      }

      </form>
    </div>
    </div>
  )
}

export default TherapyFormComp