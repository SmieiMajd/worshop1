import React, { Component } from 'react'

export default class Jsx extends Component {
    render() {
        return (
            <div>
                 
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <br />
    <br />
    <br />
    <br />


    <img widh={250} height={250} src="image1.png" alt="/image1" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <img src="/image2.png" alt="image2"  />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>

            </div>
        )
    }
}
