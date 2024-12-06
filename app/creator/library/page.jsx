"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Library = () => {
  const router = useRouter();
  useEffect(() => {
      router.replace("/creator/library/posts")
  }, [router])
  return (
    <div>
        
    </div>
  )
}

export default Library;
