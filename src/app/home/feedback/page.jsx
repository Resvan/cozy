"use client"
import React from 'react'
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
export default function page() {
  return (
    <div className='p-4'>

<Textarea
      label="Description"
      placeholder="Enter your description"
      className="max-w-xs"
    />

    </div>
  )
}
