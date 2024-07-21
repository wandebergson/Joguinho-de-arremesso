
import React, { useState, useEffect } from 'react';
import { Interface } from 'readline';
import './/Sprites';


showFps()

function showFps(){
    let prevTime:number = 0;
    window.requestAnimationFrame(showFps);
    let delta: number = (performance.now() - prevTime / 1000);
    let fps: number = 1 / delta;
    prevTime = performance.now();
    console.log(`Fps: ${fps}`)
}

