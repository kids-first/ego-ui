import React from 'react';
import _ from 'lodash';
import { Table } from 'semantic-ui-react';
import format from 'date-fns/format/index.js';
import { compose } from 'recompose';
import { injectState } from 'freactal';

const DATE_KEYS = ['createdAt', 'lastLogin'];

function normalizeRow(
  row: { key: string; fieldName?: any; fieldContent?: any },
  data: Object[],
  associated: any,
) {
  const rowData = {
    ...row,
    fieldName: row.fieldName || row.key,
    fieldContent:
      row.fieldContent ||
      (data[row.key] ? (
        DATE_KEYS.indexOf(row.key) >= 0 ? (
          format(data[row.key], 'MMMM Do YYYY [a]t h:mmA')
        ) : (
          data[row.key]
        )
      ) : (
        <div style={{ opacity: 0.4, fontStyle: 'italic' }}>empty</div>
      )),
  };

  return {
    ...rowData,
    fieldName:
      typeof rowData.fieldName === 'function'
        ? rowData.fieldName({ associated, data })
        : _.upperCase(rowData.fieldName),
    fieldContent:
      typeof rowData.fieldContent === 'function'
        ? rowData.fieldContent({ associated, data })
        : rowData.fieldContent,
  };
}

const enhance = compose(injectState);

const ContentTable = ({
  rows,
  state: {
    thing: { item, associated },
  },
}) => {
  return (
    <Table basic="very" style={{ fontSize: 18 }}>
      <Table.Body>
        {rows.map(row => {
          const { key, fieldName, fieldContent } = normalizeRow(row, item, associated);

          return (
            <Table.Row key={`${item.id}-${key}`} style={{ verticalAlign: 'baseline' }}>
              <Table.Cell
                style={{
                  fontSize: '0.65em',
                  border: 'none',
                  textAlign: 'right',
                  width: '6em',
                }}
              >
                {fieldName}
              </Table.Cell>
              <Table.Cell style={{ border: 'none' }}>{fieldContent}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default enhance(ContentTable);
