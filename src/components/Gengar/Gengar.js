import React, { Component } from 'react'

import GengarFocusBlastList from '../../components/GengarFocusBlastList';
import GengarSludgeBombList from '../../components/GengarSludgeBombList';
import GengarShadowBallList from '../../components/GengarShadowBallList';

class Gengar extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Gengar</h2>
        <GengarFocusBlastList gengarfb={this.props.gengarfb} />
        <GengarSludgeBombList gengarsgb={this.props.gengarsgb} />
        <GengarShadowBallList gengarsb={this.props.gengarsb} />
      </div>
    );

  }

}

export default Gengar;
