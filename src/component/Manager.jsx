import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        toast('Coppied To Clipboar', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        alert("Toggle password visibility");
        console.log(ref.current.src);
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        console.log(form);
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, form]);
            setform({ site: "", username: "", password: "" })
            toast('password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast('password not saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }



    const deletePassword = (id) => {
        console.log("Deleting password with id", id);
        let c = confirm("Do your really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id)[0])
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('passsword deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        toast('Password Edited!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        console.log("Editing password with id", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />


            <div className="mycontainer">

                <h1 className="text-4xl text font-bold text-center">
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-lg text-center">Your Own Password Manager</p>


                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange}
                        placeholder="Enter Website URL"
                        className="bg-white border border-green-500 w-full rounded-full p-4 py-1"
                        type="url"
                        name="site"
                        id="site" />

                    <div className="flex  flex-col md:flex-row w-full gap-8 justify-between">
                        <input value={form.username} onChange={handleChange}
                            placeholder="Enter Username"
                            className="border border-green-500 w-full rounded-full p-4 py-1"
                            type="username"
                            name="username"
                            id="username" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange}
                                placeholder="Enter Password"
                                className="border border-green-500 w-full rounded-full px-4 py-3 pr-12"
                                type="password"
                                name="password"
                                id="password"
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
                            Save</button>
                    </div>
                </div>


                <div className="passwords w-full">
                    <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords To Show </div>}
                    {passwordArray.length != 0 &&
                        <div className="overflow-x-auto w-full">
                            <table className="table-auto w-full rounded-md overflow-hidden mb:10">
                                <thead className="bg-green-700 text-white">
                                    <tr>
                                        <th className="py-2">Site</th>
                                        <th className="py-2">Username</th>
                                        <th className="py-2">Password</th>
                                        <th className="py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-green-100">
                                    {passwordArray.map((item, index) => {
                                        return <tr key={index}>

                                            <td className="flex items-center justify-center py-2 border border-white text-center">
                                                <div className="flex items-center justify-center">
                                                    <a href={item.site} target='_blank'>{item.site}</a>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover" >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="py-2 border border-white text-center">
                                                <div className="flex items-center justify-center">
                                                    <span>
                                                        {item.username}
                                                    </span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover" >
                                                        </lord-icon>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="py-2 border border-white text-center">
                                                <div className="flex items-center justify-center">

                                                    <span>
                                                        {item.password}
                                                    </span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover" >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2 border border-white text-center">
                                                <span className="cursor-pointer mx-1" onClick={() => { editPassword(item.id) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/gwlusjdu.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </span>
                                                <span className="cursor-pointer mx-1" onClick={() => { deletePassword(item.id) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover" >
                                                    </lord-icon>
                                                </span>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>}
                </div>
            </div>
        </>
    )
}
export default Manager