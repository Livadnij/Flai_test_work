import { HeaderElement } from "./components/aIPredictionHeader/HeaderElement";
import { ArtistInfoElement } from "./components/artistInfo/ArtistInfoElement";
import { ChatElement } from "./components/chatRightPanel/ChatElement";
import { GrowthElement } from "./components/growth/GrowthElement";
import { RecommendationsElement } from "./components/recommendations/RecommendationsElement";
import { RelatedSoundsElement } from "./components/relatedSounds/RelatedSoundsElement";
import { SidePanelElement } from "./components/sidePanel/SidePanelElement";
import { SoundAudienceElement } from "./components/soundAudience/SoundAudienceElement";
import { BodyElement, Wrapper } from "./components/styles/GlobalStyle";

function App() {

  return (
    <Wrapper>
      <SidePanelElement/>
      <BodyElement>
      <HeaderElement/>
      <ArtistInfoElement/>
      <GrowthElement/>
      <SoundAudienceElement/>
      <RelatedSoundsElement/>
      <RecommendationsElement/>
      </BodyElement>
      <ChatElement/>
    </Wrapper>
  );
}

export default App;
