import React from 'react'
import { HeaderButton, HeaderDates, HeaderGroup, HeaderWrapper} from './HeaderElementStyles'
import DownloadIcon from './Frame.svg'
import UpdateIcon from './Vector.svg'
import styled from 'styled-components'

const DownloadButton = styled(HeaderButton)`
& p { color: #3C6DFF;}
`

export const HeaderElement = () => {
  return (
    <HeaderWrapper>
    <h1>AI Prediction</h1>
    <HeaderGroup>
    <HeaderDates>
      <p>Last update: 13.03.2024</p>
      <p>Date added to the platform: 17.12.2023</p>
    </HeaderDates>
    <HeaderButton><img src= {UpdateIcon} /><p>Update</p></HeaderButton>
    <DownloadButton><img src= {DownloadIcon} /><p>Download</p></DownloadButton>
    </HeaderGroup>
    </HeaderWrapper>
  )
}
