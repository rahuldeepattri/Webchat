import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Header = ({ closeWebchat, preferences, logoStyle, isSpeaking, toggleSpeaking}) => (
  <div
    className='RecastAppHeader CaiAppHeader'
    style={{
      color: preferences.complementaryColor,
      backgroundColor: preferences.accentColor,
    }}
  >
    <img className='RecastAppHeader--logo CaiAppHeader--logo' src={preferences.headerLogo} style={logoStyle} />

    <div className='RecastAppHeader--title CaiAppHeader--title'>{preferences.headerTitle}</div>
    <div className='RecastAppHeader--btn CaiAppHeader--speak' onClick={toggleSpeaking}>
    {(!isSpeaking
        ?<div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAACNFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aZzMiAAAAu3RSTlMAJQj5BPsTqlUBPOzC8DYCy/7p1Ar2472lCQ4yGIQD6ywS+uDlZKdKTxHa5M/4ltkVoCQFKc7yM/XTGgeOpCNHLdLcYA1Qt37Bxurv0Ayx1XPfymirCzT9Xe1NkA/8vh7HhhlxBq+556mKKM2u8Y9wlNd1uFaZN1ue5mVGiSdLb7IXvJ2ig0VpjW70VDUWu1k6oYIgxWNESe6MKrBO8xC1U3e6Od6/PoHESItsUveVFFc4n4Bhhcjik6ySRU/z0AAAA4RJREFUaN7tmGdbE0EQgBdIkBggtNClFxFp0qUjoAIWlCYCCoq994699957773NnxNvLs+TCXtH9nL37eZb3sxzb7K3ZXYYM8MMM8wwwwwz9AxLbarhjvsZMFDkb6xjXR6MRZGxkikgxSVDJUtREnLN5ydNVv4qGyUQbPNNYauepPLtfNny3TfHb1CTfMpAiT3Ql2UQC6oSdrMHLfnaHVUjMIGEfUSJ1U+rI2oVUEncm5NNHjk5EWi5otERHwxUEroXoLXOI2uW/FdmaHIEhgGVFHf8/+i87DE1SjHtmBZHYiV4SELxc7LHb25G7MwRdyybBp6SbhlMr+L+lTPCDr90GCdJcnmrae5npJGijpTVMF7CEs4iCac7zUp5goWKORKSgSdh2VZ5wJJI+gGkQ+oP9a/PDnKLzBDgS9hsme2jY+vFeD3rfAAq4S5JwqUDHRbyhAakykulKQvUg2wrJWkId/MOr3dKjpmVICJhmxAuIlBeQTVKb+MniEkuOJEedIcOfImNCpIhEJSwfKSvCLyIU7uQP1hOYUm5PIt5L6WOK1kBwhK2VaI9pKibiqmnuJIYDZI7iJvJDoFsLVcSrUHSh/ibO+tC1smVBGiQFCKOJTCCM7FdARok7LaEwwhrl1iBfhI8MdMJuy6xXP0kOFuWEPZUYm36SUYknEbYBqwm9JMclvAHTr2ap59kEOsJwo5yhtCXKcwWSPg5YXMlFs2V/NIgsVVI+AVHXKDbtlKLeA+BZRKbo9sG2Yt4mztLRXacv9VXiEuKEJOyKAHZCf6h9UNYYrFLNCCOU3VnKhy/y0Ul8tHRQuAWhOcVzt/hBkHJdqSLCcSfmqbYNpgXGy4iKcfsgCPkGbjeSlWKu11ryryXtCDM4g3hTvW7Ycot78pU9h44c8tVwZwTKri77QqSwFxkgyTdgae4tV+srC/J5Ups92T2kmTvB5X1LngJYuwG8N4Iq0G6UI/rnGuvhbZEeoPFbcM6rMfFlLFIJL00U760PNLliu1qPX2leXGtmLdDn2YBy1k/9jkmiqaNoiO6WKe2BysOetLnoEkP7Vpfu+te+2fCBg57i46N/VolE7eiWEkeSq760lT7qy5xvEZHRLxx7UG2GXg7v66NTlYo79+RFgN7to/RMfDFyMbwIZScNrT73CV1UwuijG2klzcCtPsxg8NSf5eZYYYZZphhhhnexz8nXQFJ3EFXXQAAAABJRU5ErkJggg=="/>
         </div>
      
        :<div>
          <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABQVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+uCSUUAAAAanRSTlMATgYm5YgBFtP5EAMraQWJkrciHBKj2kqGzT8P/PR5Ff3SNwfu12oZqJ3meFbn8S0IZOnKKpab9gLvWTTD5L/6J/PtT8jV3s5l7G6gHo/W21oMsegfTdQ+dcK84FPjldj1XDpRoVST98shiOgtjgAAAUlJREFUKM+lk1dzwkAMhBVwwQGHXgOEACG999577733/f8/IOKMg8nAveQeVtJ8Mzd78prI1ElySvDIuO6pz8O6jLcMzEdkfAHRBvePDbKElrFan/dPullNrGtOnrDxBOamiLwbiDv8F0GkvYZ5aFYww2UHN873Qac8Yq08DGOU9TiTi9S+v/CFN+6HRjDLJYg7cvl7ABhNFv/+zPkYjKOX9QoPpEIcm39AZdCHIOslrklBDX9HkoEbMaGPBNTwW2yXvWNaaLGKYVj+uVABi6wu7pUqt/xneH97WCkPOLWtVXBlvy/Y5N6HA3KpihNbPItdbo9wYn/eLgtvnQuexDMP+8jaS/N2C7xmnAl/T7xb7RCp36VqgTJeilv337O/PBSvIwWJP/mLwt84nxeptBGS5DeNgDTf8Eny39aOjs5/cL6/JPv9dJN+ANqtVUsot5qjAAAAAElFTkSuQmCC"/>
        </div>
    )}
</div>
    <div className='RecastAppHeader--btn CaiAppHeader--btn' onClick={closeWebchat}>
      <img src='https://cdn.cai.tools.sap/webchat/close.svg' />
    </div>
  </div>
)

Header.propTypes = {
  closeWebchat: PropTypes.func,
  preferences: PropTypes.object,
  logoStyle: PropTypes.object,
  isSpeaking: PropTypes.bool,
  toggleSpeaking: PropTypes.func,
}

export default Header
