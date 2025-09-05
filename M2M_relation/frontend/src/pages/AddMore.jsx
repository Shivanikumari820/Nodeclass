import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const AddMore = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async () => {
        let api = "http://localhost:8000/booksave";
        const response = await axios.post(api, { bookname: name, price: price, id: id });
        console.log(response);
    }

    return (
        <>
            <h1>Add more Book</h1>
            Enter Book name: <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br />
            Enter price: <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} /><br />
            <button onClick={handleSubmit}>save</button>
        </>
    )
}

export default AddMore;
