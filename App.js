import React from 'react'
import { View, StyleSheet } from 'react-native'
import PivotTable from './components/PivotTable'

const App = () => {
   return (
      <View style = {styles.container}>
         <View style = {styles.pivotExampleContainer}>
            <PivotTable/>
         </View>
      </View>
   )
}
export default App

const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginHorizontal: 16,
      marginVertical: 16,
      flex: 1
   },
   pivotExampleContainer: {
      marginTop: 16,
      flex: 1,
      width: '100%'
   }
})
