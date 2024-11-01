import { legendClasses, PieChart } from "@mui/x-charts"
const colors=['red', 'blue', 'green','gray'] // Use palette
const dataChart = [{ id: 0, value: 10 ,label:'First'},
  { id: 1, value: 15,label:'First' },
  { id: 2, value: 50,label:'First' },
  { id: 3, value: 0,label:'First' },
]
  const otherProps = {
    
    height: 300,
    sx: {
      [`.${legendClasses.root}`]: {
        transform: 'translate(10px, 0)',
      },
      width:'100%',
      '& .MuiChartsLegend-mark':{
        borderRadius:'50%'
      }
    },
  };
const CustomPieChart = () => {
  
  return (
    <div>
      <PieChart
                    margin={{ left: -30 }}
                    series={[
                      {
                        data:  dataChart?.map((d) => ({ label:`${d.label} ------- $${d.value}M`, id: d.id, value: d.value })),
                        innerRadius: 85,
                        outerRadius: 100,
                        paddingAngle: 3,
                        cornerRadius: 28,
                        startAngle: -141,
                        endAngle: 139,
                        cx: 150,
                        cy: 150,
                      }
                    ]}
                    
                    colors={colors}
                    // width={300}
                    // height={300}
                    slotProps={{
                      legend: {
                        hidden: false
                      },
                    }}
                    {...otherProps}
                  // loading={true}
                  />
    </div>
  )
}

export default CustomPieChart