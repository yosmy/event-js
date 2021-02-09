import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {Text} from "@yosmy/ui";
import theme from "../Theme";

import Event from '../Event';
import EventInvolved from '../EventInvolved';

export default {
  title: 'Event',
  component: Event,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <Event
            label="A label"
            involved={[
                <EventInvolved label="Involved 1">
                    <Text>The content 1</Text>
                </EventInvolved>,
                <EventInvolved label="Involved 2">
                    <Text>The content 2</Text>
                </EventInvolved>
            ]}
            extra={{
                extra1: "Extra 1",
                extra2: "Extra 2",
            }}
            date={1613870434}
        />
    </ThemeProvider>
};

export const Default = Template.bind({});

