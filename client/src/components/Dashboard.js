import React, {useEffect, useState }from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const Dashboard = () => {
    const [lists,setLists] = useState ([])
    const [search, setSearch] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllArt')
        .then((res)=>{
            setLists(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className=" p-5">
            <div className="d-flex justify-content-between">
                <h2 className='fs-1 fw-lighter light'>Artists</h2>
                <Link  className=""to={`/art`}>Add New</Link>
            </div>
            <form className='d-flex justify-content-end me-3'>
                <input onChange= {e=>setSearch(e.target.value)} type="text" placeholder="name"></input>
                <input type="submit" value="Search"></input>
            </form>
            <table className="table caption-top table-striped">
                <thead className='table-light'>
                    <tr>
                        <th className='fs-3 fw-lighter light'scope="col">Artist</th>
                        <th className='fs-3 fw-lighter light'scope="col">Specialty</th>
                        <th className=' fs-3 fw-lighter light'scope="col">Actions</th>
                        <th className='f-3fw-lighter light'scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {lists.filter(art=>
                        art.name.toLowerCase().includes(search)).map((art,i)=> {
                        return <tr className='table-success fs-5 align-middle' key={i}>
                                <td>{art.name}</td>
                                <td>{art.specialty}</td>

                                <td><Link to={`/artdetails/${art._id}`}>details</Link></td>
                                <td><Link to={`/editart/${art._id}`}>Edit</Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard;