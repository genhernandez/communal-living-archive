// https://glitch.com/edit/#!/smiling-armchair
AFRAME.registerComponent('soccer-audiohandler', {
            init:function() {
            let playing = false;
            let audio = this.el.components.sound;
            this.el.setAttribute("src", "#soccer-game");
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