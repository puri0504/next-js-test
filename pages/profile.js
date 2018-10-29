import {withRouter} from 'next/router'

const Profile = withRouter((props) => (
  <div>
    <h1>{props.router.query.user}</h1>
    <div>Contact page</div>


  </div>
))

export default Profile