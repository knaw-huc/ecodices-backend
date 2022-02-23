import {assign, Machine} from "xstate";

export const EcodicesMachine = Machine<{
    search_string: string,
    id: string
}, {
    states: {
        fourOhFour: {},
        detail: {},
        search: {},
        viewer: {}
    }
}>(
    {
        id: 'fetch',
        initial: 'search',
        context: {
            search_string: "none",
            id: "",
        },
        on: {
            detail: {
                actions: assign({
                    id: (context, event) => event.id
                }),
                target: "detail"
            },
            search: {
                actions: assign({
                    search_string: (context, event) => event.search_string
                }),
                target: "search"
            },
            viewer: "viewer",
            "*": "fourOhFour"
        },
        states: {
            fourOhFour: {},
            detail: {
                on: {
                    search: "search",
                    detail: "detail"
                }
            },
            search: {
                on: {
                    item: "detail"
                }
            },
            viewer: {}
        }
    }
);