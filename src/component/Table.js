import React, { useState, useEffect } from 'react';
export default function Table(props) {
    const [data, update] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => update(json))
    }, [])
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>{props.c1}</th>
                        <th>{props.c2}</th>
                        <th>{props.c3}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(dta => (
                        <tr key={dta.id}>
                            <td>{dta.id}</td>
                            <td>{dta.title}</td>
                            <td>{dta.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}