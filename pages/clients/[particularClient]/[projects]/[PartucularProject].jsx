import React from 'react'
import { useRouter } from 'next/router'

const PartucularProject = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>PartucularProject</div>
  )
}

export default PartucularProject