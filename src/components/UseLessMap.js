// 这是一块为了拼图而做的地图，无实际意义
import React from "react";
import { Scene, LineLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { Loading } from "@jiaminghi/data-view-react";

export default class UseLessMap extends React.Component {
  linData = [];
  geoData = null;
  // 江苏的经纬度
  local = {
    lat: 32.059344,
    lng: 118.796624,
  };
  scene = null;

  constructor(props) {
    super(props);
    this.state = {
      config: {
        data: ["1"],
        rowNum: 10,
        waitTime: 1000,
      },
    };
    this.linData = [];
  }

  async componentDidMount() {
    console.log(this.props.infoList);
    await this.getRegion();
    this.createScene();
  }
  componentDidUpdate() {
    const region_names = this.props.infoList
      .map((e) => {
        return e.mblog.region_name;
      })
      .filter(Boolean);
    this.linData = region_names
      .map((region) => {
        const reg = this.geoData[region];
        if (!reg) return null;
        return {
          lat1: reg.lat,
          lng1: reg.lng,
          lat2: this.local.lat,
          lng2: this.local.lng,
        };
      })
      .filter(Boolean);

    this.getData();
  }
  getRegion() {
    return new Promise((resolve) => {
      fetch("/geo.json")
        .then((res) => res.json())
        .then((res) => {
          const map = {};
          res.forEach((e) => {
            const name = e.name.replace(/省|市|县|区$/, "");
            map[name] = {
              lat: e.lat,
              lng: e.lng,
            };
          });
          resolve();
          this.geoData = map;
        });
    });
  }
  createScene() {
    const scene = new Scene({
      id: "map",
      map: new GaodeMap({
        pitch: 0,
        style: "dark",
        center: [this.local.lng, this.local.lat],
        zoom: 2.9142882493605033,
      }),
    });

    this.scene = scene;
  }
  getData() {
    const data = this.linData;
    console.log("data", data);

    const layer = new LineLayer({
      blend: "normal",
    })
      .source(data, {
        parser: {
          type: "json",
          x: "lng1",
          y: "lat1",
          x1: "lng2",
          y1: "lat2",
        },
      })
      .size(1)
      .shape("greatcircle")
      .animate({
        enable: true,
        interval: 0.1,
        trailLength: 0.5,
        duration: 2,
      })
      .color("#8C1EB2")
      .style({
        opacity: 0.8,
      });
    this.scene.addLayer(layer);
  }
  render() {
    return (
      <>
        {this.state.config.data.length === 0 ? (
          <Loading />
        ) : (
          <div id="map"></div>
        )}
      </>
    );
  }
}
