const { HelpContainer, Header, NowButton } = require("./styles");

export const Emergency = () => {
    return (
        <HelpContainer>
            <Header>Need a doctor NOW?</Header>
            <NowButton to='./Status'>See available doctors</NowButton>
        </HelpContainer>
    );
}

export default Emergency;