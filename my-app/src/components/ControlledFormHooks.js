import React, {useState} from 'react'

function ControlledFormHooks() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, category, comments);
    }

    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id-name">Your Name:</label>
                <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="id-name"
                    name="name"
                    type="text"
                />
                <div>
                    <label htmlFor='id-category'>Query category:</label>
                    <select
                        name='category'
                        id='id-category'
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value="webiste">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'></label>
                    <textarea 
                        id='id-comments' 
                        name="comments"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks