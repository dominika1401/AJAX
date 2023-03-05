$(document).ready(function () {

    $('#get-data').click(function () {


        // Wariant I
        //         $.get('https://akademia108.pl/api/ajax/get-post.php')
        //             .done(function (data) {

        //                 let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //                 let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        //                 let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //                 let pBody = $('<p></p>').text(`Body: ${data.body}`)
        //                 let pHr = $('<hr  />')

        //                 let jqBody = $('body');
        //                 jqBody.append(pId);
        //                 jqBody.append(pUserId);
        //                 jqBody.append(pTitle);
        //                 jqBody.append(pBody);
        //                 jqBody.append(pHr);


        //                 console.log(pId)
        //             })
        //             .fail(function (error) {
        //                 console.error(error);
        //             });;
        //     })
        // })

        // Wariant II

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`)
                let pHr = $('<hr  />')

                let jqBody = $('body');
                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(pHr);


                console.log(pId)
            })
            .fail(function (error) {
                console.error(error);
            })
    })
});