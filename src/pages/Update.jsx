import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/home.css';

const Update = () => {
    const { id } = useParams();
    const [data, setData] = useState({ title: "", description: "", status: "" });
    const nav = useNavigate();
    useEffect(() => {
        let getData = async () => {
            let result = await fetch(`https://mcs-intern-backend.onrender.com/api/${id}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            })
            result = await result.json();
            setData({ title: result.title, description: result.description, status: result.status });
        }
        getData();
    }, [])
    const formSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(`https://mcs-intern-backend.onrender.com/api/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json;charset=utf-8"
            }
        })
        result = await result.json();
        nav('/tasks');
    }
    const infoFill = (e) => {
        setData((old) => {
            return {
                ...old,
                [e.target.name]: e.target.value
            }
        })
    }
    return (<>
        <div className='body'>
            <div className='form'>
                <form onSubmit={formSubmit}>
                    <input type='text' value={data.title} name="title" placeholder='Title...' autoComplete='off' className='title' onChange={infoFill} required />
                    <input type='text' value={data.description} className='description' name="description" placeholder='Description...' autoComplete='off' onChange={infoFill} required />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="ACTIVE" onClick={(e) => {
                            setData((old) => {
                                return {
                                    ...old,
                                    [e.target.name]: e.target.value
                                }
                            })
                        }} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
                    </div>
                    <div className='radbtn'>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="COMPLETED" onClick={(e) => {
                                setData((old) => {
                                    return {
                                        ...old,
                                        [e.target.name]: e.target.value
                                    }
                                })
                            }} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Completed</label>
                        </div>
                    </div>
                    <input type='submit' className="btnsubmit" value="Update task" />
                </form>
            </div>
        </div>
    </>
    )
}

export default Update;