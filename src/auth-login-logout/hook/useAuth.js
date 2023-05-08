import {connect} from "react-redux";

const useAuth = (props) => {

    console.log(props)
    return props.user

}

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export default connect(mapStateToProps)(useAuth);