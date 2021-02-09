import React from "react";
import PropTypes from "prop-types";
import {Json} from "@yosmy/ui";

const FallbackEvent = ({ui, labels, involved, extra, date}) => {
    labels = labels.map((label) => {
        return label.replace("yosmy.", "")
    });

    return <ui.layout
        label={<Json>{labels}</Json>}
        involved={[
            <Json>{involved}</Json>
        ]}
        extra={<Json>{extra}</Json>}
        date={date}
    />
};

FallbackEvent.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired
    }).isRequired,
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    involved: PropTypes.object,
    extra: PropTypes.object,
    date: PropTypes.number.isRequired,
};

export default FallbackEvent;