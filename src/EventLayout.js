import React from "react";
import PropTypes from "prop-types";
import {Container, Text} from "@yosmy/ui";
import {format} from "@yosmy/date";

const EventLayout = ({label, involved, extra, date}) => {
    return <Container
        row
        flow="row"
        margin={{
            top: 4
        }}
    >
        <Container
            cell
            width={300}
        >
            {label}
        </Container>
        <Container
            cell
            width={600}
            align={{
                cross: "center"
            }}
            margin={{
                left: 1
            }}
        >
            {Array.isArray(involved)
                ? involved.map((subject, i) => {
                    return <subject.type
                        key={i}
                        {...subject.props}
                    />;
                })
                : involved
            }
        </Container>
        <Container
            cell
            width={300}
            margin={{
                left: 1
            }}
        >
            {extra}
        </Container>
        <Container
            cell
            margin={{
                left: 1
            }}
            width={300}
        >
            <Text>{format(date * 1000, "D [de] MMMM, YYYY, h:mm:ss A")}</Text>
        </Container>
    </Container>
};

EventLayout.propTypes = {
    label: PropTypes.object.isRequired,
    involved: PropTypes.arrayOf(PropTypes.object.isRequired),
    extra: PropTypes.object.isRequired,
    date: PropTypes.number.isRequired,
};

export default EventLayout;