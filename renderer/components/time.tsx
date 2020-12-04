// import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import React from "react";
import Debug from "debug";
// import Link from "next/link";
const debug = Debug("dev:time");

dayjs.locale("ja");
// moment().locale("ja");
class RemainingTime extends React.Component {
  //  - []TODO  カウントダウンを表示するようにする
  eventDate: any;
  timerID: any;
  time: any;
  state: any;

  nowtime(): any {
    // 上は本番用
    this.eventDate = dayjs(
      "2020-11-29 13:00:00.000",
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
    // 下はテスト用
    // this.eventDate = dayjs(
    //   "2020-10-16 11:00:00.000",
    //   "YYYY-MM-DD HH:mm:ss.SSS"
    // );

    debug(dayjs().format("残り DD日 hh時間mm分ss秒"));

    return {
      times: dayjs().format("YYYY/MM/DD HH:mm:ss"),
      show: true,
    };
  }

  nowsession() {}

  constructor(props: any) {
    super(props);
    this.state = {
      time: this.nowtime().times,
      insession: this.nowsession(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.nowtime().times,
      insession: this.nowsession(),
    });
  }

  // date: string = moment().format("YYYY-MM-DD");
  render() {
    return (
      <div className="w-full text-center h-full">
        <h2 className="sm:text-5xl  backdrop-filter-30 bg-white text-3xl font-semibold ">
          {/* まもなく始まります */}
          {/* {this.state.insession} */}
        </h2>
        <p>
          <span className="text-black  backdrop-filter-30 bg-white proportional-nums text-5xl font-bold">
            {this.state.time}
          </span>
        </p>
      </div>
    );
  }
}

export default function Time() {
  return (
    <>
      <RemainingTime />
    </>
  );
}