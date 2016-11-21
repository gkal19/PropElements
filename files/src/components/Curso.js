import React from 'react';

const cursos = [
	{nome: "React.JS"},
	{nome: "NodeJS"},
	{nome: "AngularJS"},
	{nome: "Redux"},
];

export default class Curso extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>Que tal conhecer o curso de {cursos[this.props.params.id].nome} ?</h1>
    );
  }
}
