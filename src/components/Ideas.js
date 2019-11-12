import React from 'react';
import Idea from "./Idea";
import {getAll, remove, save} from '../services/IdeaService';
import IdeaForm from './IdeaForm';
import NotificationComponent from './NotificationComponent';

export default class Ideas extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            ideas: [],
            id: '',
            showNotification: false,
            message: ''
        };

        this.editOrDelete = this.editOrDelete.bind(this);
        this.CreateNewIdea = this.CreateNewIdea.bind(this);
    }

    componentDidMount(){
        getAll().then(response => {
            this.setState({ideas: response.data});
        }).catch(error => {
            alert("Error on loading ideas: " + error.message);
        });
    }

    editOrDelete(id, action, idea) {
        let items = this.state.ideas;
        if(action === 'edit') {
            this.setState({id: id});

            if(typeof idea !== 'undefined') {
                let i = 0;
                while(i < items.length) {
                    if (items[i]._id === idea._id) break;
                    i++;
                }

                items.splice(i, 1, idea);
                console.log(items);

                this.setState({
                    ideas: items,
                    showNotification: true,
                    message: "Idea has been updated successfuly"
                });
                
                console.log(this.state.ideas);
            }
        } else {
            remove(id).then(() => {
                for(let i = 0; i < items.length; i++) {
                    if (items[i]._id === id) {
                        items.splice(i, 1);
                    }
                }

                this.setState({
                    ideas: items,
                    showNotification: true,
                    message: "Idea has been removed successfuly"
                });
                
                
            }).catch(error => {
                alert("Error on remove idea: " + error.message);
            });
        }
    }

    CreateNewIdea() {
        let Idea = {
            title: '',
            content: ''
        };

        save(Idea).then(response => {
            let items = this.state.ideas;
            items.unshift(response.data);

            this.setState({
                id: response.data._id,
                ideas: items,
                showNotification: true,
                message: "Idea has been created successfuly"
            });
        });
    }

    render() {
        
        return (            
            <div>
                {this.state.showNotification && <NotificationComponent show={this.state.showNotification} message={this.state.message} />}
                <div style={{display: 'block'}}>
                    <button className="btn btn-new" onClick={this.CreateNewIdea}>Create New Idea</button>
                </div>
                <div className="ideas">
                    {this.state.ideas.map(idea => {
                        if(this.state.id === idea._id) { 
                            return (<IdeaForm editOrDelete={this.editOrDelete} key={idea._id} id={idea._id} title={idea.title} content={idea.content}/>);                        
                        } else {
                            return (<Idea editOrDelete={this.editOrDelete} id={idea._id} key={idea._id} title={idea.title} content={idea.content} />);                       
                        }
                    })}
                </div>
            </div>
        );
    }
}