import React from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  return (
    <Wrapper>
      {/* button container */}
      <ButtonContainer>
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </ButtonContainer>
      {/* input container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to ?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
      </SavedPlaces>
      {/* saved palces */}
      {/* confirm location */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img`
`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2`;
//items-center stop the strech out
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center 
`;

const Circle = tw.img`
h-2.5
`;

const Line = tw.img`
h-10
`;
const Square = tw.img`
h-3
`;

const InputBoxes = tw.div`
flex flex-col flex-1`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`;
const StartIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full
`;
