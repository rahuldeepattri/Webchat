import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const MicButton = ({ listenAndConvertToText, preferences, isListening }) => (

//   <div>
//     {(true
//         ? <div>Showing true item</div>     
//         : <div>Never showing false item</div>
//     )}
// </div>
<div
    className='RecastMicButtonContainer CaiMicButtonContainer'>
    {(!isListening
        ?<div
          className='RecastMicButton CaiMicButton'
          onClick={listenAndConvertToText}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
        </div>
      
        :<div
        className='RecastMicButton CaiMicButton'
        onClick={listenAndConvertToText}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/></svg>
      </div>
    )}
</div>
)

MicButton.propTypes = {
  preferences: PropTypes.object,
  listenAndConvertToText: PropTypes.func,
  isListening: PropTypes.bool,
}

export default MicButton
