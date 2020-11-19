{
    console.log("Hello comments");
    // method to create comment via AJAX
    let createComment = function () {
        let newCommentForm = $('#new-comment-form');
        newCommentForm.submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/comments/create',
                data: newCommentForm.serialize(),
                success: function (data) {
                    let newComment = newCommentDom(data.data.comment, data.data.post);
                    $('.post-comments-list>ul').prepend(newComment);
                    deleteComment($(' .delete-comment-button', newComment));
                },
                error: function (error) {
                    console.log(error.responseText);
                }
            });
        });
    }

    // method to create a comment in DOM
    let newCommentDom = function (comment, post) {
        return $(`<li id="comment-${comment._id}">
                    <p>
                            <small>
                                <a href="/comments/destroy/${comment._id}">X</a>
                            </small>
                        ${comment.content}
                        <br>
                        <small>
                            ${comment.user.name}
                        </small>
                    </p>
                </li>`);
    }

    // method to delete a comment from DOM
    let deleteComment = function (deleteLink) {
        console.log('test prevent default5');
        $(deleteLink).click(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success: function (data) {
                    $(`#comment-${data.data.comment_id}`).remove();
                },
                error: function (error) {
                    console.log(error.responseText);
                }
            });
        });
    }

    createComment();
}