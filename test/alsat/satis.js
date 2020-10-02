$('.button-wrap').on("click", function(){
    $(this).toggleClass('button-active');
  });



  var input = document.querySelector('input');
var preview = document.querySelector('.preview');

input.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

var allFiles = [];

function closeAtIdx(i) {
  return function () {
   console.log('deleting', i);
   allFiles.splice(i, 1);
   console.log('deleted', allFiles);
   this.parentElement.style.display = 'none';
  }
}

function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  console.log("prior", allFiles);
  var curFiles = input.files;
  allFiles = allFiles.concat(...curFiles);
  console.log("overall", allFiles);
  if(allFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    var list = document.createElement('ol');
    preview.appendChild(list);
    for(var i = 0; i < allFiles.length; i++) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');
      var closeSpan = document.createElement("span");
      closeSpan.setAttribute("class","sr-only");
      closeSpan.textContent = "x";
      closeSpan.addEventListener("click", closeAtIdx(i));
      if(validFileType(allFiles[i])) {
        para.textContent = 'File name ' + allFiles[i].name + ', file size ' + returnFileSize(allFiles[i].size) + '.';
        var image = document.createElement('img');
        image.src = window.URL.createObjectURL(allFiles[i]);

        listItem.appendChild(closeSpan);
        listItem.appendChild(image);
        listItem.appendChild(para);

      } else {
        para.textContent = 'File name ' + allFiles[i].name + ': Not a valid file type. Update your selection.';
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}