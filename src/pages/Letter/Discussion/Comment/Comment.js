import React from 'react'
import './Comment.scss'


const Comment = () => {
  return (
    <div className='comment-main'>
      <img src={require('../../../../assets/images/privateletter/noletter.png')} alt='暂无联系人' />
    </div>
  )
}

export default Comment