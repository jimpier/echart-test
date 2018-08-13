<template>
  <div class="sg-system-index-box">
    <echart :options="options" class="charts" ref="chart4"></echart>
  </div>
</template>
<script>
import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
Vue.component('echart', ECharts)
export default {
  data() {
    let options = {
      title: {
        show: true,
        text: '123',
        x: 'left'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}<br />占比：{d}%"
      },
      legend: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'top',
        align: 'left',
        itemWidth: 8,
        itemHeight: 8,
        data:['智能家居', '个人护理']
      },
      toolbox: {//工具栏 
        show : true,
        orient : 'horizontal',
        x: 'left',
        y: 'top',
        feature : {
          saveAsImage : {show: true}
        }
      },
      series: [
        {
          name:'作品数量',
          type:'pie',
          padding: 10,
          avoidLabelOverlap: true,
          label: {
            normal: {
              show: true
            }
          },
          data:[{
            name: '智能家居', value: 123
          }, {
            name: '个人护理', value: 456
          }]
        }
      ]
    }
    return {
      options
    }
  }
}
</script>
