const video = {
    title: "movie",
    tags: ['a', 'b', 'c', 'd'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
        }, this);
    }
}

video.showTags();

const video2 = {
    title: "movie",
    tags: ['a', 'b', 'c', 'd'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this, tag);
        });
    }
}

video2.showTags();

// bind()
// call()
// apply()