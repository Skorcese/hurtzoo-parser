import React from 'react';
import { Column, Table, AutoSizer, SortDirection } from 'react-virtualized';
import _ from 'lodash';

class TableV extends React.Component {
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
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={80}
              rowHeight={60}
              rowCount={this.props.data.length}
              sort={this._sort}
              sortBy={this.state.sortBy}
              sortDirection={this.state.sortDirection}
              rowCount={this.state.sortedList.length}
              rowGetter={({ key, index, style, parent }) =>
                this.state.sortedList[index]
              }
            >
              {Object.keys(this.props.data[0]).map((key) => (
                <Column width={100} label={key} name={key} dataKey={key} />
              ))}
              {/* {this.props.columns.map(({ Header, accessor }) => (
                <Column
                  width={100}
                  label={Header}
                  name={Header}
                  dataKey={accessor}
                />
              ))} */}
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }

  _sortList = ({ sortBy, sortDirection }) => {
    let newList = _.sortBy(this.props.data, [sortBy]);
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

export default TableV;
