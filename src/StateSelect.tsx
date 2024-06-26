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

const StateSelect: React.FC<StateSelectProps> = ({ states, state, setState }) => {
  return (
    <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} required>
      {states.map((state, index) => (
        <option key={index} value={state.abbreviation}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateSelect;
