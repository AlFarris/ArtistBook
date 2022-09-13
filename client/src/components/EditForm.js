import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sage from "../images/sage.jpeg";
const EditForm = () => {
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getArtById/${id}`)
        .then((res)=>{
        console.log(res.data);
        setName(res.data.art.name);
        setStory(res.data.art.story);
        setSpecialty(res.data.art.specialty);
        setArtLink(res.data.art.artLink);
        }).catch(()=>{

        })
    },[])

    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [story, setStory] = useState('');
    const [artLink, setArtLink] = useState('');
    const [errors, setErrors] = useState({});



    const navigate = useNavigate()

    const editHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateArtById/${id}`,{
            name,
            specialty,
            story,
            artLink
        })
        .then((res)=>{
            navigate('/')
        }).catch((err)=>{
            console.log("error is ",err)
            setErrors(err.response.data.error)
        })
    }
    const handleMouseEnter = (e) => {
        e.target.style.background ='green';
    };
    const handleMouseLeave = (e) =>{
        e.target.style.background ='#61dafb';
    };

    return (
        <>
        <div className="m-5 p-5 bg " style={{backgroundImage: `url(${Sage})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
            <div className="no-r p-3">
                <h2 className="m-4 fs-1 fw-lighter light">Share your art here!</h2>
            </div>
            <div className="col  mx-auto">
                <form className='form-w 'onSubmit={editHandler}>
                    <div className='mb-3'>
                        <label className="form-label">Artist: </label>
                        <input className="form-control" type="text" value={name} onChange={ (e)=> setName(e.target.value)} />
                        {errors.name && <span className="text-danger"> {errors.name.message}</span>} <br></br>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Specialty: </label>
                        <input className="form-control" type="text" value={specialty} onChange={ (e)=> setSpecialty(e.target.value)} />
                        {errors.name && <span className="text-danger"> {errors.name.message}</span>} <br></br>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Share a little about yourself: </label>
                        <input className="form-control" type="text-area" value={story} onChange={ (e)=> setStory(e.target.value)} />
                        {errors.name && <span className="text-danger"> {errors.name.message}</span>} <br></br>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Website: </label>
                        <input className="form-control" type="text-area" value={artLink} onChange={ (e)=> setArtLink(e.target.value)} />
                        {errors.name && <span className="text-danger"> {errors.name.message}</span>} <br></br>
                    </div>
                    <button onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} className="btn btn-info mt-5">Add Art</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditForm;