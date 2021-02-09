import React from "react";
import {Container, Text} from "@yosmy/ui";

const EventInvolved = ({label, children}) => {
    return <Container
        flow="row"
        align={{
            main: "flex-start",
            cross: "center"
        }}
    >
        <Text
            margin={{
                right: 1
            }}
        >
            {label}:
        </Text>
        {children}
    </Container>
}

export default EventInvolved;