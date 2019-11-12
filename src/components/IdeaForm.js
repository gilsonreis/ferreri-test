import React from 'react';
import {save} from '../services/IdeaService';
import IdeaActionsButtons from './IdeaActionsButtons';

export default class IdeaForm extends React.Component {

    constructor(props, context) {
		super(props, context);
		this.state = {
            title: this.props.title,
            content: this.props.content,
            id: this.props.id
        };

        this.handleChange = this.handleChange.bind(this);
        this.saveIdea = this.saveIdea.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
	}

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' || target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    saveIdea() {
        let id = this.state.id;
        let Idea = {
            title: this.state.title,
            content: this.state.content
        };

        save(Idea, id).then(response => {
            this.props.editOrDelete('', 'edit', response.data);

        });
    }

    cancelSave() {
        if(window.confirm("Are you sure? \n\nAll modification will be lost!")){
            this.props.editOrDelete('', 'edit');
        }
    }

    render() {
        return (
            <div className="form">
                <IdeaActionsButtons id={this.state.id}/>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="hidden" name="id" id="id" value={this.state.id || ''} />
                    <input type="text" name="title" id="title" placeholder="Enter a title of idea" value={this.state.title || ''} onChange={this.handleChange} />
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" placeholder="Describe about your idea here ... " value={this.state.content || ''} onChange={this.handleChange}></textarea>
                    <button type="button" className="btn btn-save" onClick={this.saveIdea}>Save</button>
                    <button type="button" className="btn btn-cancel" onClick={this.cancelSave}>Cancel</button>
                </form>
            </div>
        );
    }
}