import React from 'react';
import IdeaActionsButtons from './IdeaActionsButtons';

export default class Idea extends React.Component {

    constructor(props, context) {
		super(props, context);
        this.updateIdeaId = this.updateIdeaId.bind(this);
    }

    updateIdeaId(id, action) {
        this.props.editOrDelete(id, action);
    }

    render() {
        return (
            <div className="idea" key={this.props.id}>
                <IdeaActionsButtons updateIdeaId={this.updateIdeaId} id={this.props.id}/>
                <h4>{this.props.title}</h4>
                <p>{this.props.content}</p>
            </div>
        );
    }
}