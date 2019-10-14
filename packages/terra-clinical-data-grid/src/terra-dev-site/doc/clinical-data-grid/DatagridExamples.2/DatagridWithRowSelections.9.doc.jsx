import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';
import DatagridWithRowSelections from './DatagridWithRowSelections';
import DatagridWithRowSelectionsSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples.2/DatagridWithRowSelections';

const DatagridWithRowSelectionsExample = () => (
  <ExampleTemplate
    description="This example features selectable rows and column headers. Column headers implement rudimentary sorting on selection. Rows can be selected."
    example={<DatagridWithRowSelections />}
    exampleSrc={DatagridWithRowSelectionsSrc}
  />
);

export default DatagridWithRowSelectionsExample;
