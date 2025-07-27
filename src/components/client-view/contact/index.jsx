'use client'
import { useState } from "react"
import AnimationWrapper from "../animation-wrapper"

const controls = [
    {
        name: "name",
        placeholder: "Enter your name",
        type: "text",
        label: "Name"
    },
    {
        name: "email",
        placeholder: "Enter your Email",
        type: "text",
        label: "Email"
    },
    {
        name: "message",
        placeholder: "Enter your Message",
        type: "text",
        label: "Message"
    },
]

const initializeFormData = {
    name: "",
    email: "",
    message: ""
}

export default function ClientContactView() {
    const [formData, setFormData] = useState(initializeFormData)

    return (
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">

            <AnimationWrapper className={"py-6 "}>
                <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                    <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                        {"Contact Me".split(" ").map((item,index)=>(
                            <span className={`${index === 1 ? "text-green-main" : "text-black"}`}>
                                {item}{" "}
                            </span>
                        ))}
                    </h1>
                </div>
            </AnimationWrapper>

            <div className="text-gray-500 relative">
                <div className="container px-5">
                    <div className="w-full">
                        <div className="flex flex-wrap m-2">
                            {controls.map((controlItem)=>(
                                controlItem.name === "message" ? (
                                    <div className="p-2 w-full ">
                                        <div className="relative">
                                            <label className="text-sm text-black">{controlItem.label}</label>
                                            <textarea 
                                                name={controlItem.name} 
                                                id={controlItem.name} 
                                                value={formData[controlItem.name]}
                                                onChange={(e)=>
                                                    setFormData({
                                                        ...formData,
                                                        [controlItem.name] : e.target.value
                                                    })
                                                }
                                                className="w-full border-green-main border-[2px] bg-white rounded h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6"
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-2 w-full ">
                                        <div className="relative">
                                            <label className="text-sm text-black">{controlItem.label}</label>
                                            <input 
                                                name={controlItem.name} 
                                                id={controlItem.name} 
                                                value={formData[controlItem.name]}
                                                onChange={(e)=>
                                                    setFormData({
                                                        ...formData,
                                                        [controlItem.name] : e.target.value
                                                    })
                                                }
                                                className="w-full border-green-main border-[2px] bg-white rounded text-base outline-none text-black py-1 px-3 resize-none leading-6"
                                            >
                                            </input>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}