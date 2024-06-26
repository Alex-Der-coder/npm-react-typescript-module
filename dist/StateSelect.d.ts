import React from 'react';
type State = {
    abbreviation: string;
    name: string;
};
type StateSelectProps = {
    states: State[];
    state: string;
    setState: (state: string) => void;
};
declare const StateSelect: React.FC<StateSelectProps>;
export default StateSelect;
