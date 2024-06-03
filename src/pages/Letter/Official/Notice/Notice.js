import React from 'react'
import './Notice.scss'

const Notice = () => {
  return (
    <div className='notice-main'>
      <img src={require('../../../../assets/images/privateletter/noletter.png')} alt='暂无联系人' />
    </div>
  )
}

export default Notice