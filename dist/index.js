'use strict';

var React = require('react');

const StateSelect = ({ states, state, setState }) => {
    return (React.createElement("select", { id: "state", name: "state", value: state, onChange: (e) => setState(e.target.value), required: true }, states.map((state, index) => (React.createElement("option", { key: index, value: state.abbreviation }, state.name)))));
};

exports.StateSelect = StateSelect;
//# sourceMappingURL=index.js.map
