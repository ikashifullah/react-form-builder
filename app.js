import React from 'react';
import ReactDOM from 'react-dom';
import DemoBar from './demobar';
import FormBuilder from './src/index';
import * as variables from './variables';
import { post } from './src/stores/requests';
import CustomElement from './src/CustomElement';
// Add our stylesheets for the demo.
require('./scss/application.scss');

const url = '/api/formdata';
const saveUrl = '/api/formdata';

const TestComponent = props => <h1>sad</h1>;

const onLoad = function() {
  console.log('onLoad');
  return new Promise((resolve, reject) => {
    return resolve([
      // {
      //   allowDelete: false,
      //   "id": "DEA93ED6-54AE-4F4F-A785-E76F75C11006",
      //   "element": "Camera",
      //   "text": "Camera",
      //   "required": false,
      //   "fieldName": "camera_2DFCB94D-A736-4CD2-89E9-42CFD9A51A75",
      //   "label": "Placeholder Label"
      // },
      // {
      //   "id": "842D09B3-5235-4C63-914A-A84143787148",
      //   "element": "Camera",
      //   "text": "Camera",
      //   "required": false,
      //   "fieldName": "camera_5464E5DA-422B-41D6-9663-1B52668D025E",
      //   "label": "Placeholder Label"
      // },
    ]);
  });
};

const onPost = function(data) {
  console.log('onPost', data);
  post(saveUrl, data);
};

ReactDOM.render(
  <FormBuilder.ReactFormBuilder
    variables={variables}
    onLoad={onLoad}
    onPost={onPost}
    saveUrl={saveUrl}
    customToolbarItems={[
      {
        type: 'custom',
        component: TestComponent,
        field_name: 'asset_manager_',
        key: 'CustomElement',
        name: 'Something You Want',
        icon: 'fa fa-cog',
        static: true,
        props: { test: 'asdas' },
        label: 'Placeholder Text...',
      },
    ]}
  />,
  document.getElementById('form-builder'),
);

// ReactDOM.render(
//   <FormBuilder.ReactFormBuilder variables={variables}
//     onLoad={onLoad}
//     onPost={onPost}
//   />,
//   document.getElementById('form-builder')
// )

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar'),
);
