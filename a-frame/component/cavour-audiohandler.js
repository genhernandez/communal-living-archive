// https://glitch.com/edit/#!/smiling-armchair
AFRAME.registerComponent('cavour-audiohandler', {
            init:function() {
                let playing = false;
                var el = this.el;
                let audioEl = document.querySelector("a-sound");
                audioEl.setAttribute("src", "#cavour-club");
                
                audioEl.addEventListener("loaded", (e) => {
                    console.log("AUDIO LOADED")
                    console.log(e)
                    var audio = audioEl.components.sound;
                    el.addEventListener('click', (ee) => {
                        console.log(ee)
                        if(!playing){
                            audio.playSound();
                        } else {
                            audio.stopSound();
                        }
                        playing = !playing;
                    });
                })
        }
    })

