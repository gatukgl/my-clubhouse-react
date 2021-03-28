export const Room = props => {
  const detail = props.detail
  return (
    <div
      className="card w-100 mb-4 p-5"
      style={{ height: 'auto', border: 0, borderRadius: '22px' }}
    >
      {/* <!-- title --> */}
      <span className="fs-5">{detail.topic}</span>

      {/* <!-- Moderators --> */}
      <div className="container my-4">
        <div className="row">
          {/* <!-- images --> */}
          <div className="col-3" style={{ paddingLeft: 0 }}>
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block rounded-full ring-2 ring-white"
                style={{ borderRadius: '40%', height: '80px', width: '80px' }}
                src={detail.moderators[0].imageUrl}
                alt=""
              />
              <img
                className="inline-block rounded-full ring-2 ring-white"
                style={{ borderRadius: '40%', height: '80px', width: '80px' }}
                src={detail.moderators[1].imageUrl}
                alt=""
              />
            </div>
          </div>

          {/* <!-- names and number of attendees--> */}
          <div className="col fs-5">
            <div>
              <span>{detail.moderators[0].name}</span>
              <span className="ml-2">💬</span>
            </div>
            <div>
              <span>{detail.moderators[1].name}</span>
              <span className="ml-2">💬</span>
            </div>

            <div className="mt-2" style={{ color: '#999999' }}>
              <span>
                {detail.listenerCount} <i className="fas fa-user"></i>
              </span>
              <span style={{ margin: '0 8px' }}>/</span>
              <span>
                {detail.moderators.length}{' '}
                <i className="fas fa-comment-dots"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
