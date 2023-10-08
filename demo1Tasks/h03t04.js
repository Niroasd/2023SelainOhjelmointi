const song = {
    name : '',
    duration : 0,

    get getDuration() {
        const minutes = Math.floor(this.duration / 60);
        const seconds = this.duration - minutes * 60;
        return (`${minutes}:${seconds}`);
    },

    set setDuration(duration) {
        this.duration = duration;
    }
};