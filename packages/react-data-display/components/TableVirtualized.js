import React from 'react';
import { Column, Table, AutoSizer, SortDirection } from 'react-virtualized';
import _ from 'lodash';

class TableVirtualized extends React.Component {
  constructor(props) {
    super(props);

    const sortBy = 'id';
    const sortDirection = SortDirection.ASC;
    const sortedList = this._sortList({ sortBy, sortDirection });

    this.state = {
      sortBy,
      sortDirection,
      sortedList,
    };
  }

  render() {
    const { sortBy, sortDirection, sortedList } = this.state;
    const { data } = this.props;

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={80}
              rowHeight={60}
              rowCount={data.length}
              sort={this._sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              rowCount={sortedList.length}
              rowGetter={({ key, index, style, parent }) => sortedList[index]}
            >
              {Object.keys(data[0]).map((key) => (
                <Column width={100} label={key} name={key} dataKey={key} />
              ))}
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }

  _sortList = ({ sortBy, sortDirection }) => {
    const newList = _.sortBy(this.props.data, [sortBy]);
    if (sortDirection === SortDirection.DESC) {
      newList.reverse();
    }
    return newList;
  };

  _sort = ({ sortBy, sortDirection }) => {
    const sortedList = this._sortList({ sortBy, sortDirection });
    this.setState({ sortBy, sortDirection, sortedList });
  };
}

export default TableVirtualized;
