import React from 'react';
import { Scene, LineLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import { Loading } from '@jiaminghi/data-view-react'


export default class UseLessMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      config: {
        data: ['1'],
        rowNum: 10,
        waitTime: 1000
      }
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        pitch: 0,
        style: 'dark',
        center: [107.77791556935472, 35.443286920228644],
        zoom: 2.9142882493605033
      })
    });
    scene.on('loaded', () => {
      fetch('https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt')
        .then(res => res.text())
        .then(data => {
          const layer = new LineLayer({
            blend: 'normal'
          })
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng1',
                y: 'lat1',
                x1: 'lng2',
                y1: 'lat2'
              }
            })
            .size(1)
            .shape('greatcircle')
            .animate({
              enable: true,
              interval: 0.1,
              trailLength: 0.5,
              duration: 2
            })
            .color('#8C1EB2')
            .style({
              opacity: 0.8
            });
          scene.addLayer(layer);
        });
    });
  }
  render() {
    return (
      <>
        {
          this.state.config.data.length === 0 ?
            <Loading /> :
            <div id="map"></div>
        }
      </>)
  }
}