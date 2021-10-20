
console.log('this is a test')
const buttons = document.querySelectorAll('.delete-btn')

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const questionId = e.target.id.split('-')[2]
        const res = await fetch(`/questions/${questionId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector(`#question-container-${questionId}`)
            container.remove()
        }
    })

}





// const deleteButton = document.createElement('button');
// deleteButton.className = "delete-button";
// deleteButton.style.marginLeft = "45px";
// deleteButton.innerText = 'Delete';
// deleteButton.addEventListener('click', e => {
//     // Remove comment from HTML DOM
//     newCommentContainer.remove();
// });





// }
