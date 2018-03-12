import React from "react";
import styled from "styled-components";
import Header from "../Products/components/Header/Header";
import User from "../../img/user.jpg";

import { CardStyles } from "../../styles/card";

const SettingsSection = styled.section`
  background-color: #f2f2f2;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const SettingsContent = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

/* Settings Item */

const SettingsItem = styled.section`
  padding: 2rem 0;
  margin-bottom: 2rem;
  ${CardStyles};
`;

const SettingsItemHeading = styled.h3`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SettingsItemDescription = styled.p`
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

/* Picture Info */

const PictureInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Picture = styled.img`
  height: 128px;
  width: 128px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  @media (min-width: 576px) {
    height: 64px;
    width: 64px;
    margin: 0;
  }
`;

const Button = styled.button`
  background-color: #05b344;
  padding: 0.2rem 2rem;
  border: 0;
  min-height: 32px;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  border-radius: 2px;
  width: 100%;
  @media (min-width: 576px) {
    width: auto;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  display: block;
  text-transform: capitalize;
  padding: 4px;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 32px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  padding: 0;
  text-indent: 6px;
  width: 100%;
  border-radius: 2px;
`;

/* Account Info */

const AccountInfo = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Email Email" "Username Username" "FirstName FirstName" "LastName LastName";
  grid-gap: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 576px) {
    grid-template-areas: "Email Email" "Username Username" "FirstName LastName";
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/* Shipping Info */

const ShippingInfo = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "Adress Adress" "City City" "Postal Postal" "State State" "Country Country";
  grid-gap: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 576px) {
    grid-template-areas: "Adress Adress" "City Postal" "State Country";
  }
`;

const EmailArea = styled.div`
  grid-area: Email;
`;
const UsernameArea = styled.div`
  grid-area: Username;
`;
const FirstNameArea = styled.div`
  grid-area: FirstName;
`;
const LastNameArea = styled.div`
  grid-area: LastName;
`;

const AdressArea = styled.div`
  grid-area: Adress;
`;
const CityArea = styled.div`
  grid-area: City;
`;
const PostalArea = styled.div`
  grid-area: Postal;
`;
const StateArea = styled.div`
  grid-area: State;
`;

const CountryArea = styled.div`
  grid-area: Country;
`;

const Settings = () => {
  return (
    <SettingsSection>
      <Header />
      <SettingsContent>
        <Container>
          <Heading>Account settings</Heading>
          <SettingsItemHeading>Profile picture</SettingsItemHeading>
          <SettingsItemDescription>
            Edit your profile picture
          </SettingsItemDescription>
          <SettingsItem>
            <PictureInfo>
              <Picture src={User} />
              <div>
                <Button>Upload new picture</Button>
              </div>
            </PictureInfo>
          </SettingsItem>
          <SettingsItemHeading>Account information</SettingsItemHeading>
          <SettingsItemDescription>
            Manage your account information.
          </SettingsItemDescription>
          <SettingsItem>
            <AccountInfo>
              <EmailArea>
                <Label>Email</Label>
                <Input type="text" placeholder="test@gmail.com" />
              </EmailArea>
              <UsernameArea>
                <Label>Username</Label>
                <Input type="text" placeholder="test" />
              </UsernameArea>
              <FirstNameArea>
                <Label>First name</Label>
                <Input type="text" placeholder="test" />
              </FirstNameArea>
              <LastNameArea>
                <Label>Last name</Label>
                <Input type="text" placeholder="test" />
              </LastNameArea>
            </AccountInfo>
            <ButtonContainer>
              <Button>Save</Button>
            </ButtonContainer>
          </SettingsItem>
          <SettingsItemHeading>Shipping information</SettingsItemHeading>
          <SettingsItemDescription>
            Manage your shipping information.
          </SettingsItemDescription>
          <SettingsItem>
            <ShippingInfo>
              <AdressArea>
                <Label>Street Adress</Label>
                <Input type="text" placeholder="test@gmail.com" />
              </AdressArea>
              <CityArea>
                <Label>City</Label>
                <Input type="text" placeholder="test" />
              </CityArea>
              <PostalArea>
                <Label>Postal code</Label>
                <Input type="text" placeholder="test" />
              </PostalArea>
              <StateArea>
                <Label>State</Label>
                <Input type="text" placeholder="test" />
              </StateArea>
              <CountryArea>
                <Label>Country</Label>
                <Input type="text" placeholder="test" />
              </CountryArea>
            </ShippingInfo>
            <ButtonContainer>
              <Button>Save</Button>
            </ButtonContainer>
          </SettingsItem>
        </Container>
      </SettingsContent>
    </SettingsSection>
  );
};

export default Settings;
