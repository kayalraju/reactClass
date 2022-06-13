import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function FetchapiData() {
    const [user, setUser] = useState([])

    const getApiData = async () => {
        //const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data=await response.json()
        // console.log(data);
        setUser(await response.json())
    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <div>
            <h1>Fetch Api Data using Use effect hooks</h1>
            <div className='container-fluid'>

                <div className='row'>
                    {
                        user.map((currentdata) => {

                            return (
                                <div className='col-md-4' key={currentdata.id}>
                                    <div className='card cardd'>
                                        <img className='card-img-top' src={currentdata.thumbnailUrl} alt='image' />
                                        <div className='card-body'>
                                            <h4 className='card-title'>city :{currentdata.address.city}</h4>
                                            <h4 className='card-title'>zipcode :{currentdata.address.zipcode}</h4>
                                            <p className='card-text'>  {currentdata.url}</p>
                                            <a href="" className='btn btn-success'>Go someWhere</a>

                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
