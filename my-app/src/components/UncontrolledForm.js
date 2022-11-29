import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        id="id-name"
                        name="name"
                        type="text"
                        ref = {this.inputName}
                    />
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select
                            name='category'
                            id='id-category'
                            ref={this.inputCategory}
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
                            ref={this.inputComments}
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm