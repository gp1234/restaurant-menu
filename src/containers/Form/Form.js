import React, {Component} from 'react'
import Input from '../../components/UI/Input/input'
import Button from '../../components/UI/Button/Button'
import './Form.css';


class form extends Component {
    onSubmitHandler = () => {
        this.props.history.push('/')
    }
    render()
    {
        return (
            <div className="formContainer">
                <h1 className="title-form">Contact Us Now!</h1>
                <form className="form">
                    <Input title={"name"} elementConfig={ {name: 'name' }} elementType={"input"}/>
                   <Input title={"LastName"} elementConfig={ {name: 'LastName' }} elementType={"input"}/>
                    <Input title={"Comments"} elementConfig={ {name: 'Comments' }} elementType={"textarea"}/> 
                    <Button btnType="green" clicked={this.onSubmitHandler}>Send!</Button>
                </form>
        
            </div>)
    }

}   

export default form;