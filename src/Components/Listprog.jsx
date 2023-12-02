import React from "react";
import PrincipalPage from "./PrincipalPage";

export default class listprogram extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                {this.props.listprogram((program) =>{
                    <PrincipalPage parraf={program.nombre} />
                })
                }
            </>
        )
    }
}

