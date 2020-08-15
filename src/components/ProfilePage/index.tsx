import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container >
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                {/* <EditButton outlined >Editar perfil</EditButton> */}

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
                      Nascido em 21 de julho de 2002
                  </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong>100</strong>
                    </span>
                    <span>
                        <strong>100</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    );
}

export default ProfilePage;