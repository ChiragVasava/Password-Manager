import React from 'react';
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])



    const showPassword = () => {
        alert("Toggle password visibility");
        console.log(ref.current.src);
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }

    const savePassword = () => {
        console.log(form);
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form]);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)]"></div>

            <div className="mycontainer">

                <h1 className="text-4xl text font-bold text-center">
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">OP/&gt;</span>
                </h1>

                <p className="text-green-900 text-lg text-center">Your Own Password Manager</p>

                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder="Enter Website URL" className="bg-white border border-green-500 w-full rounded-full p-4 py-1" type="url" name="site" id="" />
                    <div className="flex w-full gap-8 justify-between">
                        <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="border border-green-500 w-full rounded-full p-4 py-1" type="username" name="username" id="" />

                        <div className="relative">
                            <input value={form.password} onChange={handleChange}
                                placeholder="Enter Password"
                                className="border border-green-500 w-full rounded-full px-4 py-3 pr-12"
                                type="password"
                                name="password"
                                id=""
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                onClick={showPassword}>
                                <img ref={ref}
                                    className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
                                    src="icons/eye.png"
                                    alt="toggle password visibility"
                                />
                            </span>
                        </div>
                    </div>

                    <div>
                        <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-400 rounded-full px-8 py-2 w-fit border border-green-900">
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover" >
                            </lord-icon>
                            Add Password</button>
                    </div>
                </div>


                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords To Show </div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className="bg-green-700 text-white">
                                <tr>
                                    <th className="py-2">Site</th>
                                    <th className="py-2">Username</th>
                                    <th className="py-2">Password</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100">
                                {passwordArray.map((item, index)=> {
                                    return <tr key={index}>
                                    <td className="py-2 border border-white text-center w-32"><a href={item.site} target='_blank'>{item.site}</a></td>
                                    <td className="py-2 border border-white text-center w-32">{item.username}</td>
                                    <td className="py-2 border border-white text-center w-32">{item.password}</td>
                                </tr>
                                })}
                            </tbody>
                        </table>}

                </div>
            </div>
        </>
    )
}
export default Manager
