"use client"

import * as React from "react";

class Profile extends React.Component {
    constructor(){
        super();
        this.state = {userName:"John"};
    }
    
    componentDidMount(){
        console.log("bienvenue")
    }

    componentDidUpdate(){
        console.log ("vous avez fait caca")
    }
    
    render(){
        return (
            <div>
                <h1>Profile</h1>

                <p>
                    Profil de {this.state.userName}
                </p>                    
                    <button onClick={()=>this.setState({userName:"Jane"})}>
                        Changer de caca
                    </button>
            </div>
        );

    }
}

export default Profile;