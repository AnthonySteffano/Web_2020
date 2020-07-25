import React, { Component } from 'react'

import PropsFilho from './PropsFilho'

export default class PropsPai extends Component {
    render(){
        return(
            <div>
                <PropsFilho nome="anthony" curso="SI" cidade="caucaia"/>
            </div>
        )
    }
}
