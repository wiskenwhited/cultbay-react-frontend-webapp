import React from 'react';
import NavigatorButton from "./button";
import './styles.less';

const CalendarNavigator = ({ step, onNavigate }) => {
  return (
    <div className={'CalendarNavigator'}>
      <div className={'CalendarNavigator--side__left'}>
        <NavigatorButton
          isActive={step > 2}
          onclick={() => {
            onNavigate(-4);
          }}
          isDouble
        />
        <NavigatorButton
          isActive={step > 0}
          onclick={() => {
            onNavigate(-2);
          }}
        />
      </div>
      <div className={'CalendarNavigator--side__right'}>
        <NavigatorButton
          onclick={() => {
            onNavigate(2);
          }}
        />
        <NavigatorButton
          isDouble
          onclick={() => {
            onNavigate(4);
          }}
        />
      </div>
    </div>
  )
};

export default CalendarNavigator;