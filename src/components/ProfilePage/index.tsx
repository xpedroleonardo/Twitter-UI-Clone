import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
    return (
        <Container >
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined >Editar perfil</EditButton>

                <h1>Pedro Leonardo</h1>
                <h2>@xpedroleonardo</h2>


                <p>Developer</p>

                <ul>
                    <li>
                        <LocationIcon />
                      São Paulo, Brasil
                  </li>
                    <li>
                        <CakeIcon />
                      Nascido(a) em 04 de janeiro
                  </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>100</strong>
                    </span>
                    <span>
                        <strong>100</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
}

export default ProfilePage;