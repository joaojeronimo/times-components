/* eslint-env browser */
import React, { Component } from "react";
import { propTypes, defaultProps } from "./dom-context-prop-types";

class DOMContext extends Component {
  componentDidMount() {
    const { data, init } = this.props;

    this.initExecuting = true;
    this.hasUnmounted = false;

    this.adInit = init({
      el: this.div,
      eventCallback: this.eventCallback,
      platform: "web",
      data,
      window
    });

    if (this.adInit && this.adInit.init) {
      this.adInit.init();
    }

    this.initExecuting = false;
    this.processEventQueue();
  }

  componentWillUnmount() {
    this.eventQueue = [];
    this.hasUnmounted = true;
    this.adInit.destroySlots();
  }

  eventQueue = [];

  eventCallback = (type, detail) => {
    this.eventQueue.push({ type, detail });
    this.processEventQueue();
  };

  processEventQueue() {
    if (!this.initExecuting && !this.hasUnmounted) {
      this.eventQueue.forEach(this.processEvent);
      this.eventQueue = [];
    }
  }

  processEvent = ({ type, detail }) => {
    if (this.eventQueue.length === 0) return;
    if (type === "error") {
      throw new Error(`DomContext error: ${detail}`);
    } else if (type === "scriptLoadingError") {
      this.props.onRenderError();
    } else if (type === "renderComplete") {
      this.props.onRenderComplete();
    }
  };

  render() {
    const { width } = this.props;
    return (
      <div
        ref={div => {
          this.div = div;
        }}
        style={{ height: "auto", overflow: "hidden", width }}
      />
    );
  }
}

DOMContext.propTypes = propTypes;
DOMContext.defaultProps = defaultProps;

export default DOMContext;
