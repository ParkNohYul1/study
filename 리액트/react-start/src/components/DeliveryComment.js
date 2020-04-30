import React from 'react'

const DeliveryComment = (props) => {
  return (
    <div className="delivery-comment">
      <div className="commentary">
        <img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
        <span
          className={['rating-stars', props.rating.score]}
          ariaLabel={props.rating.label}
        ></span>
        <strong className="user-name">{props.user.name}</strong>
        <time className="comment-date">{props.user.createdAt}</time>
        <p className="comment-content">{props.user.content}</p>
        <div className="reply-comment">
          {/* ... */}
        </div>
      </div>
    </div>
  )
}

export default DeliveryComment
