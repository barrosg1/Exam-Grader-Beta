function filterTopic() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterTopic");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterDifficulty() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterDifficulty");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// CQ = Create Question page
function filterTopicCQ() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterTopicCQ");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTableCQ");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// CQ = Create Question page
function filterDifficultyCQ() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterDifficultyCQ");
  filter = input.value.toUpperCase();
  table = document.getElementById("questionTableCQ");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
