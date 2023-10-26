import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Chart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                data: [25, 35, 38, 40, 35],
                color: (opacity = 1) => `rgba(3, 157, 252, ${opacity})`, // Change the line color
               
            },
        ],
    };

    return (
        <View>
            <LineChart
                data={data}
                width={300}
                height={200}
                yAxisLabel="Rs"
                yAxisSuffix="k"
                yAxisInterval={1}
                withInnerLines={false} // Remove inner lines in the chart
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16, 
                      
                    
                }}
            />
        </View>
    );
};
export default Chart;
