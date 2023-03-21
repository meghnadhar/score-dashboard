

 function loadData(){
    var data = [
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/images/icon-reaction.svg"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/images/icon-memory.svg"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/images/icon-verbal.svg"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/images/icon-visual.svg"
        }
      ];

      for (var i=0;i<data.length;i++){
        var div = document.getElementById("subjects");
        const listItem = document.createElement("div");
        listItem.setAttribute("id","dynamic-category-id");
        listItem.innerHTML ="<img src ='" +data[i].icon+"'/><span id='category-"+data[i].category+"'>"+data[i].category+"</span><span>"+data[i].score+"/100</span>";
        div.appendChild(listItem);
        listItem.style.backgroundColor = setBackgroundColor(i);
        setCategoryNameColor(i, data[i].category);
      }
  }

  function setBackgroundColor(index){
      var colors = ['hsl(0, 100%, 95%)','hsl(39, 100%, 95%)','hsl(166, 100%, 95%)','hsl(234, 85%, 95%)'];
        return colors[index];
  }

  function setCategoryNameColor(index, categoryName){
    var colors = ['hsl(0, 100%, 50%)','hsl(39, 100%, 50%)','hsl(166, 100%, 50%)','hsl(234, 85%, 50%)'];
    const nameObj = "category-"+categoryName+"";
    const spanElem = document.getElementById(nameObj);
    spanElem.style.color= colors[index];

  }

document.getElementById('marks').innerHTML = 65;
