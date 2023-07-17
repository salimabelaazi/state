import React from "react";
import profilepic from "./oprah-winfrey.jpg"


class Profile extends React.Component {
    constructor(props) {
        console.log("Constructor(props)");
        super(props);
        this.state = {
            count: 0,
            timer: 0,
            interval: null,
            person: {
                fullName: "Oprah Winfrey",
                bio: "one of the richest women in the entertainment industry",
                imgSrc: profilepic,
                profession: "co-ancho"
            }

        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }



    componentDidMount() {
        console.log("componentDidMount()");
        this.setState({
            interval: setInterval(() => {

                this.setState({ timer: this.state.timer + 1 })
            }, 1000)
        })
    }
    componentDidUpdate() {
        console.log(" componentDidUpdate()");
    }
    componentWillUnmount() {
        console.log("unmount");
        clearInterval(this.state.interval)
    }

    render() {
        console.log("render()");
        return (
            <div>
            
                <h3>Name:{this.state.person.fullName}</h3>
                <h3>Bio:{this.state.person.bio}</h3>
                <img src={this.state.person.imgSrc} alt="profile " />
                <h3>Profession:{this.state.person.profession}</h3>


                <h3>timer: {this.state.timer} </h3>
                </div>
                )

}
}

export default Profile