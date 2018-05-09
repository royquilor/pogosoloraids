import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import GengarExtremeTable from './GengarExtremeTable';
import GengarCloudyTable from './GengarCloudyTable';
import GengarFogTable from './GengarFogTable';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Gengar extends Component {

  render() {

    return (
      <BodyClassName className="raidboss ghost-type-theme">
      <div>
        <Header
          pokemon="Gengar"
          type="ghost"
          regularcp="1496"
          weatherboostcp="1870"
          likes="Cloudy, Fog"
          />
        <Wrap>
        <Tabs>
          <TabList>
            <Tab>Extreme</Tab>
            <Tab>Cloudy</Tab>
            <Tab>Fog</Tab>
          </TabList>

          <TabPanel>
            <GengarExtremeTable />
          </TabPanel>
          <TabPanel>
            <GengarCloudyTable />
          </TabPanel>
          <TabPanel>
            <GengarFogTable />
          </TabPanel>
        </Tabs>
        </Wrap>
      </div>
      </BodyClassName>
    );

  }

}

export default Gengar;
