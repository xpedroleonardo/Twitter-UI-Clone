import React from 'react';

import {
    Container, Topside, Logo, MenuButton, HomeIcon, HashtagIcon, BellIcon, EmailIcon,
    SaveIcon, ListIcon, ProfileIcon, DotsIcon, Botside, Avatar, ProfileData, ExitIcon
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <HashtagIcon />
                    <span>Explorar</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <SaveIcon />
                    <span>Itens salvos</span>
                </MenuButton>

                <MenuButton>
                    <ListIcon />
                    <span>Listas</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <MenuButton>
                    <DotsIcon />
                    <span>Mais</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>

            </Topside>

            <Botside>
                <Avatar />

                <ProfileData>
                    <strong>Pedro Leonardo</strong>
                    <span>@xpedroleonardo</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    );
}

export default MenuBar;