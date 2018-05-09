import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import AlakazamExtremeTable from './AlakazamExtremeTable';
import AlakazamWindyTable from './AlakazamWindyTable';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Alakazam extends Component {

  render() {

    return (
      <BodyClassName className="raidboss psychic-type-theme">
        <div>
          <Header
            pokemon="Alakazam"
            type="psychic"
            regularcp="1649"
            weatherboostcp="2062"
            likes="Windy"
            />
          <Wrap>
            <Tabs>
              <TabList>
                <Tab>Extreme</Tab>
                <Tab>Windy</Tab>
              </TabList>

              <TabPanel>
                <AlakazamExtremeTable />
              </TabPanel>
              <TabPanel>
                <AlakazamWindyTable />
              </TabPanel>
            </Tabs>
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Alakazam;
