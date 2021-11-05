import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberLogo>
          <Profile>
            <Name>Emeric Touolac</Name>
            <UserImage src="/images/driver.jpg" />
          </Profile>
        </Header>
        <ActionsButtons>
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionsButtons>
        <Link href="/">
          <InputButton>Where to</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}
//The components
//component : reuse UI element
const Wrapper = tw.div`
flex flex-col  h-screen
`;

const ActionItems = tw.div`
flex-1 p-4`;

const Header = tw.div`
flex justify-between items-center
`;
const UberLogo = tw.img`h-28
`;

const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-sm`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionsButtons = tw.div`
flex
`;
const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition
text-xl
`;

const ActionButtonImg = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
