$(() => {

    $('.select').click(function (e) {
        switch (e.target.id) {
            case 'btn1': $('#btn1').text(function (x, text) {
                return text === "select" ? "unselect" : "select";
            })
                $('#tr1').toggleClass('table-primary')
                break;
            case 'btn2': $('#btn2').text(function (x, text) {
                return text === "select" ? "unselect" : "select";
            })
                $('#tr2').toggleClass('table-primary')
                break;
            case 'btn3': $('#btn3').text(function (x, text) {
                return text === "select" ? "unselect" : "select";
            })
                $('#tr3').toggleClass('table-primary')
                break;
            default:
                break;
        }
    })
    let total =0
    let counter = 0
    $('#order').click(function () {
        $('.newTable').removeClass('d-none')
        counter += 1
        for (let index = 1; index < 4; index++) {
            if ($(`#btn${index}`).text() == 'unselect' && counter <= 1) {
                let newTr = $(`<tr><td>${index}</td><td>${$(`#car${index}`).text()}</td><td class='price${index}'>${$(`#price${index}`).text()}</td></tr>`)
                $('#tbody').append(newTr)
                total += parseInt($(`.price${index}`).text())
                $('#total').text(total)
            }
        }

    })
    
   

})