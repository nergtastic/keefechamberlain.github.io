function hoverFrames(frames) {
    if (frames==1){
        document.getElementById('frame2').style.background = 'url(./assets/img/skipster.png)';
        document.getElementById('frame2').style.backgroundPosition = '106% 27%';
        document.getElementById('frame3').style.background = 'url(./assets/img/history.jpg)';
        document.getElementById('frame3').style.backgroundPosition = '46% 27%';
        document.getElementById('frame3').style.backgroundSize = '100% 100%';
        document.getElementById('frame4').style.background = 'url(./assets/img/experience.jpg)';
        document.getElementById('frame4').style.backgroundPosition = '45% 27%';
        document.getElementById('frame4').style.backgroundSize = '100% 100%';
        console.log('hovering over frame 1');
    } else if (frames==2){
        document.getElementById('frame1').style.background = 'url(./assets/img/yeti.png)';
        document.getElementById('frame1').style.backgroundPosition = '10% 60%';
        document.getElementById('frame3').style.background = 'url(./assets/img/yeti.png)';
        document.getElementById('frame3').style.backgroundPosition = '92% 60%';
        document.getElementById('frame4').style.background = 'url(./assets/img/yeti2.jpg)';
        document.getElementById('frame4').style.backgroundPosition = '90% 60%';
        document.getElementById('frame4').style.backgroundSize = '350% 100%';
        console.log('hovering over frame 2');
    } else if (frames==3){
        document.getElementById('frame1').style.background = 'url(./assets/img/illustration.jpg)';
        document.getElementById('frame1').style.backgroundPosition = '45% 27%';
        document.getElementById('frame1').style.backgroundSize = '100% 100%';
        document.getElementById('frame2').style.background= 'url(./assets/img/frame3.jpg)';
        document.getElementById('frame2').style.backgroundPosition = '0% 22%';
        document.getElementById('frame2').style.backgroundSize = '310% 125%';
        document.getElementById('frame4').style.background= 'url(./assets/img/frame3.jpg)';
        document.getElementById('frame4').style.backgroundPosition = '100% 26%';
        document.getElementById('frame4').style.backgroundSize = '310% 125%';
        console.log('hovering over frame 3');
    } else {
        document.getElementById('frame1').style.background = 'url(./assets/img/strip.jpg)';
        document.getElementById('frame1').style.backgroundPosition = '3% 40%';
        document.getElementById('frame1').style.backgroundSize = '340% 118%';
        document.getElementById('frame2').style.background = 'url(./assets/img/strip.jpg)';
        document.getElementById('frame2').style.backgroundPosition = '49% 40%';
        document.getElementById('frame2').style.backgroundSize = '340% 118%';
        document.getElementById('frame3').style.background = 'url(./assets/img/strip.jpg)';
        document.getElementById('frame3').style.backgroundPosition = '95% 40%';
        document.getElementById('frame3').style.backgroundSize = '300% 95%';
        document.getElementById('frame4').style.background = 'url(./assets/img/comics.jpg)';
        document.getElementById('frame4').style.backgroundPosition = '90% 60%';
        document.getElementById('frame4').style.backgroundSize = '100% 100%';
        console.log('hovering over frame 4');
    }

}

function hoverOut() {
    document.getElementById('frame1').style.background = 'url(./assets/img/skipster.png)';
    document.getElementById('frame1').style.backgroundPosition = '45% 27%';
    document.getElementById('frame2').style.background = 'url(./assets/img/yeti.png)';
    document.getElementById('frame2').style.backgroundPosition = '50% 60%';
    document.getElementById('frame3').style.background= 'url(./assets/img/frame3.jpg)';
    document.getElementById('frame3').style.backgroundPosition = '50% 22%';
    document.getElementById('frame3').style.backgroundSize = '310% 125%';
    document.getElementById('frame4').style.background = 'url(./assets/img/jack.jpg)';
    document.getElementById('frame4').style.backgroundPosition = '66% 65%';
    document.getElementById('frame4').style.backgroundSize = '445%';
}