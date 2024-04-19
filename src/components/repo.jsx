import React from 'react'
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const Repo = () => {
    const {name} = useParams();
    const {data, isPending, error} = useFetch("https://api.github.com/repos/tohri-aa/" + name )
  return (
    <div>
        {error && <div> { error }</div>}
        {isPending && <div> loading... </div>}
        {data && (
            <div>
                {data.name}
            </div>    
        )}
    </div>
  )
}

export default Repo