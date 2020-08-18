import React from 'react';

import {
    Container,
    Retweeted,
    RWIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RWIcon />
            Você retweetou
        </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Rocketseat</strong>
                        <span>@rocketseat</span>
                        <Dot />
                        <time>15 de ago</time>
                    </Header>

                    <Description>Foguete não tem ré <span role="img" aria-label="Rocket">🚀</span></Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            25
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;