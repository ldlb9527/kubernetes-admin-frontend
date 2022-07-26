<template>
  <div>
    <el-card class="node-status" >
      <div class="view-content">
        <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      timer: ''
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'),'vintage',{
        width: 600,
        height: 300
      })


      let value = 3;//当前进度
      let maxValue = 4;//进度条最大值
      // 绘制图表配置
      let option = {
        title: {
          //标题内容
          text: '节点状态：',
          textStyle: {
            fontWeight: 'bold',
            fontFamily: 'Microsoft YaHei',
            fontSize: 24
          },
          //标题位置
          top: '5%',
          left: '5%'
        },
        //环形中间文字
        graphic: [
          //第一行文字
          //内容 + 位置
          {
            type: 'text',
            left: 'center',
            top: '48%',
            style: {
              //value当前进度
              text: value + '/' + maxValue,
              textAlign: 'center',
              fill: '#000',
              fontSize: 28
            }
          }
        ],
        series: [{
          type: 'pie',
          radius: ['70%', '64%'],//['外圆大小', '内圆大小']
          center: ['50%', '50%'],//圆心位置['左右'， '上下']
          hoverAnimation: false,//取消鼠标悬停动画
          animationEasing: 'cubicOut',//设置动画缓动效果
          //取消显示饼图自带数据线条
          labelLine: {
            normal: {
              show: false
            }
          },
          //增加阴影效果
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(44, 196, 196, 0.8)'
            }
          },
          data: [
            //value当前进度 + 颜色
            {
              value: value,
              itemStyle: {
                normal: {
                  color: '#73DEB3'
                }
              }
            },
            //(maxValue进度条最大值 - value当前进度) + 颜色
            {
              value: maxValue - value,
              itemStyle: {
                normal: {
                  color: '#FF0000'
                }
              }
            }
          ]
        }]
      };


      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function() {
        window.onresize = function() {
          myChart.resize();
        }
      }, 200)
    }
  }
}
</script>

<style scoped>
.node-status {
  width: 50%;


}

</style>
