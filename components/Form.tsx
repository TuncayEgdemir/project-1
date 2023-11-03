'use client'

import React from 'react'
import Input from './Input'
import {AiOutlineSend} from 'react-icons/ai'
import { useState } from 'react'

const Form = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  console.log(email, name, lastName, phone);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setLastName("");
    setPhone("");

    if (email === "" || name === "" || lastName === "" || phone === "") {
      alert("Please fill all inputs");
    } else {
      alert("Your message has been sent");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-12 justify-between items-center"
    >
      <h1 className="text-3xl mt-12 font-Courgette text-red-500">Contact us</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          id="name"
          label="Name"
          type="name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <Input
          id="lastname"
          label="Lastname"
          type="lastName"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <Input
          id="phone"
          label="Phone"
          type="phone"
          value={phone}
          onChange={(e: any) => setPhone(e.target.value)}
        />
      </div>
      <button className="border-2     rounded-md px-7 py-3 hover:bg-gray-400  ">
        <AiOutlineSend size={25} className="inline-block mr-2 " />
        Send
      </button>
    </form>
  )
}

export default Form