import React from 'react';

import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    // используем стрелочну функцию чтобы не байндить
    activateEditMode = () => {
        //set state асинхронен
        this.setState ({
            editMode: true
        })
       
    }

    deactivateEditMode = () => {
        //set state асинхронен
        this.setState ({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
        
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate ');
    }

    render() {
        console.log('render ');
        return (
            <div>
                {!this.state.editMode && 
                <div>
                    <span onDoubleClickCapture={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode && 
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}value={this.state.status}></input>
                </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;