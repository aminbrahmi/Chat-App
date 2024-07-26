import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ScaleIcon from '../assets/scale.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <img src={ScaleIcon} alt='scale' width='40' />
    </div>
    <div className='channel-list__sidebar__icon2'>
      <img src={LogoutIcon} alt='Logout' width='30'  />
    </div>
  </div>
)

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>SCALE UP</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar/>
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
            />
          )}
          channelPreview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
            />
          )}
          channelPreview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            />
          )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer
