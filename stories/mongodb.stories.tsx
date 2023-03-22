import React from 'react';
import {
  ResourceKind,
  BlockWrapper, ResourceMetadata
} from '@kapeta/ui-web-types';

import '@kapeta/ui-web-components/styles/index.less';
import MongoDBEditorComponent from "../src/web/MongoDBEditorComponent";

const RESOURCE_KIND = 'kapeta/resource-type-mongodb';

const block:BlockWrapper<any> = {
  addEntity: entity => {

  },
  getData: () => {
    return {};
  },
  setData: () => {

  },
  getEntityNames: () => ['entity1', 'entity2']
};

const MongoResource:ResourceKind<any> = {
  kind: RESOURCE_KIND,
  metadata: {
    name: 'MyMongoDB'
  },
  spec: {}
};

export default {
  title: 'MongoDB'
};

export const Editor = () => <MongoDBEditorComponent {...MongoResource} block={block} />;
