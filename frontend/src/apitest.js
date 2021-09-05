import React, {useState, useEffect} from 'react'

const Apitest = () => {
    const [posts, setPosts] = useState([]);

    const obj = { page: "1" };
    
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
    };

    useEffect(() => {
        fetch('http://localhost:82/api/questions/_list.php', {method: method, headers: headers, body: body, mode: "cors"})
        .then(res => res.json())
        .then(data => {
            setPosts(data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    },[])

    return (
        <>
        </>
    )
}

export default Apitest