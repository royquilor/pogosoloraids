import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

import MachampExtremeTable from './MachampExtremeTable';
import MachampCloudyTable from './MachampCloudyTable';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Machamp extends Component {

  render() {

    return (
      <BodyClassName className="raidboss fighting-type-theme">
        <div>
          <Header
            pokemon="Machamp"
            type="fighting"
            regularcp="1650"
            weatherboostcp="2063"
            likes="Cloudy"
            />
          <Wrap>
          <Tabs>
            <TabList>
              <Tab>Extreme</Tab>
              <Tab>Cloudy</Tab>
            </TabList>

            <TabPanel>
              <MachampExtremeTable />
            </TabPanel>
            <TabPanel>
              <MachampCloudyTable />
            </TabPanel>
          </Tabs>
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Machamp;
