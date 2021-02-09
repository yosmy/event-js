import React from "react";
import PropTypes from "prop-types";
import {Container, Text, LoaderList, LoaderListMore, LoaderListLoading} from "@yosmy/ui";

const ListEvents = ({
    ui, criteria, onCollect
}) => {
    return <LoaderList
        ui={{
            layout: ({children}) => {
                return <ui.layout>
                    <Container
                        row
                        flow="row"
                    >
                        <Container
                            cell
                            width={300}
                        >
                            <Text>Etiqueta</Text>
                        </Container>
                        <Container
                            cell
                            width={600}
                        >
                            <Text>Involucrados</Text>
                        </Container>
                        <Container
                            cell
                            width={300}
                        >
                            <Text>Extra</Text>
                        </Container>
                        <Container
                            cell
                            width={300}
                        >
                            <Text>Fecha</Text>
                        </Container>
                    </Container>
                    {children}
                </ui.layout>;
            },
            empty: () => {
                return <Text>No hay eventos aún</Text>;
            },
            loading: LoaderListLoading,
            more: LoaderListMore,
            item: ui.item
        }}
        criteria={{
            query: criteria.query,
            limit: criteria.limit
        }}
        onCollect={onCollect}
    />
};

ListEvents.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        item: PropTypes.func.isRequired,
    }).isRequired,
    criteria: PropTypes.shape({
        query: PropTypes.object,
        limit: PropTypes.number.isRequired,
    }).isRequired,
    onCollect: PropTypes.func.isRequired
};

export default ListEvents;