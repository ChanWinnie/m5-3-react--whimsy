import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import Stat from "./Stat";
import { TweetContext } from "../TweetContext";

const Tweet = () => {
  const { tweetContents, displayName, username, avatarSrc, isRetweetedByCurrentUser, isLikedByCurrentUser, date, numOfLikes, numOfRetweets } = useContext(TweetContext);
  
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <Stat><span>{numOfRetweets}</span> Retweets</Stat>
        <Stat><span>{numOfLikes}</span> Likes</Stat>
      </Stats>
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  color: rgb(101, 119, 134);
  display: flex;
  align-items: center;
  height: 48px;
  & span {
    font-weight: bold;
    color: black;
  }
`;

export default Tweet;
