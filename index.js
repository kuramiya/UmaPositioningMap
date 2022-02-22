
interact('.draggable').draggable({

  // enable inertial throwing
  inertia: true,  

  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'container',
      endOnly: true
    })
  ],

  listeners: {
    // start (event) {
    //   console.log(event.type, event.target)
    // },
    move (event) {
      var target = event.target;

      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
      // translate the element
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    
      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
  }
});

var app = new Vue({
  el: '#app',
  data: {
    charaImgStyle: "draggable rounded border charaSizeMedium",
    axisType: "xyAxis",
    isYAxisShown: true,
  },
  methods: {
    changeImageSizeLarge: function(){
      this.charaImgStyle = "draggable rounded border charaSizeLarge";
    },
    changeImageSizeMedium: function(){
      this.charaImgStyle = "draggable rounded border charaSizeMedium";
    },
    changeImageSizeSmall: function(){
      this.charaImgStyle = "draggable rounded border charaSizeSmall";
    },
    axisTypeChanged: function(){
      if(this.axisType == "xyAxis")
      {
        this.isYAxisShown = true;        
      }
      else
      {
        this.isYAxisShown = false;
      }
    },
  },
});
