import { useRouter } from 'next/router'
import React from 'react'

const CatchAll = () => {
     const router = useRouter()

     console.log(router.query);
  return (
    <div>CatchAll</div>
  )
}

export default CatchAll