import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Sage from "../images/sage.jpeg"


const OneArt = ()=> {
    const{id} = useParams()
    const [art, setArt] = useState({})
    
    const [lists,setLists] = useState ([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getArtById/${id}`)
        .then((res)=>{
            setArt(res.data.art)
        }).catch((err)=>{
            console.log(err)
        })
    },[] )
    const navigate = useNavigate()
    const deleteHandler = (artId) => {
        console.log(art._id)
        axios.delete(`http://localhost:8000/api/deleteArtById/${artId}`)
        .then((res)=>{
            navigate('/')
            const newList = lists.filter((art)=>{
                return art._id !== artId
                
            })
            setLists(newList)
        }).catch((err)=>{
            console.log(err)
        })
    } 
    return (
            <>
            <div className="m-5 p-3 bg " style={{backgroundImage: `url(${Sage})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
                <div className="d-flex justify-content-between">
                    <h2 className='fs-1 fw-lighter light'>Details about: {art.name}</h2>
                </div>
                <div className="d-flex justify-content-end">
                    <button className='d-flex justify-content-end btn btn-light' onClick={()=>deleteHandler(art._id)}>Delete {art.name}</button>
                </div>
            <div className="cursive row  mb-5 p-3">
                <div className="col-7 text-dark fw-bold">
                    <p className="">Specialty:</p>
                    <p>Story:</p>
                    <p>Website:</p>
                </div>
                <div className=" p-2 col-3 text-dark">
                    <p>{art.specialty}</p>
                    <p>{art.story}</p>
                    <p><a href={`${art.artLink}`}target="_blank">{art.artLink}</a></p>
                </div>
            </div>
            </div>
            </>
    );
};

export default OneArt;