export const NavBar = () => {
  const imageUrl = 'https://www.w3schools.com/w3images/avatar5.png'
  return (
    <div className="float-right my-4 d-flex align-items-center">
      <div
        className="mr-5"
        style={{ display: 'inline-block', fontSize: '2rem' }}
      >
        <a href="#">
          <i className="far fa-calendar-alt" aria-hidden="true"></i>
        </a>
      </div>

      <div style={{ display: 'inline-block' }}>
        <a type="button" href="http://www.google.com">
          <img
            className="rounded-full"
            style={{ width: '40px', height: '40px' }}
            src={imageUrl}
            alt="Profile image"
          />
        </a>
      </div>
    </div>
  )
}
