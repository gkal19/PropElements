import React from 'react';

const elementos = [
	{nome: "Carbono"},
	{nome: "Hidrogênio"},
	{nome: "Cloreto"},
	{nome: "Sódio"},
];

export default class Elemento extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>Que tal conhecer as propriedades do {elementos[this.props.params.id].nome} ?</h1>
    );
  }
}
