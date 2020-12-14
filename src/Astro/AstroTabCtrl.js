import React from 'react';
import { v4 as uuidv4 } from 'uuid';
/* eslint-disable no-unused-vars */
import { RuxTabs } from '@astrouxds/rux-tabs/rux-tabs.js';
/* eslint-enable no-unused-vars */

const findByType = (children, component) => {
  const result = [];
  /* This is the array of result since Article can have multiple times the same sub-component */
  const type = [component.displayName] || [component.name];
  /* We can store the actual name of the component through the displayName or name property of our sub-component */
  React.Children.forEach(children, child => {
      result.push(child);
   });
  /* Then we go through each React children, if one of matches the name of the sub-component we’re looking for we put it in the result array */
  return result;
};

const Tab = () => null;

export default function AstroTabCtrl(props) {
    
    var tabContent = [];
    var tabHeaders = [];
    const renderTabs = () => {
        const { children } = props;
        const tabs = findByType(children, Tab);
        // If we don’t find any we return null
        if (!tabs || tabs.length === 0) {
            return null;
        }

        // always make sure there's a default selected if
        // user doesn't specify
        let foundSelected = false;
        for (let tab of tabs) {
            if (tab.props.selected) {
                foundSelected = true;
                break;
            }
        }
        
        for (let tab of tabs) {
            let id = uuidv4();
            tabContent.push({id, children: tab.props.children});
            tabHeaders.push(<rux-tab key={id} id={id} selected={!foundSelected ? true : tab.props.selected}>{tab.props.title}</rux-tab>)
            foundSelected = true;
        }
        return tabHeaders;
    }

    return (
        <>
            <rux-tabs id={props.id}>
                {renderTabs()}
            </rux-tabs>
            <rux-tab-panels aria-labelledby={props.id}>
                {tabContent.map(x => <rux-tab-panel key={x.id} aria-labelledby={x.id}>{x.children}</rux-tab-panel>)}
            </rux-tab-panels>
        </>
    )
}

AstroTabCtrl.Tab = Tab;