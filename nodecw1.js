let customerName = "Smith";   
let customerComment = "The cafe food was really tasty and the service was excellent!";

let review = {
    name: customerName,
    comment: customerComment
};

function printReviewMessage(reviewObject) {

    let upperName = reviewObject.name.toUpperCase();

    let shortComment = reviewObject.comment.substring(0, 20);

    console.log("Thank you, " + upperName + "!");
    console.log("Your comment (first 20 characters): " + shortComment);
}

printReviewMessage(review);