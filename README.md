# React Native pivot grid | Flexmonster Pivot Table & Charts sample project with React Native
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/readmes/react_native.webp)](https://www.flexmonster.com?r=sample_reactnative)
Website: [flexmonster.com](https://www.flexmonster.com?r=sample_reactnative)

[![Github Stars](https://img.shields.io/github/stars/flexmonster?style=social)](https://github.com/flexmonster) [![Twitter](https://img.shields.io/twitter/follow/Flexmonster?style=social)](https://twitter.com/Flexmonster)

## Flexmonster Pivot Table & Charts

Flexmonster Pivot Table & Charts is a powerful and fully customizable JavaScript component for web reporting. It is packed with all core features for data analysis and can easily become a part of your React Native data visualization project. The tool supports popular frameworks like React, Vue, Angular, Blazor, and [more](https://www.flexmonster.com/doc/available-tutorials-integration?r=sample_reactnative). Also, Flexmonster connects to [any data source](https://www.flexmonster.com/doc/supported-data-sources?r=sample_reactnative), including SQL and NoSQL databases, JSON and CSV files, OLAP cubes, and Elasticsearch. 

This repository contains a sample [React Native](https://reactnative.dev/) project for Flexmonster Pivot Table & Charts.

Table of contents:

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Related Flexmonster docs](#related-flexmonster-docs)
* [Support and feedback](#support-and-feedback)
* [Flexmonster licensing](#flexmonster-licensing)
* [Social media](#social-media)

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1) Download a `.zip` archive with the sample project or clone it from GitHub with the following command:
    ```bash
    git clone https://github.com/flexmonster/pivot-react-native.git && cd pivot-react-native
    ```
2) Install the npm dependencies described in `package.json`: 
    ```bash
    npm install
    ```
    If the above command fails, run it with the `--force` flag:
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
4) Run the sample project from the console: 
    ```bash
    npx expo start
    ```
    To shut down the project from the console, press `Ctrl + C` (`Control + C` on macOS).
    **Note** If you get an error at this step, see [Troubleshooting](https://www.flexmonster.com/doc/integration-with-react-native?r=sample_reactnative#troubleshooting).
## Related Flexmonster docs

- [Integration with React Native](https://www.flexmonster.com/doc/integration-with-react-native?r=sample_reactnative) — learn how to integrate Flexmonster into a React Native project.

## Support and feedback

In case of any issues, visit our [Troubleshooting](https://www.flexmonster.com/doc/typical-errors?r=sample_reactnative) section. You can also search among the [resolved cases](https://www.flexmonster.com/technical-support?r=sample_reactnative) for a solution to your issue.

To share your feedback or ask questions, contact our Tech team by raising a ticket on our [Help Center](https://www.flexmonster.com/help-center?r=sample_reactnative). You can also find a list of samples, technical specifications, and a user interface guide there.

## Flexmonster licensing

This sample project uses the [Flexmonster React Native wrapper](https://github.com/flexmonster/react-native-flexmonster/), which is released as an MIT-licensed (free and open-source) add-on to Flexmonster Pivot.

To learn about Flexmonster Pivot licenses, visit the [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing?r=sample_reactnative). 
If you want to test our product, we provide a 30-day free trial.

If you need any help with your license, fill out our [Contact form](https://www.flexmonster.com/contact-our-team?r=sample_reactnative), and we will get in touch with you.

## Social media

Follow us on social media and stay updated on our development process!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/flexmonster) [![YouTube](https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/user/FlexMonsterPivot) [![Twitter](https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/flexmonster)
