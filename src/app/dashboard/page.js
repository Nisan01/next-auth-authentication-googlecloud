"use client";

import { useSession } from 'next-auth/react'

import React from 'react'

function Page() {
const{data:session}= useSession();

 
if(session){
return (
    <div>

<h2>Welcome mr.{session.user.name}</h2>

    </div>

  )
}
}

export default Page