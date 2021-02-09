import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout, Text} from "@yosmy/ui";
import theme from "../Theme";

import ListEvents from '../ListEvents';
import Event from '../Event';
import EventInvolved from "../EventInvolved";

export default {
  title: 'ListEvents',
  component: ListEvents,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ListEvents
            ui={{
                layout: EmptyLayout,
                item: ({labels, involved, extra, date}) => {
                    const label = labels[0];

                    involved = [
                        <EventInvolved
                            label="Usuario"
                        >
                            {involved.user}
                        </EventInvolved>
                    ];

                    return <Event
                        label={label}
                        involved={involved}
                        extra={extra}
                        date={date}
                    />
                }
            }}
            criteria={{
                query: null,
                limit: 2
            }}
            onCollect={async () => {
                return {
                    items: [
                        {
                            labels: ["Label 1"],
                            involved: {
                                user: "user-1"
                            },
                            extra: {
                                extra1: "Extra 1"
                            },
                            date: 1613879535
                        }
                    ]
                };
            }}
        />
    </ThemeProvider>
};

export const Default = Template.bind({});

