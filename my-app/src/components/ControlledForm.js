import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             category: 'website',
             comments: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id="id-name"
                        name="name"
                        type="text"
                    />
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select
                            name='category'
                            id='id-category'
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
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
                            value={this.state.comments}
                            onChange={this.handleCommentsChange}
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm