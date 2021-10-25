import React, {ReactNode} from "react";
import './TabBar.scss';

export interface TabBarItem {
  id?: string,
  text: string,
  content: ReactNode,
}

export interface TabBarProps {
  id?: string,
  items: TabBarItem[],
  small?: boolean;
}

export default function TabBar(props: TabBarProps) {
  const [value, setValue] = React.useState(0);

  function buildItems() {
    const items = [];
    for (let i = 0; i < props.items.length; i++) {
      if (i == value) {
        items.push(<li className={'selected selected-item'}
                       key={`tab_${props.items[i].text}_${i}`}
                       onClick={() => setValue(i)}><a>{props.items[i].text}</a>
        </li>)
      } else {
        items.push(<li className={'rux-tab'}
                       key={`tab_${props.items[i].text}_${i}`}
                       onClick={() => setValue(i)}><a>{props.items[i].text}</a>
        </li>)
      }

    }
    return items;
  }

  return (
    <>
      <div className={`rux-tabs ${props.small ? 'rux-tabs--small' : ''}`}>
        <ul>
          {
            buildItems()
          }
        </ul>
      </div>
      <div>
        {props.items.length > 0 && props.items[value].content}
      </div>
    </>
  )
}