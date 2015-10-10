var CitrusModalNs = {
    Modal: function (data) {
        var container = {};
        var modal = {};
        var thisobj = this;
        var close = {};
        if(typeof data === "object" ){
           if(!data.selector){
               console.info("Вы не добавли селектор");
               return;
           }
            modal = document.querySelector(data.selector);
            modal.classList.add("citrus-modal-body");
            var parentNode = modal.parentNode;
            parentNode.removeChild(modal);
            container = document.createElement("div");
            container.classList.add("citrus-modal-container");
            parentNode.appendChild(container);
            container.appendChild(modal);
            console.log(modal);
            this.show = function () {
              container.classList.add("active");
            };
            this.close = function () {
                container.classList.remove("active");
            };

            if(typeof data.close === "string" )
            {
                close = document.querySelector(data.close);
                if(close) {
                    close.addEventListener("click", function(){
                        thisobj.close();
                    });
                }
            }
            console.log(data.containerClose);
            if(data.containerClose === undefined || data.containerClose)
            {
                container.addEventListener("click", function(e){
                    if(e.target === container){
                        thisobj.close();
                    }

                });
            }
        }else  console.info("Вы не передали пораметры");
    }
};

var CitrusModal = CitrusModalNs.Modal;

