import { Content, Divider, InfoContainer, Label, PhotoArea, PictureContainer, ProfileContainer } from "./styles";

export const ProfilePage = (props) => {
    
    
    return(
        <ProfileContainer>
            <PictureContainer>
                <PhotoArea/>
            </PictureContainer>
            <Divider/>
            <InfoContainer>
                <Label>USER NAME</Label>
                <Content>{props.name}</Content>
                <Label>EMAIL</Label>
                <Content>{props.email}</Content>
            </InfoContainer>

        </ProfileContainer>
    );
}