import React from 'react'
import { ArtistContainer, ArtistInfoBox, ArtistInfoWrapper, BlueButton, Country, DailyCount, GreyButton, KeywordsBox, OfficialArtist, Trending, VideoBox, VideoWrapper } from './ArtistInfoElementStyles'
import PlayButton from './Vector.svg'
import InfoButton from './Info.svg'
import TiktokButton from './tiktok.svg'
import SpotifyButton from './spotify.svg'
import AppleMusicButton from './apple_music.svg'
import AlbumPic from './Group 195112.png'
import AIcon from './icons8-a 1.svg'




export const ArtistInfoElement = () => {
  const songTime = '00:45'
  const songBitrate = '320 bps'
  const country = 'Canada'
  const placeInTheCountry = '05'
  const placeInTheWorld = '43'
  const musicType = 'ORIGINAL'

  return (
    <ArtistInfoWrapper>
      <ArtistInfoBox>
      <ArtistContainer>
      <OfficialArtist>
            <button>
            <img src= {AlbumPic}/>
            </button>
      <div>
        <div>
          <p>Official Artist</p>
           <button>
            <img src= {InfoButton}/>
            </button>
            </div>
            <h1>Khabane Lame</h1>
            <h2>Melodic sound</h2>
            <div><p>Type:</p> <BlueButton> <span>{musicType}</span> </BlueButton></div>
            <div>
            <button>
            <img src= {SpotifyButton}/>
            </button>
            <button>
            <img src= {AppleMusicButton}/>
            </button>
            <button>
            <img src= {TiktokButton}/>
            </button>
            </div>
      </div>
      </OfficialArtist>
      <Trending>
        <div><span>🔥🔥🔥 Trending</span></div>
        <div><p>Duration:</p> <span> {songTime}</span></div>
        <div><p>Bitrate: </p><span>{songBitrate}</span></div>
      </Trending>
      <Country>
      <div><p>Country:</p> <span> {country}</span></div>
      <div><p>Place in the country:</p> <span> {placeInTheCountry}</span></div>
      <div><p>Place in the world:</p> <span> {placeInTheWorld}</span></div>
      <div><GreyButton> <img src={AIcon}/><span>Sound to text</span></GreyButton></div>
      </Country>
      </ArtistContainer>
      <KeywordsBox>
        <p>Keywords:</p>
        <div><p>Whispering breeze</p></div>
        <div><p>Wandering soul</p></div>
        <div><p>Crimson dawn</p></div>
        <div><p>Echoes of silence</p></div>
      </KeywordsBox>
      </ArtistInfoBox>
      <VideoWrapper>
      <VideoBox>
      <p>🙋‍♂️ Videos</p>
      <h1>1.5M</h1>
      <button><img src= {PlayButton}/><p>Watch Videos</p></button>
        </VideoBox>
      <DailyCount>
      <h2>Daily Growth</h2>
      <h1>+100k</h1>
      </DailyCount>
      </VideoWrapper>
    </ArtistInfoWrapper>
  )
}
