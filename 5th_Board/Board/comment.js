$(document).ready(function () {
  const seq = window.location.pathname.split("/").pop();

  //댓글 불러오기
  function loadComments() {
    $.ajax({
      url: `/api/comments/${seq}`,
      type: "get",
      dataType: "json",
    })
      .done(function (data) {
        $("#commentsList").empty();
        $("#commentsCount").text(data.length);

        data.forEach((comment) => {
          const commentItem = `
            <li class="list-group-item">
            <strong>${comment.uname}</strong>
            <span>${comment.regDate}</span>
            <p>${comment.comments}</p>
            </li>`;
          $("#commentsList").append(commentItem);
        });
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error("댓글로드에 실패했습니다", textStatus, errorThrown);
      });
  }

  //댓글 추가

  $("#addCommentBtn").click(function () {
    const comment = $("#commentInput").val().trim();
    if (!comment) {
      alert("댓글을 입력하세요");
      return;
    }

    $.ajax({
      url: `/api/comments/${seq}`,
      type: "post",
      contentType: "application/json",
      data: JSON.stringify({ uname: "유징", comments: comment }),
      success: function () {
        $("#commentInput").val(""); //입력창 비우기
        loadComments(); // 댓글 새로고침

        //댓글 수 카운팅
        const currentCount = parseInt($("#commentsCount").text(), 10 || 0);
        $("#commentsCount").text(currentCount + 1);
      },
      error: function () {
        alert("댓글 추가 실패. 다시 시도해주세요");
      },
    });
  });
  loadComments();
});
