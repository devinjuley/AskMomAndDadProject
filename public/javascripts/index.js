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


const ansButtons = document.querySelectorAll('.delete-ans-btn')
// const answerId = document.getElementById(`answer-delete-${answer.id}`)
for (let i = 0; i < ansButtons.length; i++) {
    const ansButton = ansButtons[i];
    ansButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const answerId = e.target.id.split('-')[2]
        const res = await fetch(`/answers/${answerId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector(`#answer-container-${answerId}`)
            container.remove()
        }
    })

}

const commentButtons = document.querySelectorAll('.delete-cmt-btn')
// const answerId = document.getElementById(`answer-delete-${answer.id}`)
for (let i = 0; i < commentButtons.length; i++) {
    const commentButton = commentButtons[i];
    commentButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const commentId = e.target.id.split('-')[2]
        const res = await fetch(`/comments/${commentId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message === "Success") {
            const container = document.querySelector(`#comment-container-${commentId}`)
            container.remove()
        }
    })

}

// const questionEditButtons = document.querySelectorAll('.edit-btn')
// // const answerId = document.getElementById(`answer-delete-${answer.id}`)
// for (let i = 0; i < questionEditButtons.length; i++) {
//     const questionEditButton = questionEditButtons[i];
//     questionEditButton.addEventListener('click', async (e) => {
//         e.preventDefault();

//         const questionId = e.target.id.split('-')[2]
//         const res = await fetch(`/questions/${questionId}`, {
//             method: 'DELETE'
//         })

//         const data = await res.json()
//         if (data.message === "Success") {
//             const container = document.querySelector(`#comment-container-${commentId}`)
//             container.remove()
//         }
//     })

// }