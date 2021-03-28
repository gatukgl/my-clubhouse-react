import { Link, withRouter } from 'react-router-dom'

export const RoomCreationButton = withRouter(props => {
  const onButtonClicked = () => {
    props.history.replace('/create-room')
    props.history.goBack()
  }

  return (
    <div className="my-4">
      <button className="btn btn-primary" onClick={onButtonClicked}>
        Helloworld
      </button>
      <Link
        to="/create-room"
        className="btn btn-primary btn-md active d-block mx-auto"
        role="button"
        aria-pressed="true"
        style={{
          borderRadius: '25px',
          backgroundColor: '#55ab68',
          borderColor: '#55ab68',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <i className="fas fa-plus mr-2"></i>
        Start a room
      </Link>
    </div>
  )
})
