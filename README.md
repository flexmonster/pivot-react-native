# Flexmonster Pivot Table &amp; Charts integration with React Native
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](https://flexmonster.com)
Website: www.flexmonster.com

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful JavaScript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources quickly and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository holds the source code for a simple [React Native](https://reactnative.dev/) and Flexmonster Pivot Table & Charts project:
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## <a name="prerequisites"></a>Prerequisites ##

To run a simple application with the React Native pivot table, you will need Node.js and npm. [Get them here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if they're not already installed on your machine.

Then install the Expo CLI globally by running:

```bash
npm install -g expo-cli
```


## <a name="installation"></a>Installation ##

 
1) Clone the sample project: 
    ```bash
    git clone https://github.com/flexmonster/pivot-react-native.git 
    cd pivot-react-native
    ```
2) Install the dependencies defined in `package.json`: 
    ```bash
    npm i
    ```
    If the above command failed, run it with the `--force` flag:
    ```bash
    npm i --force
    ```
3) For React 17 or earlier, change [the last two lines of code](https://github.com/flexmonster/pivot-react-native/blob/master/components/PivotTable.js#L119-L120) in the `components/PivotTable.js`:
    - Uncomment the following line:
       ```js
       //export { PivotTable as PivotTableComponent };
       ```
    - Comment the line below:
       ```js
       export var PivotTableComponent = React.forwardRef((props, ref) => <PivotTable />);
       ```
4) Run the sample project: 
    ```bash
    expo start
    ```
## <a name="usage"></a>Usage ##

For details on usage, refer to [Flexmonster Integration with React Native](https://www.flexmonster.com/doc/integration-with-react-native/) tutorial.
