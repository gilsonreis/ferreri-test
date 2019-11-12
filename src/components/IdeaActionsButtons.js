import React from 'react';

export default class IdeaActionsButtons extends React.Component {

    constructor(props, context) {
		super(props, context);
		this.state = {

        };

        this.PrepareEdit = this.PrepareEdit.bind(this);
        this.PrepareDelete = this.PrepareDelete.bind(this);
    }
    
    PrepareEdit(ev, id){
        ev.preventDefault();
        this.props.updateIdeaId(id, 'edit');
    }

    PrepareDelete(ev, id){
        ev.preventDefault();
        if(window.confirm("Are you sure?")) {
            this.props.updateIdeaId(id, 'delete');
        }
    }

    render() {
        return (
            <div className="actions_butons" key={this.props.id}>
                <a href={"/edit/" + this.props.id} className="btn btn-edit" onClick={(ev, id) => this.PrepareEdit(ev, this.props.id)}>Edit</a> 
                <a href={"/delete/" + this.props.id} className="btn btn-delete" onClick={(ev, id) => this.PrepareDelete(ev, this.props.id)}>Delete</a> 
            </div>
        );
    }
}