import React from 'react'
import { useRouter } from 'next/router'

const Developers = () => {
     const router = useRouter()

     console.log(router.query);
     console.log(router.route);
     console.log(router.asPath)
  return (
    <h1>Developers</h1>
  )
}

export default Developers