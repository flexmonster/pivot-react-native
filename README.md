# Flexmonster Pivot Table &amp; Charts integration with React Native
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](https://flexmonster.com)
Website: www.flexmonster.com

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful JavaScript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources quickly and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository contains a sample [React Native](https://reactnative.dev/) project for Flexmonster Pivot Table & Charts.

Table of contents:

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Related Flexmonster docs](#related-flexmonster-docs)

## <a name="prerequisites"></a>Prerequisites ##

- [Node.js](https://nodejs.org/en/)
- [Expo CLI](https://expo.dev/tools#cli)

## <a name="installation"></a>Installation ##

1) Download a `.zip` archive with the sample project or clone it from GitHub with the following command:
    ```bash
    git clone https://github.com/flexmonster/pivot-react-native.git && cd pivot-react-native
    ```
2) Install the npm dependencies described in `package.json`: 
    ```bash
    npm install
    ```
    If the above command failed, run it with the `--force` flag:
    ```bash
    npm install --force
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
## <a name="related-flexmonster-docs"></a>Related Flexmonster docs ##

- [Integration with React Native](https://www.flexmonster.com/doc/integration-with-react-native/) — learn how to integrate Flexmonster into a React Native project.
