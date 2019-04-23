import React, { Component } from 'react'
import axios from 'axios'

class TagForm extends Component {

    state = {
        tag: {
            name: '',
            message: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params)
    }

    handleChange = (event) => {
        const newTag = { ...this.state.tag }
        newTag[event.target.name] = event.target.value
        this.setState({ tag: newTag })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const input = this.state.tag
        const objectId = this.props.match.params.id
        console.log(objectId)
        axios
          .post(`/api/items//person/${objectId}/tag`, input)
          .then(console.log("sent"));

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="name"
                            name="name"
                            value={this.state.tag.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="tag"
                            name="message"
                            value={this.state.tag.message}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TagForm