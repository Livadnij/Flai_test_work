import React from 'react'
import { IconButton, MenuBlock, MenuElement, ProfileButton, SidePanelBox } from './SidePanelStyles'
import Vector from './Vector.svg'
import VectorBell from './VectorBell.svg'
import VectorSettings from './VectorSettings.svg'


export const SidePanelElement = () => {
  return (
    <SidePanelBox>
      <div>
      <MenuElement>
      <img src= {Vector} />
      </MenuElement>
      </div>
      <MenuBlock>
      <IconButton>
        <img src= {VectorBell} />
      </IconButton>
      <IconButton>
        <img src= {VectorSettings} />
      </IconButton>
      <ProfileButton/>
      </MenuBlock>
    </SidePanelBox>
  )
}
