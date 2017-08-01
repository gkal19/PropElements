import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav className="nav is-tab has-shadow">
        <div className="nav-left">
          <IndexLink to="/" className="nav-item is-tab" activeClassName="is-active">PropElements</IndexLink>
          <Link to="/elementos" className="nav-item is-tab" activeClassName="is-active">Elementos</Link>
          <Link to="/sobre" className="nav-item is-tab" activeClassName="is-active">Sobre</Link>
        </div>
        </nav>

        <section className="section">
        <div className="container">
      {this.props.children}
        </div>
      </section>
      </div>
    );
  }
}
