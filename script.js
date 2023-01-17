var today = dayjs();
var currentHour = dayjs().hour();
$("#currentDay").text(today.format('MMMM D,YYYY'));

for (i = 9; i < 18; i++) {
  if (i < currentHour) {
    $('#hour-' + i).addClass('past')
  } else if (i == currentHour) {
    $('#hour-' + i).addClass('present')
  } else if (i > currentHour) {
    $('#hour-' + i).addClass('future')
  }
}

$(function () {
  $('.saveBtn').on('click', function (event) {
    let target = $(event.target)
    let targetParent = target.parents('.time-block')
    let appointment = targetParent.children('textarea').val()
    let hourID = targetParent.attr('id')
    localStorage.setItem(hourID, appointment)
  })

  for (i = 9; i < 18; i++) {
    appointment = localStorage.getItem('hour-' + i)
    $('#hour-' + i).children('textarea').text(appointment)
  }
});
