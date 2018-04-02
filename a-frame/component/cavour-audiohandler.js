// https://glitch.com/edit/#!/smiling-armchair
AFRAME.registerComponent('cavour-audiohandler', {
            init:function() {
            let playing = false;
            let audio = this.el.components.sound;
            this.el.setAttribute("src", "#cavour-club");
            this.el.addEventListener('click', () => {
                if(!playing) {
                audio.playSound();
                } else {
                audio.pauseSound();
                }
            playing = !playing;
            });
        }
        })