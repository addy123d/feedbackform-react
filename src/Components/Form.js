import React, { Component } from 'react'
import './CSS/todo.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: "",
            email: "",
            age : "",
            phone: "",
            rating: "",
            message: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fullhandler = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }
   
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    agehandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    ratinghandler = (event) => {
        this.setState({
            rating: event.target.value
        })
    }

    messagehandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {

        // Create Validation !
        // Destructure all properties !
        let {fullName, email, age, phone, rating, message} = this.state;

        if(fullName !== "" && email !== "" && email.includes("@") && age !== "" && phone !== "" && phone.length === 10 && rating !== "" && message !== ""){
            // Ensures that no field is empty !
            alert(`${this.state.fullName} registered Successfully !!!!`);
            console.log(this.state);
    
            // Reset values after submission !
            this.setState({
                fullName: "",
                email: "",
                age: "",
                phone: "",
                rating: "",
                message: "",
            });
        }else{
            // Throw Validation Error
            alert("Error: Validation Failed");
        }  
     event.preventDefault(); 
    }

    // Reset Event 

    resetForm = () => {
            // Reset whole form!
            this.setState({
                fullName: "",
                email: "",
                age: "",
                phone: "",
                rating: "",
                message: "",
            });
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>FeedBack</h1>
                    <hr width="50%" color="black" size="5px" align="center"></hr>
                    <h3>Please write your feedback below:</h3>
                    <h2>How do you rate your overall experience?</h2>
                    <label>FullName :</label> <input type="text" value={this.state.fullName} onChange={this.fullhandler} placeholder="Full Name" required /><br />
                    <table>
                        <tr>
                            <th class="tab1" ><label>Email :</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." required /></th>
                            <th><label>Age :</label> <input type="number" value={this.state.age} onChange={this.agehandler} placeholder="Age..." required /></th><br />
                            <th class="tab2"><label>Phone :</label> <input type="phone" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone..." required /></th><br />
                    </tr>
                    </table>
                    <label>Rating :</label><select onChange={this.ratinghandler} defaultValue="Select Rating" required>
                        <option defaultValue>Select Rating</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Below Average">Below Average</option>
                        <option value="Poor">Poor</option>
                        <option value="Extraordinary">Extraordinary</option>

                    </select>
                    <br/>
                    <div className='messageBox'>
                        <label>Message :</label>
                        <textarea rows={10} cols={35} value={this.state.message} onChange={this.messagehandler} placeholder="Message..." required ></textarea><br />
                    </div>
                    <input class="buttn" type="submit" value="Submit" />
                    
                </form>
                
                <button class="buttn reset" onClick={this.resetForm}>Reset</button>



            </div>
            
        )
    }
}

export default Form
