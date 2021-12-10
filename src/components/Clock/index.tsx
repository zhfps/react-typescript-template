import React, { useState, useEffect } from 'react'
import './index.less'
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const zeroPadding = (num:number, digit:number) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}
const Clock = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const updateTime = () => {
    const cd = new Date()
    const date = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2)
    const time = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
    setDate(date)
    setTime(time)
  }
  const timerID = setInterval(updateTime, 1000)
  useEffect(() => {
    updateTime()
    clearInterval(timerID)
  })
  return (
    <>
      <div className='clock'>
        <p className='date'>
          { date }
        </p>
        <p className='time'>
          { time }
        </p>
      </div>
    </>
  )
}

export default Clock
