import React,{Component} from 'react'

export default class Cart extends Component {
    constructor(){
        super()
        this.state={
            burgerAdded:this.props.food.burger

        }
    }
    render(){
    return (
       <View>
           <Text>
           Cart
           </Text></View> 
    )
    }
}
