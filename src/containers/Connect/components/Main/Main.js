import React from "react";


const Main = () => {
  return (
    <MainSection>
      <MainContent>
        <Container>
          <SocialCardContainer>
            <Heading>Connect to calculate your influencer score!</Heading>
            <SocialCard
              icon="facebook"
              buttonBackground="facebook"
              text="connect your facebook account"
              buttonText="connect"
            />
            <SocialCard
              icon="instagram"
              buttonBackground="instagram"
              text="connect your instagram account"
              buttonText="connect"
            />
          </SocialCardContainer>
        </Container>
      </MainContent>
    </MainSection>
  );
};

export default Main;
