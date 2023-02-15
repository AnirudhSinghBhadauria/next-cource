import React, { useEffect } from 'react'

const LastSales = () => {
     useEffect(async ()=>{
          const response = await fetch('https://console.firebase.google.com/u/0/project/next-js-course-8aa6a/database/next-js-course-8aa6a-default-rtdb/data/~2F');
     },[])

  return (
    <ul>

    </ul>
  )
}

export default LastSales