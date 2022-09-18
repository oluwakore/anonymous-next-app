import React, { useEffect, useState } from 'react'

function Test() {

  const [awardTime, setAwardTime] =     useState(0)
  const [fixedTime, setFixedTime] =     useState(0)

  const awards = [
    {
      value: 60,
      title: 'you won part 1!',
      desc:  'let me go!'
    },
    {
      value: 180,
      title: 'you won part 2!',
      desc:  'let me go!'
    },
    {
      value: 300,
      title: 'you won part 3!',
      desc:  'let me go!'
    },
    {
      value: 600,
      title: 'you won part 4!',
      desc:  'let me go!'
    },

  ]

  // const time = new Date()
  // let currentTime = time.getTime()


  // useEffect(() => {
  //   const time = new Date()
  //   let currentTime = time.getTime()
  //   setFixedTime(currentTime)
  // }
  // , [])
  // // console.log(currentTime)

  // const increaseTime = (number) => {
  //   const increment = 1000
  //   let newValue = number += increment
  //   setAwardTime(newValue)
  //   console.log('increase')

  // }

  // setInterval(() => 
  //   increaseTime(fixedTime)
  // , 1000)
  


  return (
    <div>
      {awardTime}
    </div>
  )
}

export default Test