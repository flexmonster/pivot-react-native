import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as FlexmonsterReactNative from 'react-native-flexmonster';

class PivotTable extends React.Component {

  report = {
    "dataSource": {
      "type": "csv",
      "filename": "https://cdn.flexmonster.com/data/data.csv"
    },
    "slice": {
      "rows": [
        {
          "uniqueName": "Category"
        }
      ],
      "columns": [
        {
          "uniqueName": "Color"
        },
        {
          "uniqueName": "[Measures]"
        }
      ],
      "measures": [
        {
          "uniqueName": "Price",
          "aggregation": "sum"
        }
      ]
    },
    "options": {
      "chart": {
        "showFilter": false,
        "showMeasures": false
      }
    }
  }

  onclickHandler = (cell) => {
    alert("Clicked on cell with label - " + cell.label + ", and row index - " + cell.rowIndex);
    this.flexmonster.off("cellclick");
    this.flexmonster.on("update", () => {
      alert("Report was updated");
    });
  }

  showChart = () => {
    this.flexmonster.setFilter("Category", {
      "members": [
        "category.[cars]"
      ]
    });
    this.flexmonster.showCharts("column");
  }

  showGrid = () => {
    this.flexmonster.setFilter("Category", {});
    this.flexmonster.showGrid();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.buttonControllsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.showChart} style={styles.buttonFirst}>
              <Text style={styles.buttonText}>Show Chart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={this.showGrid} style={styles.button}>
              <Text style={styles.buttonText}>Show Grid</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlexmonsterReactNative.Pivot style={{ flexGrow: 2 }}
          report={this.report}
          cellclick={this.onclickHandler}
          ref={flexmonster => this.flexmonster = flexmonster}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  buttonControllsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: "#df3800",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonFirst: {
    backgroundColor: "#df3800",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 2
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    textTransform: "uppercase",
    textAlign: "center"
  },
});

export var PivotTableComponent = React.forwardRef((props, ref) => <PivotTable />);